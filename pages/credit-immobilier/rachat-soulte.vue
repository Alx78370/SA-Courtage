<script setup lang="ts">
import rachatSoulte from '@/assets/images/rachatSoulte.webp'
</script>

<template>
  <section>
    <Banner
      title="Rachat de soulte"
      :image-src="rachatSoulte"
      image-alt="image d'un poignée de main"
    />
  </section>
  <section class="px-5 py-10">
    <div class="text-lg">
      <h2 class="text-2xl font-semibold text-center pb-10">
        Devenez pleinement propriétaire : votre solution pour le rachat de soulte
      </h2>
      <p class="pb-5">
        Le rachat de soulte est une opération financière qui permet à une personne de racheter la part de son ou ses co-indivisaires dans un bien immobilier commun.
        Cette opération est souvent réalisée dans le cadre d’une succession ou d’un divorce.
      </p>
      <p class="pb-5">
        Dans ces moments souvent difficiles, je vous accompagne pour trouver les meilleures solutions de financement et vous permettre de devenir propriétaire à part entière du bien.
      </p>
      <p class="pb-5">
        Faites-moi confiance, laissez-vous guider.
      </p>
      <p class="text-xl font-medium pb-5">
        En savoir plus :
      </p>
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
