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
  <li class="flex flex-col items-center justify-center mb-5 h-40">
    <Icon :name="icon" class="text-7xl text-slate-400" />
    <p class="text-xl text-center">
      {{ text }}
    </p>
  </li>
</template>
