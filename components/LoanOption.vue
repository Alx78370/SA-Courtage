<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="w-full bg-white shadow-xl rounded-xl">
    <img :src="image" :alt="alt" class="rounded-t-xl object-cover w-full" />
    <div class="p-5 md:min-h-96 lg:min-h-64">
      <h3 class="text-lg font-semibold text-center pb-2 md:text-xl border-b-2 border-gray-300">
        {{ title }}
      </h3>
      <p class="pt-2">
        {{ description }}
      </p>
    </div>
  </article>
</template>
