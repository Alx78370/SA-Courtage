<script setup lang="ts">
const options = {
  url: "https://calendly.com/s-a-courtage/30min",
};

defineProps({
  title: { type: String, default: "Discutons ensemble de votre projet !"} 
});
</script>

<template>
  <h3 class="text-2xl font-semibold text-center pb-5 md:text-3xl mx-2">
    {{ title }}
  </h3>
  <div class="calendly-container flex justify-center items-center overflow-hidden min-w-[320px] h-[700px]">
    <CalendlyInlineWidget v-bind="options" class="calendly-inline-widget w-full max-w-[1000px] min-h-[700px] h-auto min-w-[320px]" />
  </div>
</template>