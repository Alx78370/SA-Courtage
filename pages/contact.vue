<template>
  <div>
    <section>
      <AppBanner
        title="Contact"
        image-src="/images/mains-utilisant-un-clavier_banner.webp"
        image-alt="image de mains sur un clavier"
      />
    </section>
    <section class="lg:h-sectionlg xl:h-sectionxl flex flex-col justify-center items-center">
      <div class="w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto py-20 px-5">
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
    <section id="form" class=" bg-white">
      <div class="w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto px-5 py-20">
        <ContactForm />
      </div>
    </section>
    <section id="agenda" class="py-20">
      <AgendaHome />
    </section>
  </div>
</template>
