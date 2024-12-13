<script setup lang="ts">
const options = {
  url: 'https://calendly.com/s-a-courtage/30min',
}
</script>

<template>
  <h3 class="text-2xl font-semibold text-center pb-5 md:text-3xl">
    Discutons de votre projet ensemble !
  </h3>
    <CalendlyInlineWidget class="calendly-inline-widget min-w-[320px] h-[630px] md:h-[800px] lg:h-[1000px]" v-bind="options" />
</template>
