<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative">
    <img :src="imageSrc" alt="" class="w-full h-full object-cover">
    <div class="bg-slate-900 opacity-30 absolute inset-0" />
    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-white text-center text-4xl z-20">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
