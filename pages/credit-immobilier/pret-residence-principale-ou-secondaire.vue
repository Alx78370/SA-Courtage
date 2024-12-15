<script setup lang="ts">
import residencePrincipale from "@/assets/images/maison-principale.webp";
import residenceSecondaire from "@/assets/images/maison-secondaire.webp";
import maisonPrincipaleOuSecondaireImage from "@/assets/images/RP_de_dos_banner.webp";
</script>

<template>
  <section>
    <Banner title="Prêt pour résidence principale ou secondaire" :image-src="maisonPrincipaleOuSecondaireImage" image-alt="image de couple recevant la clé de leur maison" />
  </section>
  <section class="px-5 py-10 md:mx-10 xl:px-44 text-lg md:text-xl">
    <article>
      <h2 class="text-2xl text-center font-semibold pb-10 md:text-3xl">
        Concrétisez votre projet immobilier avec sérénité
      </h2>
      <p class="font-medium pb-2">
        Mon objectif :
      </p>
      <p>
        Vous permettre, en fonction de votre profil et de votre situation, de financer votre achat immobilier dans les meilleures conditions avec un accompagnement du calcul de l'enveloppe d'emprunt à la signature de l'acte authentique.
      </p>
    </article>
    <ul class="flex flex-col gap-5 pt-10 lg:flex-row">
      <li>
        <LoanOption
          :image="residencePrincipale"
          alt="Résidence principale"
          description="Prêt immobilier pour l'acquisition de votre Résidence Principale (ancien ou VEFA)."
        />
      </li>
      <li>
        <LoanOption
          :image="residenceSecondaire"
          alt="Résidence secondaire"
          description="Prêt immobilier pour l'acquisition de votre Résidence Secondaire."
        />
      </li>
    </ul>
    <article>
      <p class="font-medium pt-10 pb-2">
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
