<template>
  <div>
    <section>
      <AppBanner
        title="Contact"
        image-src="/images/mains-utilisant-un-clavier_banner.webp"
        image-alt="image de mains sur un clavier"
      />
    </section>
    <section class="w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto py-20 px-2">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-center pb-10 text-2xl md:text-3xl font-semibold">
          Vous avez un projet immobilier, des questions ?
        </h2>
        <p class="pb-5">
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
        <ul class="flex flex-col w-full gap-5 pt-5 md:flex-row md:justify-around">
          <ContactItem
            href="tel:+33640960203"
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
      <div class="w-full md:hidden pt-10 md:pt-0">
        <img src="/images/SA_contact.webp" alt="images de Sylvie Allard" class="h-full w-full object-cover rounded-2xl">
      </div>
    </section>
    <section id="form" class=" bg-white">
      <div class="w-screen md:w-[90%] lg:w-[80%] xl:w-2/3 md:mx-auto px-2 py-20">
        <ContactForm />
      </div>
    </section>
  </div>
</template>
