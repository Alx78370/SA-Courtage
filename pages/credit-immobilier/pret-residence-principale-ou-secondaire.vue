<template>
  <div>
    <section>
      <AppBanner
        title="Prêt pour résidence principale ou secondaire"
        image-src="/images/RP_de_dos_banner.webp"
        image-alt="image de couple recevant la clé de leur maison"
      />
    </section>
    <section class="px-5 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto text-lg md:text-xl">
      <article>
        <h2 class="text-2xl text-center font-semibold pb-10 md:text-3xl">
          Concrétisez votre projet immobilier avec sérénité
        </h2>
        <p class="text-xl font-semibold pb-2 md:text-2xl">Mon objectif :</p>
        <p class="pb-5">
          Vous permettre, en fonction de votre profil et de votre situation, de financer votre achat immobilier dans les meilleures conditions possibles. Grâce à un accompagnement personnalisé, je vous aide à calculer votre enveloppe d'emprunt et à sécuriser chaque étape, de la recherche du bien jusqu'à la signature de l'acte authentique.
        </p>
        <p class="text-xl font-semibold pb-2 md:text-2xl">
          Pourquoi faire appel à un courtier ?
        </p>
        <p class="pb-5">
          Un courtier est bien plus qu’un simple intermédiaire. C’est un partenaire stratégique qui vous accompagne pour :
        </p>
        <ul class="flex flex-col gap-2 list-disc list-inside pb-5">
          <li>
            Optimiser votre capacité d’emprunt en fonction de vos revenus et charges.
          </li>
          <li>
            Trouver les meilleures offres de prêt immobilier grâce à son réseau de partenaires bancaires.
          </li>
          <li>
            Négocier les conditions les plus avantageuses, notamment en termes de taux d’intérêt et de durée.
          </li>
          <li>
            Simplifier vos démarches administratives pour vous faire gagner du temps et éviter le stress lié à la gestion des formalités.
          </li>
        </ul>
        <p class="pb-5"><span class="font-semibold">Le courtier :</span> un atout dans votre projet.</p>
        <p>
          Grâce à son expertise, il sécurise votre projet immobilier en vous offrant des solutions adaptées à vos besoins et à vos objectifs financiers.
        </p>
      </article>
      <ul class="flex flex-col gap-5 pt-10 md:flex-row">
        <li>
          <LoanOption
            image="/images/maison-principale.webp"
            alt="Résidence principale"
            title="Prêt immobilier pour l'acquisition de votre Résidence Principale."
            description="Que vous souhaitiez acheter un bien ancien ou un logement neuf en VEFA (Vente en l’État Futur d’Achèvement), je vous accompagne pour concrétiser ce projet essentiel. Votre résidence principale est bien souvent le cœur de votre patrimoine, et il est primordial de le financer dans des conditions optimales."
          />
        </li>
        <li>
          <LoanOption
            image="/images/maison-secondaire.webp"
            alt="Résidence secondaire"
            title="Prêt immobilier pour l'acquisition de votre Résidence Secondaire."
            description="Vous rêvez d’une maison de vacances ou d’un pied-à-terre pour vos escapades ? Je vous aide à financer votre résidence secondaire en tenant compte de votre capacité d’endettement et de vos projets à long terme. Ce type d’investissement peut également être envisagé dans une optique patrimoniale."
          />
        </li>
      </ul>
      <article>
        <p class="font-medium pt-10 pb-2">En savoir plus :</p>
        <p>
          Pour prévisualiser les documents et pièces à fournir, cliquer sur le
          bouton ci-dessous.
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
    <section class="py-20">
      <AgendaHome />
    </section>
  </div>
</template>
