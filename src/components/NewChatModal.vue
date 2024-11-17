<script setup lang="ts">
import { Button, Dialog, InputText } from 'primevue'
import { ref } from 'vue'

import { useChatStore } from '@/stores/chat'

const chatStore = useChatStore()
const visible = ref(false)
const name = ref(null)

const openDialog = () => {
  visible.value = true
}

const closeDialog = () => {
  visible.value = false
}

const save = () => {
  closeDialog()

  chatStore.addChat({
    name: name.value,
  })
}
</script>
<template>
  <Button class="w-full" label="Create a new chat" text raised outlined @click="openDialog" />
  <Dialog v-model:visible="visible" modal header="Add Chat" :style="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Create a new chat</span>
    <div class="flex items-center gap-4 mb-4">
      <label for="name" class="font-semibold w-24">Chat Name</label>
      <InputText id="name" class="flex-auto" v-model="name" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="closeDialog"></Button>
      <Button type="button" label="Save" @click="save">Save</Button>
    </div>
  </Dialog>
</template>
