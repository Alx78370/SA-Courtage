<template>
  <div
    class="flex flex-col text-white pb-5 px-5"
  >
    <h1 class="text-4xl font-medium">
      Sylvie Allard
    </h1>
    <h2 class="pb-3">
      Courtier en prêt immobilier et assurance
    </h2>
    <hr class="pb-3">
    <div class="flex items-center gap-3">
      <Icon name="system-uicons:location" />
      78370, Plaisir
    </div>
    <div class="flex items-center gap-3">
      <Icon name="bi:phone" />
      06.20.30.25.39
    </div>
    <div class="flex items-center gap-3 pb-6">
      <Icon name="lets-icons:e-mail" />
      s.a.courtage@gmail.com
    </div>
    <div class="flex justify-center gap-5">
      <NuxtLink to="/contact" class="flex justify-center items-center bg-blue-400 p-3 rounded-2xl min-w-32">
        Contactez-moi
      </NuxtLink>
      <NuxtLink to="/" class="flex justify-center items-center bg-slate-100 text-black p-3 rounded-2xl min-w-32">
        En savoir plus
      </NuxtLink>
    </div>
  </div>
</template>
