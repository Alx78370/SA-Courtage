<script setup lang="ts">
import coupleEnRecherche from "@/assets/images/couple-en-recherche_banner.png";
import fakeTrophée from "@/assets/images/fake-trophée.webp";
</script>

<template>
  <div>
    <section>
      <AppBanner
        title="À propos"
        :image-src="coupleEnRecherche"
        image-alt="image de Sylvie Allard"
      />
    </section>
    <section class="px-5 py-10 md:mx-10 xl:px-44">
      <article class="text-lg md:text-xl">
        <p class="pb-5">
          Depuis 2018, j'ai accompagné des
          <span class="font-semibold">centaines de clients</span> dans leur
          recherche de financement et assurance emprunteur pour leur projet
          d'acquisition immobilière dans toute la France.
        </p>
        <div class="flex flex-col w-44 h-52 sm:w-56 sm:h-56 float-left mr-5 mt-2 mb-2">
          <img
            :src="fakeTrophée"
            alt="image de Sylvie Allard avec ses trophées"
            class="rounded-3xl w-44 h-44 object-cover md:w-56 md:h-56"
          />
          <p class="text-xs sm:text-sm text-center">
            Meilleur courtier France chez Privilège Courtage en 2019 et 2020.
          </p>
        </div>
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
      </article>
    </section>
    <section class="px-5 py-10 bg-white md:px-10 xl:px-44">
      <h2 class="text-center text-2xl md:text-3xl font-semibold px-5 pb-10">Mes engagements</h2>
      <div class="flex justify-center py-10">
        <ul class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        <AdvantageItem
          icon="mdi:clock-fast"
          text="Délais rapides : gestion dans les 24/48h pour l’étude de la capacité d’emprunt."
        />
        <AdvantageItem icon="mdi:speak" text="Réponse claire, transparence." />
        <AdvantageItem
          icon="mdi:bank"
          text="Recherche de la meilleure offre grâce à mes partenaires bancaires sur toute la France."
        />
        <AdvantageItem
          icon="mdi:handshake"
          text="Accompagnement à chaque étape du processus."
        />
        <AdvantageItem
          icon="vaadin:piggy-bank-coin"
          text="Gain de temps, gain d’argent."
        />
        <AdvantageItem icon="ri:hand-heart-fill" text="Sérénité assurée." />
      </ul>
      </div>
    </section>
    <section class="py-10">
      <AgendaHome />
    </section>
  </div>
</template>
