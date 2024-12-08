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
  action: {
    type: String,
    default: 'download',
    validator: (value: string) => ['download', 'preview'].includes(value),
  },
})
</script>

<template>
  <div class="flex justify-center">
    <a
      :href="file"
      :download="action === 'download' ? downloadName : undefined"
      :target="action === 'preview' ? '_blank' : undefined"
      rel="noopener noreferrer"
      class="bg-blue-500 rounded-2xl shadow-xl p-3 text-white"
    >
      {{ buttonText }}
    </a>
  </div>
</template>
