<script setup lang="ts">
import mainSurClavier from '@/assets/images/mains-utilisant-un-clavier.webp'
</script>

<template>
  <Banner title="Contact" :image-src="mainSurClavier" image-alt="image de mains sur un clavier" />
  <section class="px-5 py-10">
    <AgendaHome />
  </section>
  <section class="px-5 pb-10">
    <ContactForm />
  </section>
</template>
