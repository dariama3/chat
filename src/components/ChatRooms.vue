<script setup lang="ts"></script>

<template>
  <ul class="list-none m-0">
    <li>
      <a
        class="flex items-center cursor-pointer rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
      >
        <i class="pi pi-comments mr-2"></i>
        <span class="font-medium">Messages</span>
        <span
          class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full"
          style="min-width: 1.5rem; height: 1.5rem"
          >3</span
        >
      </a>
    </li>
    <li>
      <a
        class="flex items-center cursor-pointer rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
      >
        <i class="pi pi-cog mr-2"></i>
        <span class="font-medium">Settings</span>
      </a>
    </li>
  </ul>
</template>

<style scoped></style>
