import { describe, expect, it } from "vitest";
import { cloneWorkflow, inspectWorkflow, isRenderableWorkflow, validateWorkflow } from "@/domain/workflow";
import { SAMPLE_WORKFLOW } from "@/domain/sample-workflow";
import { connectionPoint } from "@/canvas/geometry";
import { polylineMidpoint } from "@/canvas/workflow-canvas";

describe("workflow domain", () => {
  it("deep clones workflow definitions", () => {
    const cloned = cloneWorkflow(SAMPLE_WORKFLOW);
    cloned.states.apply.attr.x = 999;
    expect(SAMPLE_WORKFLOW.states.apply.attr.x).not.toBe(999);
  });

  it("rejects paths that reference missing nodes", () => {
    const invalid = cloneWorkflow(SAMPLE_WORKFLOW);
    invalid.paths.transition1.to = "missing";
    expect(() => validateWorkflow(invalid)).toThrow("不存在的节点");
  });

  it("finds the rectangle boundary intersection", () => {
    expect(connectionPoint({ x: 0, y: 0, width: 100, height: 50 }, { x: 200, y: 25 })).toEqual({ x: 100, y: 25 });
  });

  it("rejects an unsupported node type", () => {
    const invalid = cloneWorkflow(SAMPLE_WORKFLOW);
    invalid.states.apply.type = "unknown";
    expect(() => validateWorkflow(invalid)).toThrow("类型不受支持");
  });

  it("accepts the complete sample workflow", () => {
    expect(inspectWorkflow(SAMPLE_WORKFLOW)).toEqual([]);
    expect(() => validateWorkflow(SAMPLE_WORKFLOW)).not.toThrow();
  });

  it("reports all structural problems instead of only the first one", () => {
    const invalid = cloneWorkflow(SAMPLE_WORKFLOW);
    delete invalid.paths.transition1;
    invalid.paths.transition3.from = "end1";
    const codes = inspectWorkflow(invalid).map(issue => issue.code);
    expect(codes).toContain("NODE_WITHOUT_OUTPUT");
    expect(codes).toContain("NODE_WITHOUT_INPUT");
    expect(codes).toContain("END_HAS_OUTPUT");
    expect(codes).toContain("UNREACHABLE_NODE");
    expect(codes).toContain("NO_PATH_TO_END");
  });

  it("checks fork, join, decision and type-specific properties", () => {
    const invalid = cloneWorkflow(SAMPLE_WORKFLOW);
    invalid.states.decision1.props.expr.value = "";
    invalid.states.custom1 = { type: "custom", attr: { x: 1, y: 1, width: 100, height: 50 }, props: { name: { value: "custom1" }, displayName: { value: "custom" }, clazz: { value: "" } } };
    invalid.states.fork1 = { type: "fork", attr: { x: 1, y: 1, width: 50, height: 50 }, props: { name: { value: "fork1" }, displayName: { value: "fork" } } };
    invalid.states.join1 = { type: "join", attr: { x: 1, y: 1, width: 50, height: 50 }, props: { name: { value: "join1" }, displayName: { value: "join" } } };
    const codes = inspectWorkflow(invalid).map(issue => issue.code);
    expect(codes).toContain("DECISION_RULE_REQUIRED");
    expect(codes).toContain("CUSTOM_CLASS_REQUIRED");
    expect(codes).toContain("FORK_OUTPUTS");
    expect(codes).toContain("JOIN_INPUTS");
  });

  it("checks duplicate names and task field properties", () => {
    const invalid = cloneWorkflow(SAMPLE_WORKFLOW);
    invalid.states.apply.props.name.value = "start1";
    invalid.states.apply.props.performType.value = "SOME";
    invalid.states.apply.props.reminderRepeat = { value: "-1" };
    invalid.states.apply.fields = [
      { name: "amount", displayName: "金额", type: "", attrs: {} },
      { name: "amount", displayName: "重复", type: "Long", attrs: {} }
    ];
    const codes = inspectWorkflow(invalid).map(issue => issue.code);
    expect(codes).toContain("DUPLICATE_NODE_NAME");
    expect(codes).toContain("INVALID_PERFORM_TYPE");
    expect(codes).toContain("INVALID_REMINDER_REPEAT");
    expect(codes).toContain("FIELD_TYPE_REQUIRED");
    expect(codes).toContain("DUPLICATE_FIELD_NAME");
  });

  it("never throws for malformed nested JSON", () => {
    const malformed = {
      states: { start: { type: "start", attr: null, props: null }, task: { type: "task", attr: { x: 0, y: 0, width: 10, height: 10 }, props: {}, fields: [null] } },
      paths: { bad: { from: "start", to: "task", dots: [null], props: null } }, props: { name: "bad" }
    };
    expect(() => inspectWorkflow(malformed)).not.toThrow();
    const codes = inspectWorkflow(malformed).map(issue => issue.code);
    expect(codes).toContain("INVALID_NODE_BOX");
    expect(codes).toContain("INVALID_FIELD");
    expect(codes).toContain("INVALID_PATH_POINTS");
  });

  it("rejects arrays where maps are required", () => {
    expect(inspectWorkflow({ states: [], paths: [], props: [] }).map(issue => issue.code)).toEqual(["MISSING_STATES", "MISSING_PATHS", "MISSING_PROPS"]);
  });

  it("calculates a polyline midpoint by traveled length", () => {
    expect(polylineMidpoint([{ x: 0, y: 0 }, { x: 8, y: 0 }, { x: 8, y: 4 }])).toEqual({ x: 6, y: 0 });
  });

  it("clones selected model data without sharing nested values", () => {
    const copied = cloneWorkflow(SAMPLE_WORKFLOW);
    copied.states.apply.props.displayName.value = "副本";
    expect(SAMPLE_WORKFLOW.states.apply.props.displayName.value).toBe("请假申请");
  });

  it("separates renderer safety from business validation", () => {
    const incomplete = cloneWorkflow(SAMPLE_WORKFLOW);
    delete incomplete.paths.transition1;
    expect(isRenderableWorkflow(incomplete)).toBe(true);
    expect(inspectWorkflow(incomplete).length).toBeGreaterThan(0);
    expect(isRenderableWorkflow({ states: { bad: { type: "task" } }, paths: {}, props: {} })).toBe(false);
  });
});
