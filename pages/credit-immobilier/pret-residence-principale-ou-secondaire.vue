<script setup lang="ts">
import residencePrincipale from '@/assets/images/maison-principale.webp'
import residenceSecondaire from '@/assets/images/maison-secondaire.webp'
import maisonPrincipaleOuSecondaireImage from '@/assets/images/RP_de_dos.webp'
</script>

<template>
  <section>
    <Banner title="Prêt pour résidence principale ou secondaire" :image-src="maisonPrincipaleOuSecondaireImage" image-alt="image de couple recevant la clé de leur maison" />
  </section>
  <section class="px-5 py-10 xl:px-44">
    <article class="text-lg">
      <h2 class="text-2xl text-center font-semibold pb-10">
        Concrétisez votre projet immobilier avec sérénité
      </h2>
      <p class="text-xl font-medium pb-5">
        Mon objectif :
      </p>
      <p>
        Vous permettre, en fonction de votre profil et de votre situation, de financer votre achat immobilier dans les meilleures conditions avec un accompagnement du calcul de l'enveloppe d'emprunt à la signature de l'acte authentique.
      </p>
      <ul class="flex flex-col gap-5 pt-10 lg:flex-row">
        <li class="w-full bg-white shadow-xl rounded-3xl">
          <img :src="residencePrincipale" alt="" class="rounded-t-3xl">
          <p class="text-center">
            Prêt immobilier pour l'acquisition de votre Résidence Principale (ancien ou VEFA).
          </p>
        </li>
        <li class="w-full bg-white shadow-xl rounded-3xl">
          <img :src="residenceSecondaire" alt="" class="rounded-t-3xl">
          <p class="text-center">
            Prêt immobilier pour l'acquisition de votre Résidence Secondaire.
          </p>
        </li>
      </ul>
      <p class="text-xl font-medium pt-10 pb-5">
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
      
    </article>
  </section>
  <section>
    <StepsCard />
  </section>
  <section class="py-10">
    <AgendaHome />
  </section>
</template>
