import { type Selection } from "@/canvas/workflow-canvas";
import { type WorkflowDefinition, type WorkflowValidationIssue } from "@/domain/workflow";
type __VLS_Props = {
    modelValue?: WorkflowDefinition;
    readonly?: boolean;
    guardBeforeUnload?: boolean;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {
    validate: () => WorkflowValidationIssue[];
    undo: () => void;
    redo: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    resetView: () => void;
    fitToContent: () => void;
    markClean: () => void;
    focusNode: (ref: string) => boolean;
    getSelection: () => Selection;
    getWorkflow: () => WorkflowDefinition;
    alignSelection: (mode: "left" | "center" | "right" | "top" | "middle" | "bottom") => void;
    distributeSelection: (axis: "horizontal" | "vertical") => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: WorkflowDefinition) => any;
    "update:modelValue": (value: WorkflowDefinition) => any;
    "dirty-change": (dirty: boolean) => any;
    "load-error": (issues: WorkflowValidationIssue[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((value: WorkflowDefinition) => any) | undefined;
    "onUpdate:modelValue"?: ((value: WorkflowDefinition) => any) | undefined;
    "onDirty-change"?: ((dirty: boolean) => any) | undefined;
    "onLoad-error"?: ((issues: WorkflowValidationIssue[]) => any) | undefined;
}>, {
    readonly: boolean;
    guardBeforeUnload: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
