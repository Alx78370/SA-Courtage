<template>
  <div>
    <section>
      <AppBanner
        title="Prêt pour investissement locatif"
        image-src="/images/appartement.webp"
        image-alt="image d'appartement"
      />
    </section>
    <section class="px-2 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <div>
        <h2 class="text-xl font-semibold text-center pb-10">
          Boostez votre patrimoine avec un investissement locatif clé en main !
        </h2>
        <p class="pb-5">
          Vous souhaitez faire fructifier votre patrimoine tout en bénéficiant d’un revenu complémentaire ? L’investissement locatif est une solution stratégique pour optimiser vos finances, préparer votre retraite ou transmettre un héritage. En collaboration avec des partenaires spécialisés en gestion de patrimoine et en placements financiers adaptés à tout profil, je vous accompagne pour bâtir un projet solide et sur-mesure.
        </p>
        <h3 class="text-lg font-semibold pb-2">
          Pourquoi opter pour un prêt d’investissement locatif ?
        </h3>
        <ul class="flex flex-col list-disc list-inside pb-5 gap-2">
          <li>
            <span class="font-semibold">Développer votre patrimoine :</span>
            Investir dans l’immobilier locatif vous permet d’acquérir des biens tout en profitant d’un financement adapté à vos capacités.
          </li>
          <li>
            <span class="font-semibold">Profiter d’une rentabilité durable :</span>
            Les revenus locatifs génèrent un complément financier régulier, idéal pour améliorer votre pouvoir d’achat ou préparer vos projets futurs.
          </li>
          <li>
            <span class="font-semibold">Bénéficier d’avantages fiscaux :</span>
            Certaines stratégies permettent de réduire vos impôts grâce à des dispositifs fiscaux adaptés.
          </li>
          <li>
            <span class="font-semibold">Préparer l’avenir :</span>
            Assurez une sécurité financière pour vous et vos proches tout en diversifiant vos placements pour un rendement à long terme.
          </li>
        </ul>
        <p class="pb-5">
          Mon expertise et mon réseau de partenaires vous garantissent un accompagnement personnalisé pour concrétiser votre projet d’investissement locatif en toute sérénité.
        </p>
        <h3 class="text-lg font-semibold pb-2">En savoir plus :</h3>
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
      </div>
    </section>
    <section>
      <StepsCard :list-items="[ 
        'Calcul de la capacité d\'emprunt',
        'Mise en relation pour un étude fiscale et patrimoniale',
        'Recherche du bien en adéquation avec vos souhaits et votre situation',
        'Recherche du financement pour optimiser votre projet'
        ]" 
      />
    </section>
    <section class="py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <AgendaHome title="N'hésitez pas à me contacter pour une étude personnalisée de votre investissement locatif" />
    </section>
  </div>
</template>
