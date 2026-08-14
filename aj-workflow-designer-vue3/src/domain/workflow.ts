export interface Point {
  x: number;
  y: number;
}

export interface Box extends Point {
  width: number;
  height: number;
}

export interface WorkflowProperty {
  value: string;
}

export type WorkflowProperties = Record<string, WorkflowProperty>;

export interface WorkflowField {
  name: string;
  displayName: string;
  type: string;
  attrs: Record<string, string>;
}

export interface WorkflowNode {
  type: string;
  attr: Box;
  text?: { text: string; x?: number; y?: number };
  props: WorkflowProperties;
  fields?: WorkflowField[];
}

export interface WorkflowTransition {
  from: string;
  to: string;
  dots: Point[];
  text?: { text: string; x?: number; y?: number };
  props: WorkflowProperties;
}

export interface WorkflowDefinition {
  states: Record<string, WorkflowNode>;
  paths: Record<string, WorkflowTransition>;
  props: Record<string, string>;
}

/** 深度复制一个 JSON 流程模型。 */
export function cloneWorkflow(source: WorkflowDefinition): WorkflowDefinition {
  return JSON.parse(JSON.stringify(source)) as WorkflowDefinition;
}

/** 仅检查渲染器必需的数据结构，业务规则校验由 inspectWorkflow 负责。 */
export function isRenderableWorkflow(value: unknown): value is WorkflowDefinition {
  if (
    !isRecord(value) ||
    !isRecord(value.states) ||
    !isRecord(value.paths) ||
    !isRecord(value.props)
  )
    return false;

  for (const node of Object.values(value.states)) {
    if (
      !isRecord(node) ||
      typeof node.type !== "string" ||
      !isRecord(node.attr) ||
      !isRecord(node.props)
    )
      return false;

    const attr: Record<string, unknown> = node.attr;

    if (
      ![attr.x, attr.y, attr.width, attr.height].every(Number.isFinite) ||
      (attr.width as number) <= 0 ||
      (attr.height as number) <= 0
    )
      return false;
  }

  for (const path of Object.values(value.paths)) {
    if (
      !isRecord(path) ||
      typeof path.from !== "string" ||
      typeof path.to !== "string" ||
      !value.states[path.from] ||
      !value.states[path.to] ||
      !isRecord(path.props)
    )
      return false;


    if (!Array.isArray(path.dots))

      return false;

    const dots: unknown[] = path.dots;

    if (
      dots.some(
        (point) => !isRecord(point) || !Number.isFinite(point.x) || !Number.isFinite(point.y),
      )
    )
      return false;
  }
  return true;
}

export interface WorkflowValidationIssue {
  code: string;
  message: string;
  target?: string;
}

export class WorkflowValidationError extends Error {
  /** 使用完整的问题列表创建流程校验异常。 */
  constructor(public readonly issues: WorkflowValidationIssue[]) {
    super(issues.map((issue) => issue.message).join("；"));
    this.name = "WorkflowValidationError";
  }
}

/** 返回全部校验问题，适合在发布前一次性展示给用户。 */
export function inspectWorkflow(value: unknown): WorkflowValidationIssue[] {
  const issues: WorkflowValidationIssue[] = [];
  /** 向当前校验结果追加一条问题。 */
  const add = (code: string, message: string, target?: string): void => {
    issues.push({ code, message, target });
  };

  if (!isRecord(value))
    return [{ code: "INVALID_ROOT", message: "流程定义必须是普通对象" }];
  const data = value as Partial<WorkflowDefinition>;

  if (!isRecord(data.states))
    add("MISSING_STATES", "流程定义缺少有效的 states 对象");

  if (!isRecord(data.paths))
    add("MISSING_PATHS", "流程定义缺少有效的 paths 对象");

  if (!isRecord(data.props))
    add("MISSING_PROPS", "流程定义缺少有效的 props 对象");

  if (issues.length)
    return issues;

  const states = data.states!;
  const paths = data.paths!;
  const props = data.props!;

  if (typeof props.name !== "string" || !props.name.trim())
    add("PROCESS_NAME_REQUIRED", "流程名称不能为空", "process");

  const supported = new Set([
    "start",
    "end",
    "task",
    "decision",
    "fork",
    "join",
    "custom",
    "subprocess",
  ]);
  const nodeNames = new Set<string>();
  const pathNames = new Set<string>();
  const starts: string[] = [];
  const ends: string[] = [];
  const incoming = new Map<string, string[]>();
  const outgoing = new Map<string, string[]>();
  Object.keys(states).forEach((ref) => {
    incoming.set(ref, []);
    outgoing.set(ref, []);
  });


  for (const [ref, node] of Object.entries(states)) {
    if (!isRecord(node)) {
      add("INVALID_NODE", `节点 ${ref} 无效`, ref);
      continue;
    }
    const typedNode = node as unknown as WorkflowNode;

    if (typeof typedNode.type !== "string" || !supported.has(typedNode.type))
      add("UNSUPPORTED_NODE", `节点 ${ref} 的类型不受支持: ${String(typedNode.type || "空")}`, ref);

    if (
      !isRecord(typedNode.attr) ||
      ![typedNode.attr.x, typedNode.attr.y, typedNode.attr.width, typedNode.attr.height].every(
        Number.isFinite,
      ) ||
      typedNode.attr.width <= 0 ||
      typedNode.attr.height <= 0
    )
      add("INVALID_NODE_BOX", `节点 ${ref} 的位置或尺寸无效`, ref);
    const nodeProps = isRecord(typedNode.props) ? typedNode.props : {};

    if (!isRecord(typedNode.props))
      add("INVALID_NODE_PROPS", `节点 ${ref} 的 props 必须是对象`, ref);
    const name = propertyString(nodeProps, "name");

    if (!name)
      add("NODE_NAME_REQUIRED", `节点 ${ref} 的业务名称不能为空`, ref);

    else if (nodeNames.has(name))
      add("DUPLICATE_NODE_NAME", `节点业务名称重复: ${name}`, ref);
    else nodeNames.add(name);

    if (typedNode.type === "start")
      starts.push(ref);

    if (typedNode.type === "end")
      ends.push(ref);

    /** 读取当前节点属性。 */
    const prop = (key: string): string => propertyString(nodeProps, key);

    if (typedNode.type === "task") {
      if (prop("performType") && !["ANY", "ALL"].includes(prop("performType").toUpperCase()))
        add("INVALID_PERFORM_TYPE", `任务 ${ref} 的参与类型必须是 ANY 或 ALL`, ref);

      if (prop("taskType") && !["Major", "Aidant"].includes(prop("taskType")))
        add("INVALID_TASK_TYPE", `任务 ${ref} 的任务类型必须是 Major 或 Aidant`, ref);

      if (
        prop("reminderRepeat") &&
        (!/^\d+$/.test(prop("reminderRepeat")) || Number(prop("reminderRepeat")) <= 0)
      )
        add("INVALID_REMINDER_REPEAT", `任务 ${ref} 的重复提醒间隔必须是正整数`, ref);
      const fieldNames = new Set<string>();

      if (typedNode.fields !== undefined && !Array.isArray(typedNode.fields))
        add("INVALID_FIELDS", `任务 ${ref} 的 fields 必须是数组`, ref);

      for (const [index, field] of (Array.isArray(typedNode.fields)
        ? typedNode.fields
        : []
      ).entries()) {
        if (!isRecord(field)) {
          add("INVALID_FIELD", `任务 ${ref} 的第 ${index + 1} 个字段无效`, ref);
          continue;
        }
        const fieldName = typeof field.name === "string" ? field.name.trim() : "";

        if (!fieldName)
          add("FIELD_NAME_REQUIRED", `任务 ${ref} 的第 ${index + 1} 个字段名称不能为空`, ref);

        else if (fieldNames.has(fieldName))
          add("DUPLICATE_FIELD_NAME", `任务 ${ref} 的字段名称重复: ${fieldName}`, ref);
        else fieldNames.add(fieldName);

        if (typeof field.type !== "string" || !field.type.trim())
          add("FIELD_TYPE_REQUIRED", `任务 ${ref} 的字段 ${fieldName || index + 1} 缺少类型`, ref);

        if (!isRecord(field.attrs))
          add(
            "INVALID_FIELD_ATTRS",
            `任务 ${ref} 的字段 ${fieldName || index + 1} 的 attrs 必须是对象`,
            ref,
          );
      }
    }

    if (typedNode.type === "custom" && !prop("clazz"))
      add("CUSTOM_CLASS_REQUIRED", `自定义节点 ${ref} 必须配置执行类`, ref);

    if (typedNode.type === "subprocess") {
      if (!prop("processName"))
        add("SUBPROCESS_NAME_REQUIRED", `子流程节点 ${ref} 必须配置流程名称`, ref);

      if (prop("version") && (!/^\d+$/.test(prop("version")) || Number(prop("version")) < 0))
        add("INVALID_SUBPROCESS_VERSION", `子流程节点 ${ref} 的版本必须是非负整数`, ref);
    }
  }

  for (const [ref, path] of Object.entries(paths)) {
    if (!isRecord(path)) {
      add("INVALID_PATH", `连线 ${ref} 无效`, ref);
      continue;
    }
    const typedPath = path as unknown as WorkflowTransition;

    if (
      typeof typedPath.from !== "string" ||
      typeof typedPath.to !== "string" ||
      !states[typedPath.from] ||
      !states[typedPath.to]
    ) {
      add("DANGLING_PATH", `连线 ${ref} 引用了不存在的节点`, ref);
      continue;
    }

    if (typedPath.from === typedPath.to)
      add("SELF_PATH", `连线 ${ref} 不能连接节点自身`, ref);
    outgoing.get(typedPath.from)!.push(ref);
    incoming.get(typedPath.to)!.push(ref);
    const pathProps = isRecord(typedPath.props) ? typedPath.props : {};

    if (!isRecord(typedPath.props))
      add("INVALID_PATH_PROPS", `连线 ${ref} 的 props 必须是对象`, ref);
    const name = propertyString(pathProps, "name");

    if (!name)
      add("PATH_NAME_REQUIRED", `连线 ${ref} 的名称不能为空`, ref);

    else if (pathNames.has(name))
      add("DUPLICATE_PATH_NAME", `连线名称重复: ${name}`, ref);
    else pathNames.add(name);

    if (
      !Array.isArray(typedPath.dots) ||
      typedPath.dots.some(
        (point) => !isRecord(point) || !Number.isFinite(point.x) || !Number.isFinite(point.y),
      )
    )
      add("INVALID_PATH_POINTS", `连线 ${ref} 的拐点坐标无效`, ref);
  }

  if (starts.length !== 1)

    add("START_COUNT", "流程必须且只能包含一个开始节点", "process");

  if (!ends.length)
    add("END_REQUIRED", "流程至少需要一个结束节点", "process");

  for (const [ref, rawNode] of Object.entries(states)) {
    if (!isRecord(rawNode))
      continue;

    const node = rawNode as unknown as WorkflowNode;
    const inputCount = incoming.get(ref)?.length || 0;
    const outputCount = outgoing.get(ref)?.length || 0;

    if (node.type === "start" && inputCount)
      add("START_HAS_INPUT", `开始节点 ${ref} 不能有输入连线`, ref);

    if (node.type === "end" && outputCount)
      add("END_HAS_OUTPUT", `结束节点 ${ref} 不能有输出连线`, ref);

    if (node.type !== "end" && outputCount === 0)
      add("NODE_WITHOUT_OUTPUT", `节点 ${ref} 没有输出连线`, ref);

    if (node.type !== "start" && inputCount === 0)
      add("NODE_WITHOUT_INPUT", `节点 ${ref} 没有输入连线`, ref);

    if (node.type === "fork" && outputCount < 2)
      add("FORK_OUTPUTS", `分支节点 ${ref} 至少需要两条输出连线`, ref);

    if (node.type === "join" && inputCount < 2)
      add("JOIN_INPUTS", `合并节点 ${ref} 至少需要两条输入连线`, ref);

    if (node.type === "decision") {
      const hasResolver =
        propertyString(isRecord(node.props) ? node.props : {}, "expr") !== "" ||
        propertyString(isRecord(node.props) ? node.props : {}, "handleClass") !== "";
      const hasConditionalPath = (outgoing.get(ref) || []).some((pathRef) => {
        const path = paths[pathRef] as unknown;
        return (
          isRecord(path) && propertyString(isRecord(path.props) ? path.props : {}, "expr") !== ""
        );
      });

      if (!hasResolver && !hasConditionalPath)
        add("DECISION_RULE_REQUIRED", `判断节点 ${ref} 必须配置表达式、处理类或条件连线`, ref);
    }
  }


  if (starts.length === 1) {
    const reachable = walk(starts, (ref) =>
      (outgoing.get(ref) || []).map((pathRef) => (paths[pathRef] as WorkflowTransition).to),
    );
    Object.keys(states)
      .filter((ref) => !reachable.has(ref))
      .forEach((ref) => add("UNREACHABLE_NODE", `节点 ${ref} 无法从开始节点到达`, ref));
  }

  if (ends.length) {
    const reachesEnd = walk(ends, (ref) => (incoming.get(ref) || []).map((pathRef) => (paths[pathRef] as WorkflowTransition).from));
    Object.keys(states)
      .filter((ref) => !reachesEnd.has(ref))
      .forEach((ref) => add("NO_PATH_TO_END", `节点 ${ref} 无法到达结束节点`, ref));
  }

  return issues;
}

/** 判断值是否为非数组普通对象。 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** 安全读取属性映射中的字符串值。 */
function propertyString(props: Record<string, unknown>, key: string): string {
  const item = props[key];

  return isRecord(item) && typeof item.value === "string" ? item.value.trim() : "";
}

/** 从给定节点集合开始遍历图并返回全部可达节点。 */
function walk(initial: string[], next: (ref: string) => string[]): Set<string> {
  const visited = new Set<string>();
  const pending = [...initial];

  while (pending.length) {
    const ref = pending.pop()!;

    if (visited.has(ref))
      continue;

    visited.add(ref);
    next(ref).forEach((item) => {
      if (!visited.has(item))
        pending.push(item);
    });
  }

  return visited;
}

/** 校验流程，存在任何问题时抛出 WorkflowValidationError。 */
export function validateWorkflow(value: unknown): asserts value is WorkflowDefinition {
  const issues: WorkflowValidationIssue[] = inspectWorkflow(value);

  if (issues.length)
    throw new WorkflowValidationError(issues);
}
