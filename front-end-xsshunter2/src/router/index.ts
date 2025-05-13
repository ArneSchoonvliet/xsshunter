import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: HomeView,
      meta: { sidebar: false, icon: [] }
    },
    {
      path: '/xss-fires',
      name: 'XSS payload fire reports',
      component: () => import('../views/XssPayloadFireReportsView.vue'),
      meta: { sidebar: true, icon: ['fas', 'fire'] }
    },
    {
      path: '/xss-payloads',
      name: 'XSS payloads',
      component: () => import('../views/XssPayloadsView.vue'),
      meta: { sidebar: true, icon: ['fas', 'file-code'] }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/AboutView.vue'),
      meta: { sidebar: true, icon: ['fas', 'gears'] }
    },
  ],
})

export default router

// FIXME: clean up this mess
declare module 'vue-router' {
  interface RouteMeta {
    sidebar: boolean
    icon: string | object | string[] | IconDefinition
  }
}
