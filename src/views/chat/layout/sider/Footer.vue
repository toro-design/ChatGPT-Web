<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const show = ref(false)
</script>

<template>
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <Setting v-if="show" v-model:visible="show" />
  </footer>
</template>
