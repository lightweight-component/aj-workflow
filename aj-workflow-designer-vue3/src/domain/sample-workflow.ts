import type { WorkflowDefinition } from "./workflow";

export const SAMPLE_WORKFLOW: WorkflowDefinition = {
  states: {
    start1: { type: "start", attr: { x: 80, y: 130, width: 48, height: 48 }, props: { name: { value: "start1" }, displayName: { value: "开始" } } },
    apply: { type: "task", attr: { x: 230, y: 128, width: 120, height: 52 }, text: { text: "请假申请" }, props: { name: { value: "apply" }, displayName: { value: "请假申请" }, assignee: { value: "apply.operator" }, form: { value: "/flow/leave/apply" }, taskType: { value: "Major" }, performType: { value: "ANY" } } },
    decision1: { type: "decision", attr: { x: 450, y: 130, width: 48, height: 48 }, props: { name: { value: "decision1" }, displayName: { value: "判断" }, expr: { value: "day > 2" } } },
    end1: { type: "end", attr: { x: 650, y: 130, width: 48, height: 48 }, props: { name: { value: "end1" }, displayName: { value: "结束" } } }
  },
  paths: {
    transition1: { from: "start1", to: "apply", dots: [], props: { name: { value: "transition1" } } },
    transition2: { from: "apply", to: "decision1", dots: [], props: { name: { value: "transition2" } } },
    transition3: { from: "decision1", to: "end1", dots: [], text: { text: "通过" }, props: { name: { value: "transition3" } } }
  },
  props: { name: "leave", displayName: "请假流程", expireTime: "", instanceUrl: "", instanceNoClass: "" }
};
