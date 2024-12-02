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
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article>
    <div class="relative shadow-xl w-full">
      <NuxtLink :to="link">
        <img :src="imageSrc" :alt="imageAlt" class="w-full h-48 object-cover rounded-3xl">
        <div class="bg-slate-900 opacity-40 absolute inset-0 rounded-3xl" />
        <div class="p-2 absolute inset-0 flex flex-col items-center justify-center">
          <h3 class="text-white text-center text-3xl z-20 border-b-2 pb-4 w-full">
            {{ title }}
          </h3>
          <p class="text-white text-lg z-20 pt-2">
            {{ details }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </article>
</template>
