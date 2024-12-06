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
      N'hésitez pas à me contacter soit en prenant un rendez-vous téléphonique avec moi ou en remplissant le formulaire de contact ci-dessous. Je vous répondrai dans les plus brefs délais.
    </p>
    </div>
    
  </section>
  <section class="px-5 pb-10">
    <AgendaHome />
  </section>
  <section class="px-5 pb-10">
    <ContactForm />
  </section>
</template>
