<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li class="border-2 shadow-md rounded-3xl p-2 bg-white hover:bg-slate-50 hover:scale-105 transition-all duration-300 md:min-w-[300px] lg:min-w-[400px] text-lg md:text-xl">
    <a
      :href="href"
      class="text-lg flex flex-col justify-center items-center"
    >
      <Icon :name="icon" class="text-2xl" />
      {{ text }}
    </a>
  </li>
</template>
