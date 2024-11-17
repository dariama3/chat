import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', () => {
  const activeChatId = ref(0)
  const chats = ref([
    { id: 1, name: 'chat #1', messages: [] },
    { id: 2, name: 'chat #2', messages: [{ content: 'First message', time: '12:04' }] },
    { id: 3, name: 'chat #3', messages: [] },
  ])

  const addChat = (data) => {
    const newChatId = chats.value.length + 1
    chats.value.push({ ...data, id: newChatId, messages: [] })
  }

  return { activeChatId, chats, addChat }
})
