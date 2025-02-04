<template>
  <div>
    <section>
      <AppBanner
        title="Rachat de soulte"
        image-src="/images/rachatSoulte_banner.webp"
        image-alt="image d'un poignée de main"
      />
    </section>
    <section class="px-2 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <article>
        <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
          Devenez pleinement propriétaire : votre solution pour le rachat de
          soulte
        </h2>
        <p class="pb-5">
          Le rachat de soulte est une démarche financière essentielle dans certaines situations de vie. Elle permet à une personne de racheter la part de propriété détenue par un ou plusieurs co-indivisaires dans un bien immobilier. Ce processus intervient souvent dans le cadre d’une succession, d’un divorce ou d’une séparation, et offre une solution claire pour devenir pleinement propriétaire d’un bien tout en réglant équitablement les droits de chacun.
        </p>
        <h3 class="text-lg font-semibold pb-5">
          Quand et pourquoi envisager un rachat de soulte ?
        </h3>
        <ul class="list-disc list-inside pb-5">
          <li class="pb-2">
            <span class="font-semibold">En cas de succession :</span>
            Lorsqu’un bien immobilier est transmis à plusieurs héritiers, le rachat de soulte permet à l’un d’entre eux de conserver le bien en dédommageant les autres.
          </li>
          <li class="pb-2">
            <span class="font-semibold">Dans le cadre d’un divorce ou d’une séparation :</span>
            Si un bien immobilier est détenu en commun, le rachat de soulte permet à l’un des ex-conjoints de devenir propriétaire exclusif en compensant financièrement l’autre.
          </li>
          <li class="pb-2">
            <span class="font-semibold">Pour clarifier une indivision :</span>
            L’indivision peut être source de complications. Le rachat de soulte offre une solution pour simplifier la gestion et éviter les conflits, tout en respectant les intérêts de toutes les parties.
          </li>
        </ul>
        <p class="pb-5">
          Dans ces moments souvent difficiles, je vous accompagne pour trouver
          les meilleures solutions de financement et vous permettre de devenir
          propriétaire à part entière du bien.
        </p>
        <p class="pb-5">Faites-moi confiance, laissez-vous guider.</p>
        <h3 class="text-lg font-semibold pb-2">En savoir plus :</h3>
        <p>
          Pour prévisualiser les documents et pièces à fournir, cliquer sur le
          bouton ci-dessous.
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
  </div>
</template>
