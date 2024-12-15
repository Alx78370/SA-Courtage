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
	description: {
		type: String,
		required: true,
	},
});
</script>

<template>
  <article class="w-full bg-white shadow-xl rounded-xl">
    <img :src="image" :alt="alt" class="rounded-t-xl">
    <p class="text-center p-5 lg:min-h-24">
      {{ description }}
    </p>
  </article>
</template>
