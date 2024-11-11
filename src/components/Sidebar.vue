<script setup lang="ts">
import Button from 'primevue/button'
import ChatRooms from '@/components/ChatRooms.vue'
</script>

<template>
  <div class="sidebar h-full p-4 z-10 border-r">
    <h1>ChatWaves</h1>
    <div>
      <Button class="w-full" label="Create a new chat" text raised outlined />
      <Button class="w-full" label="Join a chat" text raised outlined />
    </div>
    <ChatRooms />
  </div>
</template>

<style scoped></style>
