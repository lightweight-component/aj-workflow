import WorkflowDesigner from "./components/WorkflowDesigner.vue";
import "./styles/main.less";
export { WorkflowDesigner };
export { cloneWorkflow, inspectWorkflow, isRenderableWorkflow, validateWorkflow, WorkflowValidationError } from "./domain/workflow";
export type { Box, Point, WorkflowDefinition, WorkflowField, WorkflowNode, WorkflowProperty, WorkflowProperties, WorkflowTransition, WorkflowValidationIssue } from "./domain/workflow";
export default WorkflowDesigner;
