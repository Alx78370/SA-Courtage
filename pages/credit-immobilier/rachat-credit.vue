<script setup lang="ts">
import accord from '@/assets/images/accord_banner.webp'
</script>

<template>
  <section>
    <Banner
      title="Rachat de crédits"
      :image-src="accord"
      image-alt="image d'une pognée de main"
    />
  </section>
  <section class="px-5 py-10 md:mx-10 xl:px-44">
    <div class="text-lg md:text-xl">
      <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
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
      <p class="text-xl font-medium pb-2">
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
        class="pt-10"
      />
    </div>
  </section>
  <section>
    <StepsCard />
  </section>
  <section class="py-10">
    <AgendaHome />
  </section>
</template>
