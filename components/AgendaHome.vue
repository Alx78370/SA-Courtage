<script setup lang="ts">
const options = {
  url: 'https://calendly.com/s-a-courtage/30min',
}
</script>

<template>
  <div class="shadow-2xl">
    <div class="p-6">
      <h3 class="text-4xl pb-3">
        Discutons de votre projet ensemble
      </h3>
      <p>
        À l'écoute de mes clients, transparente et soucieuse de leur offrir le meilleur service, il me fera plaisir de vous accompagner du début à la fin dans la réalisation de votre projet. Au plaisir de vous rencontrer !
      </p>
    </div>
    <div>
      <CalendlyInlineWidget class="rounded-e-xl" v-bind="options" />
    </div>
  </div>
</template>
