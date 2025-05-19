<template>
  <section>
    <div class="flex items-center justify-between p-4 border-b border-foreground">
      <span v-show="!collapsed" class="text-xl font-bold">XSS HUNTER</span>
      <button @click="toggleSidebar" class="block cursor-pointer">
        <IconSideBar />
      </button>
    </div>
    <nav v-show="!collapsed" class="space-y-2 text-lg mt-4">
      <RouterLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="block p-2 hover:bg-background"
        active-class="bg-background"
      >
        <FontAwesomeIcon :icon="link.icon" />
        <span class="ml-2">{{ link.label }}</span>
      </RouterLink>
      <a
        href="https://github.com/intigriti"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-2 hover:bg-background"
      >
        <FontAwesomeIcon :icon="['brands', 'github']" />
        <span class="ml-2">Github</span>
      </a>
      <a
        href="https://x.com/intigriti"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-2 hover:bg-background"
      >
        <FontAwesomeIcon :icon="['brands', 'x-twitter']" />
        <span class="ml-2">X (former twitter)</span>
      </a>
      <a
        href="https://intigriti.com"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-2 hover:bg-background"
      >
        <FontAwesomeIcon :icon="['brands', 'github']" />
        <span class="ml-2">Intigriti</span>
      </a>
    </nav>
  </section>
</template>

<script setup lang="ts">
import IconSideBar from '@/components/icons/iconSideBar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'

defineProps<{
  collapsed: boolean
  toggleSidebar: () => void
}>()

const router = useRouter()
const links = router
  .getRoutes()
  .filter((route) => route.meta && route.meta.sidebar)
  .map((route) => {
    return { to: route.path, label: route.name, icon: route.meta.icon }
  })
</script>
