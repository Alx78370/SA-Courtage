<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  downloadName: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Télécharger le document',
  },
})
</script>

<template>
  <div class="flex justify-center">
    <a
      :href="file"
      :download="downloadName"
      class="bg-blue-500 rounded-2xl shadow-xl p-3 text-white"
    >
      {{ buttonText }}
    </a>
  </div>
</template>
