<script setup lang="ts">
defineProps({
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
  <li class="flex flex-col items-center justify-start">
    <Icon :name="icon" class="text-5xl md:text-7xl text-slate-400" />
    <p class="text-center w-full">
      {{ text }}
    </p>
  </li>
</template>
