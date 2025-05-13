<template>
  <div class="flex">
    <!-- Backdrop overlay for mobile -->
    <div
      v-if="isMobile && !collapsed"
      class="fixed inset-0 bg-background/80 md:hidden z-20"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <SideBar
      :collapsed="collapsed"
      :toggleSidebar="toggleSidebar"
      :class="[
        'bg-secondary h-screen z-30 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap',
        collapsed ? 'w-16' : 'w-80',
        isMobile ? (collapsed ? 'absolute -left-80' : 'absolute left-0') : '',
      ]"
    />

    <!-- Main Content -->
    <section class="flex flex-col h-screen w-screen">
      <header class="p-4 flex justify-between items-center shadow">
        <button @click="toggleSidebar" class="md:hidden">
          <IconSideBar />
        </button>
        <h1 class="text-xl font-semibold">{{ route.name }}</h1>
        <ThemeToggle />
      </header>
      <main
        class="p-4 overflow-y-scroll scrollbar-thin scrollbar-track-background scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full"
      >
        <RouterView />
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IconSideBar from '@/components/icons/iconSideBar.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import SideBar from './components/SideBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const collapsed = ref(false)
const isMobile = ref(false)

const mdBreakpoint = parseInt(
  window.getComputedStyle(document.documentElement).getPropertyValue('--tw-screen-md').trim() ||
    '768px',
)

const handleResize = () => {
  isMobile.value = window.innerWidth < mdBreakpoint
}

const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}

onMounted(() => {
  handleResize()
  collapsed.value = isMobile.value

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
