<script setup lang="ts">
import appartementImage from '@/assets/images/appartement.webp'
</script>

<template>
  <section>
    <Banner title="Prêt pour investissement locatif" :image-src="appartementImage" image-alt="image d'appartement" />
  </section>
  <section class="px-5 py-10">
    <div class="text-lg">
      <h2 class="text-2xl font-semibold text-center pb-10">
        Boostez votre patrimoine avec un investissement locatif clé en main !
      </h2>
      <p class="pb-5">
        En collaboration avec mes partenaires spécialistes en gestion de patrimoine et placements financiers adaptés à tout profil, je peux vous proposer un projet "clé en main" pour un investissement locatif :
      </p>
      <ul class="flex flex-col gap-3 list-disc list-inside pb-5">
        <li>Capacité d'emprunt.</li>
        <li>Étude fiscale et patrimoniale.</li>
        <li>Recherche du bien en adéquation avec vos souhaits et votre situation.</li>
        <li>Recherche du financement pour optimiser votre projet.</li>
      </ul>
      <p class="text-xl font-medium pb-5">En savoir plus :</p>
      <p>
        Pour prévisualiser les documents et pièces à fournir, cliquer sur le bouton ci-dessous.
      </p>
      <ButtonDownloadFile
        file="/documents/liste-documents.pdf"
        download-name="liste-documents.pdf"
        button-text="Documents et pièces à fournir"
        action="preview"
        class="mt-5"
      />
    </div>
  </section>
  <section class="relative h-section">
    <img src="@/assets/images/building.webp" alt="image de building" class="h-section object-cover shadow-xl">
    <StepsCard class="absolute px-5 py-10 top-0 left-0 bg-opacity-40 bg-slate-900 w-screen h-section" />
  </section>
  <section class="px-5 py-10">
    <AgendaHome />
  </section>
</template>
