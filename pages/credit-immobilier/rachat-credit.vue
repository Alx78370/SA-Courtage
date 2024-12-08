<script setup lang="ts">
import accord from '@/assets/images/accord.webp'
</script>

<template>
  <section>
    <Banner
      title="Rachat de crédits"
      :image-src="accord"
      image-alt="image d'une pognée de main"
    />
  </section>
  <section class="px-5 py-10">
    <div class="text-lg">
      <h2 class="text-2xl font-semibold text-center pb-10">
        Optimisez votre budget avec le rachat de crédits
      </h2>
      <p class="pb-5">
        Avec des taux d'intérêt en baisse, il est possible de payer des mensualités moins importantes ou de réduire la durée de votre prêt immobilier.
        Vérifions ensemble !
      </p>
      <p class="pb-5">
        En fonction de votre situation, je vous propose des solutions de financement adaptées à vos besoins.
        N'hésitez pas à me contacter pour plus d'informations.
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
