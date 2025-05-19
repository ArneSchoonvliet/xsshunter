<template>
  <div class="flex flex-col">
    <section>XSS Payload Fire Reports</section>
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <BasicCard
        @click="test(payloadFire.id)"
        class="hover:bg-card/30 cursor-pointer"
        v-for="payloadFire in payloadFireStore.payloadFires"
        :key="payloadFire.id"
      >
        <template #header>
          <h1 class="text-2xl font-bold">{{ payloadFire.url }}</h1>
        </template>
        <template #content>
          <section class="flex justify-center items-center p-4">
            <img
              :src="`https://localhost:8080/screenshots/${payloadFire.screenshot_id}.png`"
              alt="XSS Hunter Logo"
              class="w-64 h-64 object-cover"
            />
          </section>
        </template>
        <template #footer>
          <section class="flex flex-col items-end">
            {{ payloadFire.createdAt }}
          </section>
        </template>
      </BasicCard>
    </section>
  </div>
</template>

<script setup lang="ts">
import BasicCard from '@/components/BasicCard.vue'
import { usePayloadFireStore } from '@/stores/payloadFire'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// const { isFetching, data, execute } = useXssHunterFetch<PayloadResponse>(
//   'payloadfires?limit=10&page=1',
// ).json()
// watch(data, (d) => console.log(d))
// const jsonData = computed(() => JSON.stringify(data.value, null, 2))

// const hopla = async () => {
//   await execute()
// }

const payloadFireStore = usePayloadFireStore()

onMounted(async () => {
  await payloadFireStore.refreshItems()
})

const test = (id: string) => {
  console.log('test')
  router.push({ name: 'XSS payload fire detail', params: { payloadId: id } })
}
</script>
