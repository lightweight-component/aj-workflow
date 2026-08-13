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
/** 深度复制一个 JSON 流程模型。 */
export declare function cloneWorkflow(source: WorkflowDefinition): WorkflowDefinition;
/** 仅检查渲染器必需的数据结构，业务规则校验由 inspectWorkflow 负责。 */
export declare function isRenderableWorkflow(value: unknown): value is WorkflowDefinition;
export interface WorkflowValidationIssue {
    code: string;
    message: string;
    target?: string;
}
export declare class WorkflowValidationError extends Error {
    readonly issues: WorkflowValidationIssue[];
    /** 使用完整的问题列表创建流程校验异常。 */
    constructor(issues: WorkflowValidationIssue[]);
}
/** 返回全部校验问题，适合在发布前一次性展示给用户。 */
export declare function inspectWorkflow(value: unknown): WorkflowValidationIssue[];
/** 校验流程，存在任何问题时抛出 WorkflowValidationError。 */
export declare function validateWorkflow(value: unknown): asserts value is WorkflowDefinition;
