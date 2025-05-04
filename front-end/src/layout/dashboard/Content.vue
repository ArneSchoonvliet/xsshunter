<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <fade-transition :duration="1000" mode="out-in">
        <component :is="Component" />
      </fade-transition>
    </router-view>
  </div>
</template>
<script>
  import {FadeTransition} from '@noction/vue-bezier';
  export default {
    components: {
      FadeTransition
    }
  };
</script>
