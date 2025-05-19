// stores/itemStore.ts
import { useXssHunterFetch, type PayloadFire, type PayloadResponse } from '@/utils';
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePayloadFireStore = defineStore('payloadFireStore', () => {
  // State
  const payloadFires = ref<Array<PayloadFire>>([])
  const byId = ref<Record<string, PayloadFire>>({})

  // Actions
  async function refreshItems() {
    const { data } = await useXssHunterFetch<PayloadResponse>(
      'payloadfires?limit=10&page=1',
    ).json();

    payloadFires.value = [...data.value.result.payload_fires]
    byId.value = data.value.result.payload_fires.reduce(
      (acc: Record<string, PayloadFire>, item: PayloadFire) => {
        acc[item.id] = item
        return acc
      },
    )
  }

  return {
    payloadFires,
    byId,
    refreshItems,
  }
})
