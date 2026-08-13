<template>
  <Teleport to="body">
    <div v-if="open" class="modal-mask" @mousedown.self="$emit('close')">
      <section
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
      >
        <header>
          <strong>{{ title }}</strong
          ><button type="button" aria-label="关闭" @click="$emit('close')">
            ×
          </button>
        </header>
        <div class="modal-body">
          <slot />
        </div>
        <footer>
          <button type="button" @click="$emit('close')">关闭</button>
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ open: boolean; title: string }>();
defineEmits<{ close: [] }>();
</script>
