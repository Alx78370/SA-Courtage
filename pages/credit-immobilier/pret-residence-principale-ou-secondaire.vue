<script setup lang="ts">
import residencePrincipale from '@/assets/images/maison-principale.webp'
import residenceSecondaire from '@/assets/images/maison-secondaire.webp'
import maisonPrincipaleOuSecondaireImage from '@/assets/images/RP_de_dos.webp'
</script>

<template>
  <section>
    <Banner title="Prêt pour résidence principale ou secondaire" :image-src="maisonPrincipaleOuSecondaireImage" image-alt="image de couple recevant la clé de leur maison" />
  </section>
  <section class="px-5 py-10">
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
      <p class="text-xl font-medium pt-10 pb-5">
        En savoir plus :
      </p>
      <p>
        Pour plus d'informations sur les documents et pièces à fournir, téléchargez le document ci-dessous.
      </p>
      <ButtonDownloadFile
        file="/questionnaire-assurance.pdf"
        download-name="questionnaire-assurance.pdf"
        button-text="Télécharger le document"
        class="mt-5"
      />
      <ul class="flex flex-col gap-5 pt-10">
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
    </article>
  </section>
  <section class="px-5 pb-10">
    <AgendaHome />
  </section>
</template>
