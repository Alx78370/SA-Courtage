<template>
  <div>
    <section class="relative h-section mb-20">
      <HeroCard />
    </section>
    <section class="py-20 ">
      <CarouselBank class="bg-white py-10 md:py-20" />
    </section>
    <section class="px-2 py-20 w-full md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <h2 class="text-center pb-5 text-2xl md:text-3xl font-semibold">
        Retrouvez mes différentes prestations
      </h2>
      <div
        class="flex flex-col gap-5 w-full lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3"
      >
        <ServiceCard
          title="Prêt pour résidence principale ou secondaire"
          image-src="/images/RP_de_dos.webp"
          link="/credit-immobilier/pret-residence-principale-ou-secondaire"
          details="Un accompagnement personnalisé pour un prêt sur mesure 100% adapté à votre projet."
          class="lg:col-span-2"
        />
        <ServiceCard
          title="Prêt pour investissement locatif"
          image-src="/images/appartement.webp"
          link="/credit-immobilier/pret-investissement-locatif"
          details="Des conditions de financement négociées pour optimiser votre investissement."
        />
        <ServiceCard
          title="Rachat de soulte"
          image-src="/images/rachatSoulte.webp"
          link="/credit-immobilier/rachat-soulte"
          details="Les meilleures solutions pour devenir propriétaire à part entière."
        />
        <ServiceCard
          title="Rachat de crédit"
          image-src="/images/accord.webp"
          link="/credit-immobilier/rachat-credit"
          details="Vérifions ensemble la pertinence d’un rachat de crédit."
        />
        <ServiceCard
          title="Assurance emprunteur"
          image-src="/images/couple_content.webp"
          link="/assurance-emprunteur"
          details="Des offres d’assurance emprunteur pour une couverture adaptée à votre profil."
        />
      </div>
    </section>
  </div>
</template>
