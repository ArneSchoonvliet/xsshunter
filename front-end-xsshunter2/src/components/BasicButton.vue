<template>
  <button
    @click="$emit('click')"
    class="rounded-md bg-secondary hover:bg-background cursor-pointer p-2"
  >
    <slot>Click me</slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
