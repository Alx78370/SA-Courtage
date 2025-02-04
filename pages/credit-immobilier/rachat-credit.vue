<template>
  <div>
    <section>
      <AppBanner title="Rachat de crédits" image-src="/images/accord_banner.webp" image-alt="image d'une pognée de main" />
    </section>
    <section class="px-2 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <div>
        <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
          Optimisez votre budget avec le rachat de crédits
        </h2>
        <p class="pb-5">
          Le rachat de crédits est une solution financière qui vous permet de revoir les conditions de votre prêt immobilier, afin de profiter de taux plus intéressants.
        </p>
        <h3 class="text-lg font-semibold pb-5">
          Quels sont les avantages du rachat de crédits ?
        </h3>
        <ul class="list-disc list-inside pb-5">
          <li class="pb-2">
            <span class="font-semibold">Baisse des taux d’intérêt :</span>
            En renégociant votre crédit existant, vous profitez des taux d'intérêt actuels souvent plus bas, ce qui peut se traduire par des économies importantes sur le long terme.
          </li>
          <li class="pb-2">
            <span class="font-semibold">Réduction des mensualités :</span>
            Ajustez vos paiements mensuels pour qu'ils soient en phase avec votre budget actuel. Cela peut libérer des fonds pour d'autres projets ou dépenses du quotidien.
          </li>
          <li class="pb-2">
            <span class="font-semibold">Raccourcissement de la durée du prêt :</span>
            Si votre objectif est de rembourser plus rapidement votre prêt, le rachat de crédits vous permet de réduire la durée totale de votre engagement financier.
          </li>
        </ul>
        <p class="pb-5">
          En fonction de votre situation, je vous propose des solutions de
          financement adaptées à vos besoins. N'hésitez pas à me contacter pour
          plus d'informations.
        </p>
        <h3 class="text-lg font-semibold pb-2">En savoir plus :</h3>
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
  </div>
</template>
