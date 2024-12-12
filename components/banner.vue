<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    name: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="relative">
    <img :src="imageSrc" :alt="imageAlt" class="w-full h-52 object-cover lg:h-60 xl:h-72">
    <div class="bg-slate-900 opacity-30 absolute inset-0" />
    <div class="absolute inset-0 flex items-center justify-center px-5">
      <h1 class="text-white text-center text-4xl font-bold z-20">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
