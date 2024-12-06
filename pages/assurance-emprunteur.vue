<script setup lang="ts">
import coupleContent from '@/assets/images/couple_content.webp'
</script>

<template>
  <section>
    <Banner
      title="Assurance emprunteur"
      :image-src="coupleContent"
      image-alt="image de couple content"
    />
  </section>
  <section>
    <div class="text-lg border-2 shadow-2xl rounded-3xl p-5 m-5">
      <p class="pb-5">
        Nouvelle assurance ou changement d'assurance de prêt ? Je compare les offres et vous garantis une couverture adaptée à votre situation, au meilleur tarif.
      </p>
      <p class="pb-5">
        Devis gratuit :
        Pour vérifier l'économie réalisable avec un changement d'assurance sur votre prêt immobilier en cours.
      </p>
      <div>
        <p class="pb-5">
          Procédure :
        </p>
        <ul class="list-disc list-inside">
          <li>Téléchargez le document.</li>
          <li>Transmettez-moi les documents demandés via le formulaire ci-dessous pour une étude gratuite.</li>
        </ul>
      </div>
      <div class="flex justify-center pt-5">
        <a href="@/public/PPS.pdf " download="PPS.pdf" class="bg-blue-500 rounded-3xl p-3 text-white">Télécharger le document</a>
      </div>
    </div>
  </section>
  <section class="px-5 py-10">
    <AssuranceForm />
  </section>
</template>
