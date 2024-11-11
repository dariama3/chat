<script setup lang="ts">
import Editor from 'primevue/editor'
import { ref } from 'vue'

const aaa = ref('')
</script>

<template>
  <p>{{ aaa }}</p>
  <Editor v-model="aaa" />
</template>

<style scoped>
.p-editor:deep(.p-editor-content) {
  height: initial;
}
</style>
