<template>
  <div class="flex">
    <!-- Sidebar -->
    <aside :class="['bg-sidebar-primary hidden md:block', collapsed ? 'w-16' : 'w-64']">
      <div class="flex items-center justify-between p-4">
        <span v-if="!collapsed" class="text-xl font-bold">XSS HUNTER</span>
        <button @click="toggleSidebar" class="block">
          <IconSideBar />
        </button>
      </div>
      <nav v-if="!collapsed" class="p-4 space-y-2">
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
        <a href="#" class="block py-2 px-4 rounded hover:bg-gray-700">Profile</a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1">
      <header class="p-4 flex justify-between items-center">
        <button @click="toggleSidebar" class="md:hidden">
          <IconSideBar />
        </button>
        <h1 class="text-xl font-semibold">Welcome</h1>
        <ThemeToggle />
      </header>
      <main
        class="h-screen p-4 overflow-y-scroll scrollbar-thin scrollbar-track-background scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full"
      >
        test
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconSideBar from './icons/iconSideBar.vue'
import ThemeToggle from './ThemeToggle.vue'

const collapsed = ref(false)

const handleResize = () => {
  console.log('Resizing...')
}

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
