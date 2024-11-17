<script setup lang="ts">
defineProps(['chat'])
</script>

<template>
  <h2>
    {{ chat.name }} <span>({{ chat.messages.length }})</span>
  </h2>
</template>
