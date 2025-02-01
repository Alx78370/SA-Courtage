<script setup lang="ts">
defineProps({
  listItems: {
    type: Array,
    required: false,
    default: () => [
      "Étude gratuite pour calculer la capacité d'emprunt",
      "Constitution du dossier de recherche de financement",
      "Négociation de votre dossier auprès des partenaires bancaires",
      "Présentation et analyse des propositions bancaires",
      "Accompagnement du rendez-vous en banque",
      "Relecture des offres de prêt",
      "Aide au déblocage des fonds",
      "Concrétisation de votre projet",
    ],
  },
});
</script>

<template>
  <div class="relative h-section w-full">
    <img
      src="/images/building.webp"
      alt="image de building"
      class="absolute inset-0 object-cover w-full h-full shadow-xl"
    />
    <div
      class="absolute inset-0 bg-opacity-60 bg-slate-900 px-5 py-10 flex items-center justify-center"
    >
      <div class="text-white">
        <h3 class="text-2xl font-semibold pb-5 md:text-3xl">
          Les étapes de mon accompagnement :
        </h3>
        <hr class="pb-5" />
        <ul
          class="list list-disc list-inside text-lg lg:text-xl flex flex-col gap-5"
        >
          <li v-for="(item, index) in listItems" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
