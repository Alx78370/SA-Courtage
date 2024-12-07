<template>
  <div
    class="flex flex-col text-white pb-5 px-5"
  >
    <h1 class="flex flex-col text-4xl font-medium pb-3">
      Sylvie Allard
      <span class="text-lg font-normal">Courtier en prêt immobilier et assurance</span>
    </h1>
    <hr class="pb-3">
    <div class="flex items-center gap-3">
      <Icon name="system-uicons:location" />
      78370, Plaisir
    </div>
    <div class="flex items-center gap-3">
      <Icon name="bi:phone" />
      06 40 96 02 03
    </div>
    <div class="flex items-center gap-3 pb-6">
      <Icon name="lets-icons:e-mail" />
      s.a.courtage@gmail.com
    </div>
    <div class="flex justify-center gap-5">
      <NuxtLink to="/contact" class="flex justify-center items-center bg-blue-600 p-3 rounded-2xl min-w-32">
        Contactez-moi
      </NuxtLink>
      <NuxtLink to="/a-propos" class="flex justify-center items-center bg-slate-100 text-black p-3 rounded-2xl min-w-32">
        En savoir plus
      </NuxtLink>
    </div>
  </div>
</template>
