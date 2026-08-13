<template>
  <WorkflowDesigner v-model="workflow" @dirty-change="dirty = $event" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import WorkflowDesigner from "@/components/WorkflowDesigner.vue";
import { SAMPLE_WORKFLOW } from "@/domain/sample-workflow";
import { cloneWorkflow } from "@/domain/workflow";

const workflow = ref(cloneWorkflow(SAMPLE_WORKFLOW));
const dirty = ref(false);
</script>
