<script setup lang="ts">
import coupleContentBanner from "@/assets/images/couple_content_banner.webp";
</script>

<template>
  <div>
    <section>
      <AppBanner
        title="Assurance emprunteur"
        :image-src="coupleContentBanner"
        image-alt="image de couple content"
      />
    </section>
    <section class="px-5 py-10 md:mx-10 xl:px-44">
      <div class="text-lg rounded-3xl md:text-xl">
        <h2 class="text-2xl text-center font-semibold pb-10 md:text-3xl">
          Nouvelle assurance ou changement d'assurance de prêt ?
        </h2>
        <p class="text-xl font-semibold pb-5 md:text-2xl">Que garantit l’assurance emprunteur ?</p>
        <p class="pb-5">
          L’assurance emprunteur est une assurance qui garantit la prise en
          charge de tout ou partie des échéances de remboursement ou du capital
          restant dû d’un crédit en cas de survenance de certains événements.
        </p>
        <p class="pb-5">
          Ces événements sont le plus souvent le décès, la perte totale et
          irréversible d’autonomie, l’invalidité permanente, l’incapacité
          temporaire de travail (ITT).
        </p>
        <p class="pb-5">
          Je compare les offres et vous garantis une couverture adaptée à votre
          situation, au meilleur tarif.
        </p>
        <p class="text-xl font-semibold pb-2 md:text-2xl">Devis gratuit :</p>
        <p class="pb-5">
          Pour vérifier l'économie réalisable avec un changement d'assurance sur
          votre prêt immobilier en cours.
        </p>
        <div>
          <p class="text-xl font-semibold pb-2 md:text-2xl">Procédure :</p>
          <ul class="list-disc list-inside">
            <li>Téléchargez le document.</li>
            <li>
              Transmettez-moi les documents demandés via le formulaire
              ci-dessous pour une étude gratuite.
            </li>
          </ul>
        </div>
        <ButtonDownloadFile
          file="/documents/questionnaire-assurance.pdf"
          download-name="questionnaire-assurance.pdf"
          button-text="Télécharger le document"
          action="download"
          class="mt-10"
        />
      </div>
    </section>
    <section class="py-10">
      <InsuranceForm />
    </section>
    <section class="py-10">
      <AgendaHome />
    </section>
  </div>
</template>
