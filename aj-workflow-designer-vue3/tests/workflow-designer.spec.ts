import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { cloneWorkflow, type WorkflowDefinition } from "@/domain/workflow";
import { SAMPLE_WORKFLOW } from "@/domain/sample-workflow";

const { canvasInstances, MockCanvas } = vi.hoisted(() => {
  interface CanvasHooks { onSelect(value: unknown): void }
  class MockCanvas {
    constructor(_host: HTMLElement, readonly hooks: CanvasHooks) { canvasInstances.push(this); }
    load() {}
    refresh() {}
    destroy() {}
    resize() {}
    zoomIn() {}
    zoomOut() {}
    resetView() {}
    fitToContent() {}
    moveSelection() {}
    alignSelection() {}
    distributeSelection() {}
    setReadOnly() {}
    focus(value: unknown) { this.hooks.onSelect(value); }
    select(value: unknown) { this.hooks.onSelect(value); }
  }
  const canvasInstances: MockCanvas[] = [];
  return { canvasInstances, MockCanvas };
});

vi.mock("@/canvas/workflow-canvas", () => ({ WorkflowCanvas: MockCanvas }));

import WorkflowDesigner from "@/components/WorkflowDesigner.vue";

const clickButton = async (wrapper: ReturnType<typeof mount>, text: string) => {
  const button = wrapper.findAll("button").find(item => item.text() === text);
  if (!button) throw new Error(`Button not found: ${text}`);
  await button.trigger("click");
  return button;
};

describe("WorkflowDesigner component", () => {
  beforeEach(() => { canvasInstances.length = 0; vi.restoreAllMocks(); });

  it("scopes keyboard shortcuts to the focused designer instance", async () => {
    const first = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) }, attachTo: document.body });
    const second = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) }, attachTo: document.body });
    canvasInstances[0].hooks.onSelect({ kind: "node", ref: "apply" });
    canvasInstances[1].hooks.onSelect({ kind: "node", ref: "approve" });

    await first.find("main").trigger("keydown", { key: "Delete" });

    expect(first.emitted("update:modelValue")).toHaveLength(1);
    expect(second.emitted("update:modelValue")).toBeUndefined();
    expect((first.emitted("update:modelValue")![0][0] as WorkflowDefinition).states.apply).toBeUndefined();
    first.unmount(); second.unmount();
  });

  it("treats external model replacement as a clean baseline", async () => {
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) } });
    const replacement = cloneWorkflow(SAMPLE_WORKFLOW);
    replacement.props.displayName = "外部载入";
    await wrapper.setProps({ modelValue: replacement });
    await nextTick();

    const dirtyEvents = wrapper.emitted("dirty-change")!.map(event => event[0]);
    expect(dirtyEvents.at(-1)).toBe(false);
    expect((wrapper.vm as unknown as { getWorkflow(): WorkflowDefinition }).getWorkflow().props.displayName).toBe("外部载入");
  });

  it("emits v-model when the user creates a new workflow", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) } });
    await clickButton(wrapper, "新建");

    const emitted = wrapper.emitted("update:modelValue");
    expect(emitted).toHaveLength(1);
    expect((emitted![0][0] as WorkflowDefinition).props.name).toBe("new-process");
  });

  it("does not allow the Start node to be copied", async () => {
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) } });
    canvasInstances[0].hooks.onSelect({ kind: "node", ref: "start1" });
    await nextTick();

    const copy = wrapper.findAll("button").find(item => item.text() === "复制");
    expect(copy?.attributes("disabled")).toBeDefined();
    expect((wrapper.vm as unknown as { getSelection(): unknown }).getSelection()).toEqual({ kind: "node", ref: "start1" });
  });

  it("exposes validation, history, viewport and persistence commands", () => {
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) } });
    const api = wrapper.vm as unknown as Record<string, unknown>;
    expect(["validate", "undo", "redo", "zoomIn", "zoomOut", "resetView", "fitToContent", "markClean", "focusNode", "getSelection", "getWorkflow", "alignSelection", "distributeSelection"]
      .every(name => typeof api[name] === "function")).toBe(true);
  });

  it("rejects a malformed external model before rendering it", async () => {
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) } });
    await wrapper.setProps({ modelValue: { states: { bad: { type: "task" } }, paths: {}, props: {} } as unknown as WorkflowDefinition });
    await nextTick();

    expect(wrapper.emitted("load-error")).toHaveLength(1);
    expect((wrapper.vm as unknown as { getWorkflow(): WorkflowDefinition }).getWorkflow().states.bad).toBeUndefined();
  });

  it("does not steal focus from property inputs", async () => {
    const wrapper = mount(WorkflowDesigner, { props: { modelValue: cloneWorkflow(SAMPLE_WORKFLOW) }, attachTo: document.body });
    canvasInstances[0].hooks.onSelect({ kind: "node", ref: "apply" });
    await nextTick();
    const input = wrapper.find(".property-editor input:not(:disabled)");
    (input.element as HTMLInputElement).focus();
    await input.trigger("focusin");
    expect(document.activeElement).toBe(input.element);
    wrapper.unmount();
  });
});
