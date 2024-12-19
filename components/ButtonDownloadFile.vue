<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  downloadName: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "Télécharger le document",
  },
  action: {
    type: String,
    default: "download",
    validator: (value: string) => ["download", "preview"].includes(value),
  },
});
</script>

<template>
  <div class="flex justify-center">
    <a
      :href="file"
      :download="action === 'download' ? downloadName : undefined"
      :target="action === 'preview' ? '_blank' : undefined"
      rel="noopener noreferrer"
      class="bg-blue-600 rounded-2xl shadow-lg p-3 text-white delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 hover:shadow-xl"
    >
      {{ buttonText }}
    </a>
  </div>
</template>
