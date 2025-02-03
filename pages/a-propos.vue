<template>
  <div>
    <section>
      <AppBanner
        title="À propos"
        image-src="/images/couple-en-recherche_banner.webp"
        image-alt="image de Sylvie Allard"
      />
    </section>
    <section class="px-2 py-20 w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto">
      <article>
          <h2 class="text-center text-2xl md:text-3xl font-semibold pb-10">
              A vos côtés pour concrétiser vos projets immobiliers
          </h2>
        <div class="flex flex-col md:flex-row gap-10">
          <div class="w-full md:w-[60%] lg:w-[70%]">
            <p class="pb-5">
            Depuis 2018, j'ai accompagné des
            <span class="font-semibold">centaines de clients</span> dans leur
            recherche de financement et assurance emprunteur pour leur projet
            d'acquisition immobilière dans toute la France.
            </p>
            <p class="pb-5">
              Avec une écoute attentive, mon but est de trouver la<span
                class="font-semibold"
              >
                solution optimale </span
              >et personnalisée, avec
              <span class="font-semibold"
                >une prise en charge globale du début à la fin du processus</span
              >. Rien ne sera laissé au hasard !
            </p>
            <p class="pb-5">
              Ma disponibilité, ma réactivité, mon expérience et mon expertise vous
              accompagneront dans chaque étape du financement, jusqu'à la remise des
              clés de votre bien.
            </p>
            <p class="pb-5">
              Mon objectif premier : Vous proposer une
              <span class="font-semibold">offre unique</span>, à l'image de votre
              projet.
            </p>
            <p>
              Votre satisfaction sera ma réussite.
            </p>
          </div>
          <div class="flex flex-col mr-5 mt-2 mb-2 float-left w-full md:w-[50%]">
            <img
              src="/images/SA_trophee.webp"
              alt="image de Sylvie Allard avec ses trophées"
              class="rounded-3xl object-cover"
            />
            <p class="text-sm text-center">
              Meilleur courtier France chez Privilège Courtage en 2019 et 2020.
            </p>
          </div>
        </div>
      </article>
    </section>
    <section class="bg-white w-screen">
      <div class="w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto py-20 px-5">
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-center text-2xl md:text-3xl font-semibold pb-20">Mes engagements</h2>
          <div class="flex justify-center w-full">
            <ul class="grid gap-5 md:gap-32 grid-cols-2 lg:grid-cols-3">
              <AdvantageItem
                icon="mdi:clock-fast"
                text="Délais rapides : gestion dans les 24/48h."
              />
              <AdvantageItem icon="mdi:speak" text="Réponse claire, transparence." />
              <AdvantageItem
                icon="mdi:bank"
                text="Des partenaires bancaires sur toute la France."
              />
              <AdvantageItem
                icon="mdi:handshake"
                text="Accompagnement sur mesure."
              />
              <AdvantageItem
                icon="vaadin:piggy-bank-coin"
                text="Gain de temps, gain d’argent."
              />
              <AdvantageItem icon="ri:hand-heart-fill" text="Sérénité assurée." />
            </ul>
          </div>
        </div>
      </div>
      
    </section>
    <section class="py-20">
      <AgendaHome />
    </section>
  </div>
</template>
