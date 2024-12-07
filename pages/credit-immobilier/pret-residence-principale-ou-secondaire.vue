<script setup lang="ts">
import maisonPrincipaleOuSecondaireImage from '@/assets/images/RP_de_dos.webp'
</script>

<template>
  <section>
    <Banner title="Prêt pour résidence principale ou secondaire" :image-src="maisonPrincipaleOuSecondaireImage" image-alt="image de couple recevant la clé de leur maison" />
  </section>
  <section class="px-5 py-10">
    <div class="text-lg">
      <h2 class="text-xl font-semibold pb-5">
        Mon objectif :
      </h2>
      <p class="pb-5">
        Vous permettre, en fonction de votre profil et de votre situation, de financer votre achat immobilier dans les meilleures conditions avec un accompagnement du calcul de l'enveloppe d'emprunt à la signature de l'acte authentique.
      </p>
      <ul class="flex flex-col gap-5 list-disc list-inside">
        <li>Prêt immobilier pour l'acquisition de votre Résidence Principale (ancien ou VEFA).</li>
        <li>Prêt immobilier pour l'acquisition de votre Résidence Secondaire.</li>
      </ul>
    </div>
  </section>
  <section class="px-5 py-10">
    <AgendaHome />
  </section>
</template>
