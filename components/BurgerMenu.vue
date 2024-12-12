<script setup lang="ts">
defineProps({
  isMenuOpen: Boolean,
});

const _emit = defineEmits(['toggleMenu']);
</script>

<template>
  <div class="md:hidden">
    <button
      class="text-gray-800 focus:outline-none"
      @click="$emit('toggleMenu')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>
</template>
