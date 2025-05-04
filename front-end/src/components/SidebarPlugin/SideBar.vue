<template>
  <div class="sidebar" :data="backgroundColor" data-background-color="darkblue">
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo" style="text-align: center;">
        <a class="simple-text logo-normal">
          {{ props.title }}
        </a>
      </div>
      <slot></slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in props.sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, provide } from 'vue'
import { useRoute } from 'vue-router'
import SidebarLink from './SidebarLink.vue'

const props = defineProps({
  title: {
    type: String,
    default: "XSS Hunter"
  },
  backgroundColor: {
    type: String,
    default: "FFFFFF"
  },
  activeColor: {
    type: String,
    default: "success",
    validator: value => {
      let acceptedValues = ["primary", "info", "success", "warning", "danger"]
      return acceptedValues.indexOf(value) !== -1
    }
  },
  sidebarLinks: {
    type: Array,
    default: () => []
  },
  autoClose: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()
const linkHeight = ref(65)
const activeLinkIndex = ref(0)
const windowWidth = ref(0)
const isWindows = ref(false)
const hasAutoHeight = ref(false)
const links = ref([])

const shortTitle = computed(() => {
  return props.title.split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
})

const arrowMovePx = computed(() => {
  return linkHeight.value * activeLinkIndex.value
})

const findActiveLink = () => {
  links.value.forEach((link, index) => {
    if (link.isActive()) {
      activeLinkIndex.value = index
    }
  })
}

const addLink = (link) => {
  const index = link.$vnode ? link.$vnode.key : links.value.length
  links.value.splice(index, 0, link)
}

const removeLink = (link) => {
  const index = links.value.indexOf(link)
  if (index > -1) {
    links.value.splice(index, 1)
  }
}

// Provide values for child components
provide('autoClose', props.autoClose)
provide('addLink', addLink)
provide('removeLink', removeLink)

onMounted(() => {
  watch(() => route, findActiveLink, { immediate: true })
})
</script>
