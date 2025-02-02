<template>
  <div>
    <section>
      <AppBanner
        title="Assurance emprunteur"
        image-src="/images/couple_content_banner.webp"
        image-alt="image de couple content"
      />
    </section>
    <section class="px-5 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <div>
        <h2 class="text-2xl text-center font-semibold pb-10 md:text-3xl">
          Nouvelle assurance ou changement d'assurance de prêt ?
        </h2>
        <h3 class="text-lg font-semibold pb-5">Que garantit l’assurance emprunteur ?</h3>
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
    <section class="py-20 bg-white w-screen">
      <InsuranceForm />
    </section>
    <section class="py-20">
      <AgendaHome />
    </section>
  </div>
</template>
