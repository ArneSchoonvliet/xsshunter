<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <SideBar />
  <!-- <header>
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <nav class="flex gap-4">
          <RouterLink to="/"> Home </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8 min-h-screen">
    <RouterView />
  </main> -->
</template>

<style scoped></style>
