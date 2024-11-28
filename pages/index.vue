<script setup lang="ts">
import accord from '@/assets/images/accord.webp'
import appartementImage from '@/assets/images/appartement.webp'
import coupleContent from '@/assets/images/couple_content.webp'
import maisonPrincipaleImage from '@/assets/images/maison-principale.webp'
import maisonSecondaireImage from '@/assets/images/maison-secondaire.webp'
import poigneeDeMain from '@/assets/images/poignee_de_main.webp'
</script>

<template>
  <section class="relative h-section">
    <img src="../assets/images/fake.webp" alt="" class="h-section object-cover">
    <HeroCard class="absolute p-5 top-0 left-0 bg-opacity-40 bg-slate-900 w-screen" />
  </section>
  <section class="px-5 py-10">
    <ServiceCard
      title="Prêt pour résidence principale"
      :image-src="maisonPrincipaleImage"
      image-alt="image de résidence principale"
      link="/credit-immobilier/pret-residence-principale"
      details="Découvrez nos offres de prêt pour votre résidence principale."
      class="pb-5"
    />
    <ServiceCard
      title="Prêt pour résidence secondaire"
      :image-src="maisonSecondaireImage"
      image-alt="image de résidence secondaire"
      link="/credit-immobilier/pret-residence-secondaire"
      details="Découvrez nos offres de prêt pour votre résidence secondaire."
      class="pb-5"
    />
    <ServiceCard
      title="Prêt pour investissement locatif"
      :image-src="appartementImage"
      image-alt="image d'appartement"
      link="/credit-immobilier/pret-investissement-locatif"
      details="Découvrez nos offres de prêt pour votre investissement locatif."
      class="pb-5"
    />
    <ServiceCard
      title="Assurance emprunteur"
      :image-src="accord"
      image-alt="image de main qui se serrent"
      link="/assurance-emprunteur"
      details="Découvrez nos offres d'assurance emprunteur."
      class="pb-5"
    />
    <ServiceCard
      title="Rachat de crédits"
      :image-src="poigneeDeMain"
      image-alt="image d'un couple qui serre la main à quelqu'un"
      link="/rachat-credits"
      details="Découvrez nos offres de rachat de crédits."
      class="pb-5"
    />
    <ServiceCard
      title="Regroupement de crédits"
      :image-src="coupleContent"
      image-alt="image d'un couple heureux devant un ordianateur"
      link="/regroupement-credits"
      details="Découvrez nos offres de regroupement de crédits."
      class="pb-5"
    />
  </section>
  <section class="px-5 pb-10">
    <AgendaHome />
  </section>
</template>
