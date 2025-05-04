<template>
  <component 
    :is="props.tag"
    @click="hideSidebar"
    class="nav-item"
    v-bind="$attrs"
    tag="li">
    <a class="nav-link">
      <slot>
        <i v-if="props.icon" :class="props.icon"></i>
        <p>{{ props.name }}</p>
      </slot>
    </a>
  </component>
</template>

<script setup>
import { inject, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  name: String,
  icon: String,
  tag: {
    type: String,
    default: "router-link"
  }
})

const autoClose = inject('autoClose', true)
const addLink = inject('addLink', () => {})
const removeLink = inject('removeLink', () => {})

const hideSidebar = () => {
  if (autoClose) {
    window.$sidebar.displaySidebar(false)
  }
}

const isActive = () => {
  return document.querySelector('.nav-item')?.classList.contains('active') || false
}

onMounted(() => {
  if (addLink) {
    addLink({ isActive })
  }
})

onBeforeUnmount(() => {
  if (removeLink) {
    removeLink({ isActive })
  }
})
</script>
