<template>
  Detail {{ payloadId }}
  {{ JSON.stringify(payloadFireStore.byId[payloadId]) }}
</template>
<script setup lang="ts">
import { usePayloadFireStore } from '@/stores/payloadFire'

defineProps<{
  payloadId: string
}>()

const payloadFireStore = usePayloadFireStore()
</script>
