<script setup lang="ts">
import coupleEnRecherche from '@/assets/images/couple-en-recherche_banner.png'
import fakeTrophée from '@/assets/images/fake-trophée.webp'
</script>

<template>
  <section>
    <Banner title="À propos" :image-src="coupleEnRecherche" image-alt="image de Sylvie Allard" />
  </section>
  <section class="px-5 py-10">
    <article class="text-lg">
      <p class="pb-5">
        Depuis 2018, j'ai accompagné des <span class="font-bold">centaines de clients</span>  dans leur recherche de financement et assurance emprunteur pour leur projet d'acquisition immobilière dans toute la France.
      </p>
      <div class="flex flex-col w-44 h-52 float-left mr-5">
        <img :src="fakeTrophée" alt="image de Sylvie Allard avec ses trophées" class="rounded-3xl w-44 h-44 object-cover">
        <p class="text-xs text-center">
          Meilleur courtier France chez Privilège Courtage en 2019 et 2020.
        </p>
      </div>
      <p class="pb-5">
        Avec une écoute attentive, mon but est de trouver la<span class="font-bold"> solution optimale </span>et personnalisée, avec <span class="font-bold">une prise en charge globale du début à la fin du processus</span>. Rien ne sera laissé au hasard !
      </p>
      <p class="pb-5">
        Ma disponibilité, ma réactivité, mon expérience et mon expertise vous accompagneront dans chaque étape du financement, jusqu'à la remise des clés de votre bien.
      </p>
      <p>
        Mon objectif premier : Vous proposer une <span class="font-bold">offre unique</span>, à l'image de votre projet.
      </p>
    </article>
  </section>
  <section class="px-5 py-10 bg-white">
    <h2 class="text-2xl text-center font-semibold pb-10">
      Mes engagements
    </h2>
    <ul class="flex flex-col justify-between">
      <AdvantageItem
        icon="mdi:clock-fast"
        text="Délais rapides : gestion dans les 24/48h pour l’étude de la capacité d’emprunt."
      />
      <AdvantageItem
        icon="mdi:speak"
        text="Réponse claire, transparence."
      />
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
      <AdvantageItem
        icon="ri:hand-heart-fill"
        text="Sérénité assurée."
      />
    </ul>
  </section>
</template>
