<script setup lang="ts">
const calendly = useCalendly()

onMounted(() => {
  calendly.initInlineWidget()
})
</script>

<template>
  <div>
    <h3 class="text-2xl font-semibold text-center pb-5 md:pb-0">
      Discutons de votre projet ensemble !
    </h3>
    <div
      class="calendly-inline-widget min-w-[320px] h-[630px] md:h-[800px] lg:w-[1000px] xl:w-[1200px] mx-auto"
      data-url="https://calendly.com/s-a-courtage/30min"
    />
  </div>
</template>
