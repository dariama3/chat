<script setup lang="ts">
import { Button } from 'primevue'
import NewChatModal from '@/components/NewChatModal.vue'
import ChatList from '@/components/ChatList.vue'
</script>

<template>
  <div class="sidebar h-full p-4 z-10 border-r">
    <h1>ChatWaves</h1>
    <div>
      <NewChatModal />
      <Button class="w-full" label="Join a chat" text raised outlined />
    </div>
    <ChatList />
    <ul>
      <li>
        <a
          class="flex items-center cursor-pointer rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
        >
          <i class="pi pi-cog mr-2"></i>
          <span class="font-medium">Settings</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
