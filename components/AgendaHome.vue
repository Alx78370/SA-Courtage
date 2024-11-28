<script setup lang="ts">
const options = {
  url: 'https://calendly.com/s-a-courtage/30min',
}
</script>

<template>
  <div class="border-2 shadow-2xl py-6 rounded-3xl bg-white">
    <div class="px-6 pb-5">
      <h3 class="text-4xl pb-3">
        Discutons de votre projet ensemble
      </h3>
      <hr class="pb-2">
      <p>
        À l'écoute de mes clients, transparente et soucieuse de leur offrir le meilleur service, il me fera plaisir de vous accompagner du début à la fin dans la réalisation de votre projet. Au plaisir de vous rencontrer !
      </p>
    </div>
    <div>
      <CalendlyInlineWidget class="px-1" v-bind="options" />
    </div>
  </div>
</template>
