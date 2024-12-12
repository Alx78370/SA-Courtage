<script setup lang="ts">
import accord from '@/assets/images/accord.webp'
import appartementImage from '@/assets/images/appartement.webp'
import coupleContent from '@/assets/images/couple_content.webp'
import rachatSoulte from '@/assets/images/rachatSoulte.webp'
import maisonPrincipaleOuSecondaireImage from '@/assets/images/RP_de_dos.webp'
</script>

<template>
  <section class="relative h-section">
    <img src="../assets/images/hero-fake.webp" alt="" class="h-section w-screen object-cover shadow-xl">
    <HeroCard class="absolute p-5 top-0 left-0 bg-opacity-40 bg-slate-900 w-screen" />
  </section>
  <section class="px-5 py-10">
    <ServiceCard
      title="Prêt pour résidence principale ou secondaire"
      :image-src="maisonPrincipaleOuSecondaireImage"
      image-alt="image de couple recevant la clé de leur maison"
      link="/credit-immobilier/pret-residence-principale-ou-secondaire"
      details="Un accompagnement personnalisé pour un prêt sur mesure 100% adapté à votre projet."
      class="pb-5"
    />
    <ServiceCard
      title="Prêt pour investissement locatif"
      :image-src="appartementImage"
      image-alt="image d'appartement"
      link="/credit-immobilier/pret-investissement-locatif"
      details="Des conditions de financement négociées pour optimiser votre investissement."
      class="pb-5"
    />
    <ServiceCard
      title="Rachat de soulte"
      :image-src="rachatSoulte"
      image-alt="image d'une pognée de main"
      link="/credit-immobilier/rachat-soulte"
      details="Les meilleures solutions pour devenir propriétaire à part entière."
      class="pb-5"
    />
    <ServiceCard
      title="Rachat de crédit"
      :image-src="accord"
      image-alt="image d'une pognée de main"
      link="/credit-immobilier/rachat-credit"
      details="Vérifions ensemble la pertinence d’un rachat de crédit."
      class="pb-5"
    />
    <ServiceCard
      title="Assurance emprunteur"
      :image-src="coupleContent"
      image-alt="image de couple content"
      link="/assurance-emprunteur"
      details="Des offres d’assurance emprunteur pour une couverture adaptée à votre profil."
    />
  </section>
  <section class="px-5 py-10 bg-white">
    <CarouselBank />
  </section>
  <section class="px-5 py-10">
    <AgendaHome />
  </section>
</template>
