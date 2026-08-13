import WorkflowDesigner from "./components/WorkflowDesigner.vue";
import "./styles/main.less";
export type { Box, Point, WorkflowDefinition, WorkflowField, WorkflowNode, WorkflowProperties, WorkflowProperty, WorkflowTransition, WorkflowValidationIssue, } from "./domain/workflow";
export { cloneWorkflow, inspectWorkflow, isRenderableWorkflow, validateWorkflow, WorkflowValidationError, } from "./domain/workflow";
export { WorkflowDesigner };
export default WorkflowDesigner;
