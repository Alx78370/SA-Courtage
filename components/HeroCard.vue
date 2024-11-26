<template>
  <div
    class="flex flex-col text-white pb-5 px-5"
  >
    <h1 class="text-4xl font-medium">
      Sylvie Allard
    </h1>
    <h2 class="pb-3">
      Courtière immobilier
    </h2>
    <div class="flex items-center gap-3">
      <Icon name="system-uicons:location" />
      78370, Plaisir
    </div>
    <div class="flex items-center gap-3">
      <Icon name="bi:phone" />
      06.20.30.25.39
    </div>
    <div class="flex items-center gap-3 pb-3">
      <Icon name="lets-icons:e-mail" />
      sylvie.allard23@gmail.com
    </div>
    <div class="flex gap-5">
      <NuxtLink to="/contact" class="flex justify-center items-center bg-blue-400 p-3 rounded-2xl min-w-32">
        Contactez-moi
      </NuxtLink>
      <NuxtLink to="/a-propos" class="flex justify-center items-center bg-white text-black p-3 rounded-2xl min-w-32">
        En savoir plus
      </NuxtLink>
    </div>
  </div>
</template>
