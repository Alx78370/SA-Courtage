<template>
  <div class="relative h-section w-screen">
    <img
      src="../assets/images/hero-fake.webp"
      alt="Image hero"
      class="absolute top-0 left-0 h-section w-full object-cover shadow-xl"
    />
    <div
      class="absolute p-5 top-0 left-0 bg-gradient-to-t from-[#0f172a00] via-[#0f172a7b] to-[#0f172aa9] w-screen text-white pb-5 px-5 md:items-center flex flex-col"
    >
      <h1
        class="flex flex-col text-4xl font-medium pb-3 md:items-center lg:text-5xl sm:border-b-2"
      >
        Sylvie Allard
        <span class="text-lg font-normal lg:text-2xl pt-1">
          Courtier en prêt immobilier et assurance
        </span>
      </h1>
      <hr class="pb-3" />
      <div class="flex flex-col lg:text-lg">
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
      </div>

      <div class="flex justify-center gap-5">
        <NuxtLink
          to="/contact"
          class="flex justify-center items-center bg-blue-600 font-semibold p-3 rounded-2xl min-w-32 lg:text-lg transition-all delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-blue-700"
        >
          Contactez-moi
        </NuxtLink>
        <NuxtLink
          to="/a-propos"
          class="flex justify-center items-center bg-slate-100 text-black font-semibold p-3 rounded-2xl min-w-32 lg:text-lg transition-all delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-slate-200"
        >
          En savoir plus
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
