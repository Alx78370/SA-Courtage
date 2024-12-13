<script setup lang="ts">
import rachatSoulteBanner from '@/assets/images/rachatSoulte_banner.webp'
</script>

<template>
  <section>
    <Banner
      title="Rachat de soulte"
      :image-src="rachatSoulteBanner"
      image-alt="image d'un poignée de main"
    />
  </section>
  <section class="px-5 py-10 md:mx-10 xl:px-44">
    <article class="text-lg md:text-xl">
      <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
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
    </article>
  </section>
  <section>
    <StepsCard />
  </section>
  <section class="py-10">
    <AgendaHome />
  </section>
</template>
