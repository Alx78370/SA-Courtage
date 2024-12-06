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
    <div class="text-lg rounded-3xl p-5 mt-5">
      <h2 class="text-2xl font-semibold pb-5">
        Nouvelle assurance ou changement d'assurance de prêt ?
      </h2>
      <p class="pb-5">
        Je compare les offres et vous garantis une couverture adaptée à votre situation, au meilleur tarif.
      </p>
      <p class="pb-5 font-medium">
        Devis gratuit :
      </p>
      <p class="pb-5">
        Pour vérifier l'économie réalisable avec un changement d'assurance sur votre prêt immobilier en cours.
      </p>
      <div>
        <p class="pb-5 font-medium">
          Procédure :
        </p>
        <ul class="list-disc list-inside">
          <li>Téléchargez le document.</li>
          <li>Transmettez-moi les documents demandés via le formulaire ci-dessous pour une étude gratuite.</li>
        </ul>
      </div>
      <div class="flex justify-center pt-10">
        <a href="/questionnaire-assurance.pdf " download="questionnaire-assurance.pdf" class="bg-blue-500 rounded-2xl p-3 text-white">Télécharger le document</a>
      </div>
    </div>
  </section>
  <section class="px-5 py-10">
    <InsuranceForm />
  </section>
</template>
