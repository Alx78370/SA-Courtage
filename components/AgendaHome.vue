<script setup lang="ts">
const options = {
  url: 'https://calendly.com/s-a-courtage/30min',
}
</script>

<template>
  <div class="border-2 shadow-xl py-6 rounded-3xl bg-white">
    <div class="px-6 pb-5">
      <h3 class="text-2xl font-semibold text-center">
        Discutons de votre projet ensemble !
      </h3>
    </div>
    <div>
      <CalendlyInlineWidget class="px-1" v-bind="options" />
    </div>
  </div>
</template>
