<template>
  <div class="relative h-section w-screen">
    <img
      src="/images/SA_hero_cover.webp"
      alt="Image hero"
      class="absolute top-0 left-0 h-section w-full object-cover"
    />
    <div
      class="absolute py-2 px-2 md:py-5 md:px-5 md:pr-10 w-screen text-white items-end flex flex-col"
    >
      <div class="flex flex-col items-center text-gray-800 bg-[#f1f5f9bd] rounded-2xl p-2 md:p-10">
        <h1
          class="flex flex-col text-2xl font-semibold md:items-center lg:text-6xl"
        >
          Sylvie Allard
        </h1>
        <h2 class="text-lg text-center lg:text-xl pt-1 font-semibold pb-3 border-b-2 border-gray-400">
          Courtier en prêt immobilier et assurance
        </h2>
        <div class="flex flex-col items-start pt-3">
          <div class="flex flex-col mx-auto">
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
              class="flex justify-center items-center bg-blue-600 font-semibold p-3 rounded-2xl w-fit md:text-xl transition-all delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 text-white"
            >
              Contactez-moi
            </NuxtLink>
            <NuxtLink
              to="/a-propos"
              class="flex justify-center items-center bg-slate-100 text-gray-800 border-2 font-semibold p-3 rounded-2xl w-fit md:text-xl transition-all delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-slate-200"
            >
              En savoir plus
            </NuxtLink>
          </div>
      </div>
    </div>
      
    </div>
  </div>
</template>
