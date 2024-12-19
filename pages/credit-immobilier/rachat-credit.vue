<script setup lang="ts">
import accord from "@/assets/images/accord_banner.webp";
</script>

<template>
  <div>
    <section>
      <AppBanner title="Rachat de crédits" :image-src="accord" image-alt="image d'une pognée de main" />
    </section>
    <section class="px-5 py-10 md:mx-10 xl:px-44">
      <div class="text-lg md:text-xl">
        <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
          Optimisez votre budget avec le rachat de crédits
        </h2>
        <p class="pb-5">
          Le rachat de crédits est une solution financière qui vous permet de revoir les conditions de votre prêt immobilier, afin de profiter de taux plus intéressants.
        </p>
        <p class="pb-5 font-semibold">
          Quels sont les avantages du rachat de crédits ?
        </p>
        <ul class="list-disc list-inside pb-5">
          <li class="pb-2">
            <span class="font-medium">Baisse des taux d’intérêt :</span>
            En renégociant votre crédit existant, vous profitez des taux d'intérêt actuels souvent plus bas, ce qui peut se traduire par des économies importantes sur le long terme.
          </li>
          <li class="pb-2">
            <span class="font-medium">Réduction des mensualités :</span>
            Ajustez vos paiements mensuels pour qu'ils soient en phase avec votre budget actuel. Cela peut libérer des fonds pour d'autres projets ou dépenses du quotidien.
          </li>
          <li class="pb-2">
            <span class="font-medium">Raccourcissement de la durée du prêt :</span>
            Si votre objectif est de rembourser plus rapidement votre prêt, le rachat de crédits vous permet de réduire la durée totale de votre engagement financier.
          </li>
        </ul>
        <p class="pb-5">
          En fonction de votre situation, je vous propose des solutions de
          financement adaptées à vos besoins. N'hésitez pas à me contacter pour
          plus d'informations.
        </p>
        <p class="text-xl font-medium pb-2">En savoir plus :</p>
        <p>
          Pour prévisualiser les documents et pièces à fournir, cliquer sur le
          bouton ci-dessous.
        </p>
        <ButtonDownloadFile file="/documents/liste-documents.pdf" download-name="liste-documents.pdf"
          button-text="Documents et pièces à fournir" action="preview" class="pt-10" />
      </div>
    </section>
    <section>
      <StepsCard />
    </section>
    <section class="py-10">
      <AgendaHome />
    </section>
  </div>
</template>
