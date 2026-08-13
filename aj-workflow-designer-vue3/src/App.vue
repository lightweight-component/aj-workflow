<template>
  <WorkflowDesigner v-model="workflow" @dirty-change="dirty = $event" />
</template>

<script setup lang="ts">
import { type Ref, ref } from "vue";
import WorkflowDesigner from "@/components/WorkflowDesigner.vue";
import { SAMPLE_WORKFLOW } from "@/domain/sample-workflow";
import { cloneWorkflow, type WorkflowDefinition } from "@/domain/workflow";

const workflow: Ref<WorkflowDefinition> = ref(cloneWorkflow(SAMPLE_WORKFLOW));
const dirty: Ref<boolean> = ref(false);
</script>
