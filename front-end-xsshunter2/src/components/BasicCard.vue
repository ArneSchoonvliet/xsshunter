<template>
  <div class="flex flex-col gap-4 bg-card rounded p-4">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<!-- <template>
  <section class="flex flex-col gap-4">
    <div
      v-for="(payload, index) in payloads"
      :key="index"
      class="flex flex-col gap-4 bg-card rounded p-4"
    >
      <div v-html="payload.header"></div>
      <label class="text-secondary uppercase">{{ payload.label }}</label>
      <input type="text" class="bg-card-foreground/20 p-2 rounded" :value="payload.payload" />
      <BasicButton
        class="flex max-w-52 justify-center items-center transition-all duration-300"
        @click="copyClipboard(payload.payload, index)"
      >
        <Transition name="fade-scale" mode="out-in">
          <FontAwesomeIcon
            :key="copiedIndex === index ? 'check' : 'copy'"
            :icon="copiedIndex === index ? ['solid', 'check'] : ['solid', 'copy']"
            class="mr-2 text-base"
          />
        </Transition>
        Copy payload
      </BasicButton>
    </div>
  </section>
</template> -->
