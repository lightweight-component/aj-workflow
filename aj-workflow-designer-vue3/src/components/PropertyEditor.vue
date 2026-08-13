<template>
  <aside class="property-editor">
    <template v-if="node">
      <h2>节点属性</h2>
      <label>引用 <input :value="selectionRef" disabled /></label>
      <label>类型 <input :value="node.type" disabled /></label>
      <label v-for="field in visibleFields" :key="field.name">{{ field.label }}
        <select v-if="field.options" :disabled="readonly" :value="getProp(field.name)" @change="setProp(field.name, valueOf($event))">
          <option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
        <input v-else :disabled="readonly" :type="field.type || 'text'" :value="getProp(field.name)" @input="setProp(field.name, valueOf($event))" />
      </label>

      <section v-if="node.type === 'task'" class="fields-editor">
        <h2>任务字段 <button type="button" :disabled="readonly" @click="addField">添加</button></h2>
        <div v-for="(field, index) in node.fields" :key="index" class="field-card">
          <input v-model="field.name" :disabled="readonly" placeholder="字段名称" @input="changed" />
          <input v-model="field.displayName" :disabled="readonly" placeholder="显示名称" @input="changed" />
          <input v-model="field.type" :disabled="readonly" placeholder="Java 类型" @input="changed" />
          <textarea :disabled="readonly" :value="attrsText(field.attrs)" placeholder="扩展属性，每行 key=value" @change="setAttrs(index, valueOf($event))" />
          <button type="button" :disabled="readonly" @click="removeField(index)">删除字段</button>
        </div>
      </section>
    </template>
    <template v-else-if="path">
      <h2>连线属性</h2>
      <label>引用 <input :value="selectionRef" disabled /></label>
      <label>起点 <input :value="path.from" disabled /></label>
      <label>终点 <input :value="path.to" disabled /></label>
      <label v-for="field in transitionFields" :key="field.name">{{ field.label }}
        <input :disabled="readonly" :value="getPathProp(field.name)" @input="setPathProp(field.name, valueOf($event))" />
      </label>
    </template>
    <section v-else-if="selection?.kind === 'nodes'" class="empty-property">已选择 {{ selection.refs.length }} 个节点，可复制、粘贴或删除。</section>
    <section v-else class="process-editor">
      <h2>流程属性</h2>
      <label v-for="field in processFields" :key="field.name">{{ field.label }}
        <input v-model="workflow.props[field.name]" :disabled="readonly" :type="field.type || 'text'" @input="changed" />
      </label>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WorkflowDefinition, WorkflowField } from "@/domain/workflow";
import type { Selection } from "@/canvas/workflow-canvas";

interface FormField { name: string; label: string; type?: string; options?: { value: string; label: string }[] }
const props = defineProps<{ workflow: WorkflowDefinition; selection: Selection; readonly?: boolean }>();
const emit = defineEmits<{ change: [] }>();
const node = computed(() => props.selection?.kind === "node" ? props.workflow.states[props.selection.ref] : null);
const path = computed(() => props.selection?.kind === "path" ? props.workflow.paths[props.selection.ref] : null);
const selectionRef = computed(() => props.selection && "ref" in props.selection ? props.selection.ref : "");
const commonFields: FormField[] = [
  { name: "displayName", label: "显示名称" }, { name: "name", label: "业务名称" },
  { name: "preInterceptors", label: "前置拦截器" }, { name: "postInterceptors", label: "后置拦截器" }
];
const byType: Record<string, FormField[]> = {
  task: [
    { name: "form", label: "表单 URL" }, { name: "assignee", label: "参与者" },
    { name: "taskType", label: "任务类型", options: [{ value: "Major", label: "主办" }, { value: "Aidant", label: "协办" }] },
    { name: "performType", label: "参与类型", options: [{ value: "ANY", label: "任一参与者" }, { value: "ALL", label: "全部参与者" }] },
    { name: "expireTime", label: "期望完成时间" }, { name: "reminderTime", label: "提醒时间" },
    { name: "reminderRepeat", label: "重复提醒间隔" },
    { name: "autoExecute", label: "自动执行", options: [{ value: "", label: "否" }, { value: "Y", label: "是" }] },
    { name: "callback", label: "回调类" }
  ],
  decision: [{ name: "expr", label: "决策表达式" }, { name: "handleClass", label: "决策处理类" }],
  custom: [{ name: "form", label: "表单 URL" }, { name: "clazz", label: "执行类" }, { name: "methodName", label: "方法名" }, { name: "args", label: "参数变量" }, { name: "var", label: "返回值变量" }],
  subprocess: [{ name: "processName", label: "子流程名称" }, { name: "version", label: "子流程版本", type: "number" }, { name: "form", label: "表单 URL" }]
};
const visibleFields = computed(() => [...commonFields, ...(byType[node.value?.type || ""] || [])]);
const transitionFields: FormField[] = [{ name: "name", label: "名称" }, { name: "displayName", label: "显示名称" }, { name: "expr", label: "条件表达式" }];
const processFields: FormField[] = [{ name: "name", label: "流程名称" }, { name: "displayName", label: "显示名称" }, { name: "expireTime", label: "期望完成时间" }, { name: "instanceUrl", label: "实例 URL" }, { name: "instanceNoClass", label: "实例编号生成类" }];

const changed = () => emit("change");
const getProp = (name: string) => node.value?.props[name]?.value ?? "";
const setProp = (name: string, value: string) => {
  if (!node.value) return;
  node.value.props[name] ??= { value: "" };
  node.value.props[name].value = value;
  if (name === "displayName" && node.value.text) node.value.text.text = value;
  changed();
};
const getPathProp = (name: string) => path.value?.props[name]?.value ?? "";
const setPathProp = (name: string, value: string) => { if (path.value) { path.value.props[name] = { value }; changed(); } };
const addField = () => { if (node.value) { (node.value.fields ??= []).push({ name: "", displayName: "", type: "String", attrs: {} }); changed(); } };
const removeField = (index: number) => { node.value?.fields?.splice(index, 1); changed(); };
const attrsText = (attrs: Record<string, string>) => Object.entries(attrs).map(([key, value]) => `${key}=${value}`).join("\n");
const setAttrs = (index: number, text: string) => {
  if (!node.value?.fields) return;
  node.value.fields[index].attrs = Object.fromEntries(text.split(/\r?\n/).filter(Boolean).map(line => { const at = line.indexOf("="); return at < 0 ? [line.trim(), ""] : [line.slice(0, at).trim(), line.slice(at + 1)]; }).filter(([key]) => key));
  changed();
};
const valueOf = (event: Event) => (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
</script>
