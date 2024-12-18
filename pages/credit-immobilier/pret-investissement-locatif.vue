<script setup lang="ts">
import appartementImage from "@/assets/images/appartement.webp";
</script>

<template>
  <div>
    <section>
      <AppBanner
        title="Prêt pour investissement locatif"
        :image-src="appartementImage"
        image-alt="image d'appartement"
      />
    </section>
    <section class="px-5 py-10 md:mx-10 xl:px-44">
      <div class="text-lg md:text-xl">
        <h2 class="text-2xl font-semibold text-center pb-10 md:text-3xl">
          Boostez votre patrimoine avec un investissement locatif clé en main !
        </h2>
        <p class="pb-5">
          Vous souhaitez faire fructifier votre patrimoine tout en bénéficiant d’un revenu complémentaire ? L’investissement locatif est une solution stratégique pour optimiser vos finances, préparer votre retraite ou transmettre un héritage. En collaboration avec des partenaires spécialisés en gestion de patrimoine et en placements financiers adaptés à tout profil, je vous accompagne pour bâtir un projet solide et sur-mesure.
        </p>
        <p class="text-xl font-semibold pb-2 md:text-2xl">
          Pourquoi opter pour un prêt d’investissement locatif ?
        </p>
        <ul class="flex flex-col list-disc list-inside pb-5 gap-2">
          <li>
            <span class="font-semibold">Développer votre patrimoine :</span>
            Investir dans l’immobilier locatif vous permet d’acquérir des biens tout en profitant d’un financement adapté à vos capacités.
          </li>
          <li>
            <span class="font-semibold">Profiter d’une rentabilité durable :</span>
            Les revenus locatifs génèrent un complément financier régulier, idéal pour améliorer votre pouvoir d’achat ou préparer vos projets futurs.
          </li>
          <li>
            <span class="font-semibold">Bénéficier d’avantages fiscaux :</span>
            Certaines stratégies permettent de réduire vos impôts grâce à des dispositifs fiscaux adaptés.
          </li>
          <li>
            <span class="font-semibold">Préparer l’avenir :</span>
            Assurez une sécurité financière pour vous et vos proches tout en diversifiant vos placements pour un rendement à long terme.
          </li>
        </ul>
        <p class="pb-5">
          Mon expertise et mon réseau de partenaires vous garantissent un accompagnement personnalisé pour concrétiser votre projet d’investissement locatif en toute sérénité.
        </p>
        <p class="text-xl font-semibold pb-2 md:text-2xl">En savoir plus :</p>
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
      </div>
    </section>
    <section>
      <StepsCard :list-items="[ 
        'Calcul de la capacité d\'emprunt',
        'Mise en relation pour un étude fiscale et patrimoniale',
        'Recherche du bien en adéquation avec vos souhaits et votre situation',
        'Recherche du financement pour optimiser votre projet'
        ]" 
      />
    </section>
    <section class="py-10">
      <AgendaHome title="N'hésitez pas à me contacter pour une étude personnalisée de votre investissement locatif" />
    </section>
  </div>
</template>
