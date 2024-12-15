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
});
</script>

<template>
  <article>
    <div class="group relative shadow-md w-full h-64 rounded-3xl lg:h-80 overflow-hidden transition-shadow hover:shadow-xl">
      <NuxtLink :to="link">
        <img :src="imageSrc" :alt="imageAlt" class="w-full h-full object-cover rounded-3xl transition-all group-hover:scale-105">
        <div class="bg-slate-900 opacity-40 absolute inset-0 rounded-3xl" />
        <div class="p-2 absolute inset-0 flex flex-col items-center justify-center">
          <h3 class="text-white text-center text-3xl z-20 border-b-2 pb-4 w-full md:text-4xl">
            {{ title }}
          </h3>
          <p class="text-white text-center text-lg z-20 pt-2 md:text-xl">
            {{ details }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </article>
</template>
