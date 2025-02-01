<template>
  <div>
    <section>
      <AppBanner
        title="Contact"
        image-src="/images/mains-utilisant-un-clavier_banner.webp"
        image-alt="image de mains sur un clavier"
      />
    </section>
    <section class="px-5 py-10 md:px-10 xl:px-44">
      <div>
        <h2 class="text-center pb-10 text-2xl md:text-3xl font-semibold px-5">
          Vous avez un projet immobilier, des questions ?
        </h2>
        <p class="text-lg md:text-xl pb-5">
          N’attendez plus, prenez un
          <span class="underline font-medium"
            ><a href="#agenda">rendez-vous téléphonique</a></span
          >
          ou complétez le
          <span class="underline font-medium"
            ><a href="#form">formulaire de contact</a></span
          >
          ci-dessous. Faisons de vos envies des réalités !
        </p>
        <ul class="flex flex-col gap-5 pt-5 md:flex-row md:justify-around">
          <ContactItem
            href="tel:+33612345678"
            icon="mdi:phone"
            text="06 40 96 02 03"
          />
          <ContactItem
            href="mailto:s.a.courtage@gmail.com"
            icon="mdi:email"
            text="s.a.courtage@gmail.com"
          />
        </ul>
      </div>
    </section>
    <section id="form" class="px-5 py-10 bg-white">
      <ContactForm />
    </section>
    <section id="agenda" class="py-10">
      <AgendaHome />
    </section>
  </div>
</template>
