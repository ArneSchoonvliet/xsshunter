import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light')
  const isSystemTheme = ref(true)

  // Initialize theme based on system preference
  const initializeTheme = () => {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = systemDark ? 'dark' : 'light'
    applyTheme()
  }

  // Apply theme to document
  const applyTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Watch for system theme changes
  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (isSystemTheme.value) {
        theme.value = e.matches ? 'dark' : 'light'
        applyTheme()
      }
    })
  }

  // Toggle theme
  const toggleTheme = () => {
    isSystemTheme.value = false
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme()
  }

  // Reset to system theme
  const resetToSystemTheme = () => {
    isSystemTheme.value = true
    initializeTheme()
  }

  // Watch theme changes
  watch(theme, applyTheme)

  return {
    theme,
    isSystemTheme,
    toggleTheme,
    resetToSystemTheme,
    initializeTheme,
    watchSystemTheme
  }
})
