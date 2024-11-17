<script setup lang="ts">
import { useChatStore } from '@/stores/chat'
import Chat from '@/components/Chat.vue'

const chatStore = useChatStore()
</script>

<template>
  <ul class="list-none m-0">
    <li v-for="chat in chatStore.chats" :key="chat.id">
      <Chat :chat="chat" />
    </li>
  </ul>
</template>

<style scoped></style>
