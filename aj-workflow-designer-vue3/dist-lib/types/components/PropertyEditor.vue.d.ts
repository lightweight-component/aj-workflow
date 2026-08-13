import type { WorkflowDefinition } from "@/domain/workflow";
import type { Selection } from "@/canvas/workflow-canvas";
type __VLS_Props = {
    workflow: WorkflowDefinition;
    selection: Selection;
    readonly?: boolean;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
