<template>
  <main ref="designerRoot" class="designer-shell" tabindex="0" @keydown="handleKeydown">
    <aside class="toolbox">
      <h1>Workflow</h1>
      <p class="muted">Vue 3 Designer</p>
      <button type="button" :disabled="readonly" :class="{ active: connectMode }" @click="toggleConnect">{{ connectMode ? (connectFrom ? '请选择终点' : '请选择起点') : '创建连线' }}</button>
      <h2>组件</h2>
      <button v-for="item in nodeTypes" :key="item.type" type="button" :disabled="readonly" @click="addNode(item.type)">
        <span :class="['node-icon', item.type]" />{{ item.label }}
      </button>
    </aside>

    <section class="workspace">
      <header class="toolbar">
        <div>
          <button type="button" :disabled="readonly" @click="newWorkflow">新建</button>
          <button type="button" :disabled="readonly" @click="restoreSample">打开示例</button>
          <button type="button" @click="runValidation">校验流程</button>
          <button type="button" @click="downloadJson">导出 JSON</button>
          <button type="button" :disabled="readonly || !canUndo" @click="undo">撤销</button>
          <button type="button" :disabled="readonly || !canRedo" @click="redo">重做</button>
          <button type="button" :disabled="readonly || !selection" @click="deleteSelection">删除</button>
          <button type="button" :disabled="readonly || !copyableNodeRefs.length" @click="copySelection">复制</button>
          <button type="button" :disabled="readonly || !clipboard" @click="pasteSelection">粘贴</button>
          <template v-if="selectedNodeRefs.length > 1">
            <button type="button" :disabled="readonly" @click="alignSelection('left')">左对齐</button>
            <button type="button" :disabled="readonly" @click="alignSelection('top')">顶对齐</button>
            <button type="button" :disabled="readonly || selectedNodeRefs.length < 3" @click="distributeSelection('horizontal')">水平分布</button>
            <button type="button" :disabled="readonly || selectedNodeRefs.length < 3" @click="distributeSelection('vertical')">垂直分布</button>
          </template>
        </div>
        <nav aria-label="编辑模式">
          <button type="button" :class="{ active: mode === 'design' }" @click="mode = 'design'">设计</button>
          <button type="button" :class="{ active: mode === 'json' }" @click="openJson">JSON</button>
        </nav>
        <button type="button" class="about" @click="aboutOpen = true">关于</button>
        <span v-if="dirty" class="dirty" title="有尚未导出的修改">● 未保存</span>
      </header>

      <div class="view-tools">
        <button type="button" title="放大" @click="zoomIn">＋</button>
        <button type="button" title="缩小" @click="zoomOut">－</button>
        <button type="button" title="恢复 100%" @click="resetView">{{ zoomPercentage }}%</button>
        <button type="button" @click="fitToContent">适应窗口</button>
        <span>滚轮缩放，Alt+拖动或中键拖动画布；双击连线增加拐点，双击拐点删除</span>
      </div>

      <div v-show="mode === 'design'" ref="canvasHost" class="canvas" @pointerdown="activateDesigner" @click.self="select(null)" />
      <section v-if="mode === 'json'" class="json-editor">
        <textarea v-model="jsonCode" :readonly="readonly" spellcheck="false" aria-label="流程 JSON" />
        <div class="json-actions"><span v-if="jsonError" class="error">{{ jsonError }}</span><button type="button" :disabled="readonly" @click="applyJson">应用 JSON</button></div>
      </section>
    </section>

    <PropertyEditor :workflow="workflow" :selection="selection" :readonly="readonly" @change="commitPropertyChange" />
    <SimpleModal :open="aboutOpen" title="关于 Aj Workflow Designer" @close="aboutOpen = false">
      <p>基于 Vue 3、TypeScript 与 Raphael 的轻量级流程设计器。</p>
      <p>SVG 图形采用命令式适配器管理，不进入 Vue 响应式系统。</p>
    </SimpleModal>
    <SimpleModal :open="validationOpen" :title="validationIssues.length ? `发现 ${validationIssues.length} 个问题` : '流程校验通过'" @close="validationOpen = false">
      <p v-if="!validationIssues.length" class="validation-success">流程结构和属性校验通过。</p>
      <ol v-else class="validation-list"><li v-for="(issue, index) in validationIssues" :key="`${issue.code}-${index}`"><button type="button" @click="focusIssue(issue)">{{ issue.message }}</button></li></ol>
    </SimpleModal>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import PropertyEditor from "@/components/PropertyEditor.vue";
import SimpleModal from "@/components/SimpleModal.vue";
import { WorkflowCanvas, type Selection } from "@/canvas/workflow-canvas";
import { SAMPLE_WORKFLOW } from "@/domain/sample-workflow";
import { cloneWorkflow, inspectWorkflow, isRenderableWorkflow, validateWorkflow, type WorkflowDefinition, type WorkflowValidationIssue } from "@/domain/workflow";

const props = withDefaults(defineProps<{ modelValue?: WorkflowDefinition; readonly?: boolean; guardBeforeUnload?: boolean }>(), { readonly: false, guardBeforeUnload: false });
const emit = defineEmits<{ "update:modelValue": [value: WorkflowDefinition]; change: [value: WorkflowDefinition]; "dirty-change": [dirty: boolean]; "load-error": [issues: WorkflowValidationIssue[]] }>();

const nodeTypes = [
  { type: "start", label: "开始" }, { type: "end", label: "结束" }, { type: "task", label: "任务" },
  { type: "decision", label: "判断" }, { type: "fork", label: "分支" }, { type: "join", label: "合并" },
  { type: "custom", label: "自定义" }, { type: "subprocess", label: "子流程" }
];
const canvasHost = ref<HTMLElement | null>(null);
const designerRoot = ref<HTMLElement | null>(null);
const initialModel = isRenderableWorkflow(props.modelValue) ? props.modelValue : SAMPLE_WORKFLOW;
const workflow = ref<WorkflowDefinition>(cloneWorkflow(initialModel));
const readonly = computed(() => props.readonly);
const selection = ref<Selection>(null);
const mode = ref<"design" | "json">("design");
const jsonCode = ref("");
const jsonError = ref("");
const aboutOpen = ref(false);
const validationOpen = ref(false);
const validationIssues = ref<WorkflowValidationIssue[]>([]);
let canvas: WorkflowCanvas | null = null;
const undoStack = ref<WorkflowDefinition[]>([]);
const redoStack = ref<WorkflowDefinition[]>([]);
const cleanSnapshot = ref(JSON.stringify(workflow.value));
let editBefore: WorkflowDefinition | null = null;
const connectMode = ref(false);
const connectFrom = ref<string | null>(null);
const canUndo = computed(() => undoStack.value.length > 0);
const canRedo = computed(() => redoStack.value.length > 0);
const dirty = computed(() => JSON.stringify(workflow.value) !== cleanSnapshot.value);
const selectedNodeRefs = computed(() => selection.value?.kind === "nodes" ? selection.value.refs : selection.value?.kind === "node" ? [selection.value.ref] : []);
const copyableNodeRefs = computed(() => selectedNodeRefs.value.filter(ref => workflow.value.states[ref]?.type !== "start"));
interface Clipboard { nodes: Record<string, WorkflowDefinition["states"][string]>; paths: Record<string, WorkflowDefinition["paths"][string]> }
const clipboard = ref<Clipboard | null>(null);
let pasteCount = 0;
const zoomPercentage = ref(100);

const select = (value: Selection) => canvas?.select(value);
const zoomIn = () => canvas?.zoomIn();
const zoomOut = () => canvas?.zoomOut();
const fitToContent = () => canvas?.fitToContent();
const resetView = () => canvas?.resetView();
const alignSelection = (mode: "left" | "center" | "right" | "top" | "middle" | "bottom") => canvas?.alignSelection(mode);
const distributeSelection = (axis: "horizontal" | "vertical") => canvas?.distributeSelection(axis);
const onCanvasSelect = (value: Selection) => {
  selection.value = value;
  if (readonly.value) return;
  if (!connectMode.value || value?.kind !== "node") return;
  if (!connectFrom.value) { connectFrom.value = value.ref; return; }
  if (connectFrom.value === value.ref) { window.alert("连线不能连接节点自身"); return; }
  createPath(connectFrom.value, value.ref);
  connectMode.value = false; connectFrom.value = null;
};
const render = () => { canvas?.load(workflow.value); selection.value = null; };
const refreshCanvas = () => canvas?.refresh();
const restoreSample = () => { if (!confirmDiscard()) return; replaceWorkflow(SAMPLE_WORKFLOW, { markClean: true, emit: true }); };
const newWorkflow = () => {
  if (!confirmDiscard()) return;
  replaceWorkflow({ states: {}, paths: {}, props: { name: "new-process", displayName: "新流程", expireTime: "", instanceUrl: "", instanceNoClass: "" } }, { markClean: true, emit: true });
};
const addNode = (type: string) => {
  if (readonly.value) return;
  if (type === "start" && Object.values(workflow.value.states).some(node => node.type === "start")) {
    window.alert("流程只能包含一个开始节点"); return;
  }
  let index = 1;
  while (workflow.value.states[`${type}${index}`]) index++;
  const ref = `${type}${index}`;
  const props: Record<string, { value: string }> = {
    name: { value: ref }, displayName: { value: ref }, preInterceptors: { value: "" }, postInterceptors: { value: "" }
  };
  if (type === "task") Object.assign(props, { form: { value: "" }, assignee: { value: "" }, performType: { value: "ANY" }, taskType: { value: "Major" }, expireTime: { value: "" }, reminderTime: { value: "" }, reminderRepeat: { value: "" }, autoExecute: { value: "" }, callback: { value: "" } });
  if (type === "decision") Object.assign(props, { expr: { value: "" }, handleClass: { value: "" } });
  if (type === "custom") Object.assign(props, { form: { value: "" }, clazz: { value: "" }, methodName: { value: "" }, args: { value: "" }, var: { value: "" } });
  if (type === "subprocess") Object.assign(props, { form: { value: "" }, processName: { value: "" }, version: { value: "0" } });
  const count = Object.keys(workflow.value.states).length;
  const before = cloneWorkflow(workflow.value);
  workflow.value.states[ref] = { type, attr: { x: 80 + count % 4 * 150, y: 80 + Math.floor(count / 4) * 100, width: ["start", "end", "decision", "fork", "join"].includes(type) ? 48 : 120, height: 52 }, props, fields: type === "task" ? [] : undefined };
  record(before);
  render();
  nextTick(() => canvas?.select({ kind: "node", ref }));
};
const toggleConnect = () => { connectMode.value = !connectMode.value; connectFrom.value = null; };
const createPath = (from: string, to: string) => {
  if (workflow.value.states[from]?.type === "end") { window.alert("结束节点不能作为连线起点"); return; }
  if (workflow.value.states[to]?.type === "start") { window.alert("开始节点不能作为连线终点"); return; }
  if (Object.values(workflow.value.paths).some(path => path.from === from && path.to === to)) { window.alert("这两个节点之间已存在同方向连线"); return; }
  const before = cloneWorkflow(workflow.value); let index = 1; while (workflow.value.paths[`transition${index}`]) index++;
  const ref = `transition${index}`;
  workflow.value.paths[ref] = { from, to, dots: [], text: { text: "", x: 0, y: -8 }, props: { name: { value: ref }, displayName: { value: "" }, expr: { value: "" } } };
  record(before); render(); nextTick(() => canvas?.select({ kind: "path", ref }));
};
const deleteSelection = () => {
  if (readonly.value || !selection.value) return;
  const before = cloneWorkflow(workflow.value);
  if (selection.value.kind === "path") delete workflow.value.paths[selection.value.ref];
  else { const refs = selection.value.kind === "nodes" ? selection.value.refs : [selection.value.ref]; refs.forEach(ref => delete workflow.value.states[ref]); Object.entries(workflow.value.paths).forEach(([key, path]) => { if (refs.includes(path.from) || refs.includes(path.to)) delete workflow.value.paths[key]; }); }
  record(before); render();
};
const copySelection = () => {
  const refs = copyableNodeRefs.value;
  if (!refs.length) return;
  const nodes: Clipboard["nodes"] = {}, paths: Clipboard["paths"] = {};
  refs.forEach(ref => nodes[ref] = cloneWorkflow({ states: { [ref]: workflow.value.states[ref] }, paths: {}, props: {} }).states[ref]);
  Object.entries(workflow.value.paths).forEach(([ref, path]) => { if (refs.includes(path.from) && refs.includes(path.to)) paths[ref] = JSON.parse(JSON.stringify(path)); });
  clipboard.value = { nodes, paths };
  pasteCount = 0;
};
const uniqueRef = (base: string, collection: Record<string, unknown>) => { let index = 1, value = `${base}_copy`; while (collection[value]) value = `${base}_copy${++index}`; return value; };
const pasteSelection = () => {
  if (readonly.value || !clipboard.value) return;
  const before = cloneWorkflow(workflow.value), refs = Object.keys(clipboard.value.nodes), refMap: Record<string, string> = {}, pasted: string[] = [], offset = 30 * ++pasteCount;
  refs.forEach(ref => {
    const node = JSON.parse(JSON.stringify(clipboard.value!.nodes[ref]));
    const nextRef = uniqueRef(ref, workflow.value.states); refMap[ref] = nextRef; pasted.push(nextRef);
    node.attr.x += offset; node.attr.y += offset; node.props.name = { value: nextRef };
    workflow.value.states[nextRef] = node;
  });
  Object.entries(clipboard.value.paths).forEach(([ref, source]) => {
    const nextRef = uniqueRef(ref, workflow.value.paths), path = JSON.parse(JSON.stringify(source));
    path.from = refMap[path.from]; path.to = refMap[path.to]; path.dots = path.dots.map((point: { x: number; y: number }) => ({ x: point.x + offset, y: point.y + offset })); path.props.name = { value: nextRef };
    workflow.value.paths[nextRef] = path;
  });
  record(before); render(); nextTick(() => canvas?.select(pasted.length > 1 ? { kind: "nodes", refs: pasted } : { kind: "node", ref: pasted[0] }));
};
const openJson = () => { jsonCode.value = JSON.stringify(workflow.value, null, 2); jsonError.value = ""; mode.value = "json"; };
const applyJson = () => {
  try {
    const parsed: unknown = JSON.parse(jsonCode.value);
    validateWorkflow(parsed);
    const before = cloneWorkflow(workflow.value);
    workflow.value = cloneWorkflow(parsed);
    record(before);
    propertyBefore = cloneWorkflow(workflow.value);
    jsonError.value = "";
    mode.value = "design";
    nextTick(render);
  } catch (error) { jsonError.value = error instanceof Error ? error.message : "JSON 无效"; }
};
const runValidation = () => {
  validationIssues.value = inspectWorkflow(workflow.value);
  validationOpen.value = true;
};
const focusIssue = (issue: WorkflowValidationIssue) => {
  if (!issue.target || issue.target === "process") { validationOpen.value = false; canvas?.fitToContent(); return; }
  const kind = workflow.value.states[issue.target] ? "node" : workflow.value.paths[issue.target] ? "path" : null;
  if (kind) { validationOpen.value = false; mode.value = "design"; nextTick(() => canvas?.focus({ kind, ref: issue.target! })); }
};
const downloadJson = () => {
  validationIssues.value = inspectWorkflow(workflow.value);
  if (validationIssues.value.length) { validationOpen.value = true; return; }
  const url = URL.createObjectURL(new Blob([JSON.stringify(workflow.value, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url; link.download = `${workflow.value.props.name || "workflow"}.json`; link.click();
  URL.revokeObjectURL(url);
};
const record = (before: WorkflowDefinition) => { if (readonly.value || JSON.stringify(before) === JSON.stringify(workflow.value)) return; undoStack.value.push(before); if (undoStack.value.length > 100) undoStack.value.shift(); redoStack.value = []; emitChange(); };
const beginCanvasEdit = () => { editBefore = cloneWorkflow(workflow.value); };
const endCanvasEdit = () => { if (editBefore) record(editBefore); editBefore = null; propertyBefore = cloneWorkflow(workflow.value); };
let propertyBefore = cloneWorkflow(workflow.value);
const commitPropertyChange = () => { if (readonly.value) return; record(propertyBefore); propertyBefore = cloneWorkflow(workflow.value); refreshCanvas(); };
const replaceWorkflow = (value: WorkflowDefinition, options: { markClean?: boolean; emit?: boolean } = {}) => {
  if (!isRenderableWorkflow(value)) { emit("load-error", inspectWorkflow(value)); return false; }
  workflow.value = cloneWorkflow(value);
  undoStack.value = [];
  redoStack.value = [];
  propertyBefore = cloneWorkflow(value);
  if (options.markClean) cleanSnapshot.value = JSON.stringify(value);
  mode.value = "design";
  if (options.emit) emitChange();
  nextTick(render);
  return true;
};
const undo = () => { const previous = undoStack.value.pop(); if (!previous) return; redoStack.value.push(cloneWorkflow(workflow.value)); workflow.value = previous; propertyBefore = cloneWorkflow(previous); emitChange(); nextTick(render); };
const redo = () => { const next = redoStack.value.pop(); if (!next) return; undoStack.value.push(cloneWorkflow(workflow.value)); workflow.value = next; propertyBefore = cloneWorkflow(next); emitChange(); nextTick(render); };
const confirmDiscard = () => !dirty.value || window.confirm("当前流程有未保存修改，确定放弃吗？");
const handleResize = () => canvas?.resize();
const activateDesigner = () => designerRoot.value?.focus({ preventScroll: true });
const handleKeydown = (event: KeyboardEvent) => {
  const target = event.target as HTMLElement;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
  if (event.key === "Escape") { connectMode.value = false; connectFrom.value = null; canvas?.select(null); }
  if (readonly.value) return;
  if ((event.key === "Delete" || event.key === "Backspace") && selection.value) { event.preventDefault(); deleteSelection(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") { event.preventDefault(); event.shiftKey ? redo() : undo(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "y") { event.preventDefault(); redo(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c") { event.preventDefault(); copySelection(); }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v") { event.preventDefault(); pasteSelection(); }
  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key) && selectedNodeRefs.value.length) {
    event.preventDefault(); const step = event.shiftKey ? 10 : 1;
    canvas?.moveSelection(event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0, event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0);
  }
};
const handleBeforeUnload = (event: BeforeUnloadEvent) => { if (props.guardBeforeUnload && dirty.value) { event.preventDefault(); event.returnValue = ""; } };

onMounted(() => {
  if (props.modelValue && !isRenderableWorkflow(props.modelValue)) emit("load-error", inspectWorkflow(props.modelValue));
  if (!canvasHost.value) return;
  canvas = new WorkflowCanvas(canvasHost.value, { onSelect: onCanvasSelect, onZoom: value => zoomPercentage.value = value, onEditStart: beginCanvasEdit, onEditEnd: endCanvasEdit }, readonly.value);
  render();
  window.addEventListener("resize", handleResize);
  window.addEventListener("beforeunload", handleBeforeUnload);
});

const emitChange = () => { const value = cloneWorkflow(workflow.value); emit("update:modelValue", value); emit("change", value); };
watch(() => props.readonly, value => { canvas?.setReadOnly(value); if (value) { connectMode.value = false; connectFrom.value = null; } });
watch(() => props.modelValue, value => {
  if (value && JSON.stringify(value) !== JSON.stringify(workflow.value)) replaceWorkflow(value, { markClean: true });
}, { deep: true });
watch(dirty, value => emit("dirty-change", value), { immediate: true });
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("beforeunload", handleBeforeUnload);
  canvas?.destroy();
});

const markClean = () => { cleanSnapshot.value = JSON.stringify(workflow.value); };
const getWorkflow = () => cloneWorkflow(workflow.value);
const focusNode = (ref: string) => {
  if (!workflow.value.states[ref]) return false;
  mode.value = "design";
  nextTick(() => canvas?.focus({ kind: "node", ref }));
  return true;
};
const getSelection = () => selection.value ? JSON.parse(JSON.stringify(selection.value)) as Selection : null;
defineExpose({ validate: () => inspectWorkflow(workflow.value), undo, redo, zoomIn, zoomOut, resetView, fitToContent, markClean, focusNode, getSelection, getWorkflow, alignSelection, distributeSelection });
</script>
