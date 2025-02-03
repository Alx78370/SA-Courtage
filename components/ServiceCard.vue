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
  imageAlt: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="link" class="group relative w-full h-64 lg:h-80 overflow-hidden focus-visible:ring-4 focus-visible:ring-black rounded-3xl">
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="w-full h-full object-cover rounded-3xl transition-all group-hover:scale-105"
    />
    <div class="bg-slate-900/60 absolute inset-0 rounded-3xl" />
    <div
      class="p-2 absolute inset-0 flex flex-col items-center justify-center"
    >
      <h3
        class="text-white text-center font-semibold text-xl md:text-3xl z-20 border-b-2 pb-4 w-full"
      >
        {{ title }}
      </h3>
      <p class="text-white text-center z-20 pt-2">
        {{ details }}
      </p>
    </div>
  </NuxtLink>
</template>
