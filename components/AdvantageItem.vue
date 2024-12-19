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
  <li class="flex flex-col items-center justify-start h-full">
    <Icon :name="icon" class="text-7xl text-slate-400" />
    <p class="text-xl text-center max-w-72">
      {{ text }}
    </p>
  </li>
</template>
