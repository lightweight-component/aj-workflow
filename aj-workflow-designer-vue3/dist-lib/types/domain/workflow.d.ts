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
    text?: {
        text: string;
        x?: number;
        y?: number;
    };
    props: WorkflowProperties;
    fields?: WorkflowField[];
}
export interface WorkflowTransition {
    from: string;
    to: string;
    dots: Point[];
    text?: {
        text: string;
        x?: number;
        y?: number;
    };
    props: WorkflowProperties;
}
export interface WorkflowDefinition {
    states: Record<string, WorkflowNode>;
    paths: Record<string, WorkflowTransition>;
    props: Record<string, string>;
}
export declare function cloneWorkflow(source: WorkflowDefinition): WorkflowDefinition;
/** Checks only the shape required by the renderer; business validation remains separate. */
export declare function isRenderableWorkflow(value: unknown): value is WorkflowDefinition;
export interface WorkflowValidationIssue {
    code: string;
    message: string;
    target?: string;
}
export declare class WorkflowValidationError extends Error {
    readonly issues: WorkflowValidationIssue[];
    constructor(issues: WorkflowValidationIssue[]);
}
/** 返回全部校验问题，适合在发布前一次性展示给用户。 */
export declare function inspectWorkflow(value: unknown): WorkflowValidationIssue[];
export declare function validateWorkflow(value: unknown): asserts value is WorkflowDefinition;
