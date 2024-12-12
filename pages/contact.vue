<script setup lang="ts">
import mainSurClavier from '@/assets/images/mains-utilisant-un-clavier.webp'
</script>

<template>
  <section>
    <Banner title="Contact" :image-src="mainSurClavier" image-alt="image de mains sur un clavier" />
  </section>
  <section class="px-5 py-10">
    <div>
      <h2 class="text-2xl font-medium pb-5">
        Vous avez un projet immobilier, des questions ?
      </h2>
      <p class="text-lg">
        N’attendez plus, prenez un <span class="underline font-medium"><a href="#agenda">rendez-vous téléphonique</a></span> ou complétez le <span class="underline font-medium"><a href="#form">formulaire de contact</a></span> ci-dessous.
        Faisons de vos envies des réalités !
      </p>
      <ul class="flex flex-col gap-5 pt-5">
        <li class="border-2 shadow-md rounded-3xl p-2 bg-white">
          <a href="tel:+33612345678" class="text-lg flex flex-col justify-center items-center">
            <Icon name="mdi:phone" class="text-2xl" />
            06 40 96 02 03
          </a>
        </li>
        <li class="border-2 shadow-md rounded-3xl p-2 bg-white">
          <a href="mailto:s.a.courtage@gmail.com" class="text-lg flex flex-col justify-center items-center">
            <Icon name="mdi:email" class="text-2xl" />
            s.a.courtage@gmail.com
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section id="agenda" class="pb-10">
    <AgendaHome />
  </section>
  <section id="form" class="px-5 py-10 bg-white">
    <ContactForm />
  </section>
</template>
