<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const rootElement = ref()
const options = {
    url: 'https://calendly.com/s-a-courtage/30min', 
    text: 'Prendre rendez-vous', 
}
const navRef = ref<HTMLElement | null>(null);

function handleClickOutside(event: MouseEvent) {
  if (
    isMenuOpen.value && 
    navRef.value && 
    !navRef.value.contains(event.target as Node)
  ) {
    closeMenuAndDropdown();
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenuAndDropdown() {
	isMenuOpen.value = false;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <nav
    ref="navRef"
    class="fixed z-50 h-20 bg-slate-100 w-full flex items-center justify-between p-4 lg:py-4"
  >
      <a
        href="#mainContent"
        class="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-0 focus-visible:left-1/2 focus-visible:text-black p-2">
        Aller au contenu principal
      </a>
    <NuxtLink
      to="/"
      class="text-2xl font-bold text-gray-800"
      @click="closeMenuAndDropdown"
    >
      <img
        src="/Logo_capture_proche.webp"
        alt="SA Courtage logo"
        class="w-24 h-14 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </NuxtLink>
    <ul
      :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen, }"
      class="md:flex md:items-center flex-col md:flex-row absolute md:static top-20 left-0 md:top-0 md:left-0 bg-slate-100 md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none z-50"
    >
    <li
        class="relative lg:pr-10 group"
      >
        <button
          type="button"
          @click="isDropdownOpen = !isDropdownOpen"
          :class="{
            'font-bold': [
              '/credit-immobilier/pret-residence-principale-ou-secondaire',
              '/credit-immobilier/pret-investissement-locatif',
              '/credit-immobilier/rachat-soulte',
              '/credit-immobilier/rachat-credit',
            ].includes(route.path),
          }"
          class="flex items-center gap-2 w-full text-gray-800 px-4 p-2 focus:outline-none hover:underline hover:underline-offset-2 focus-visible:outline-2 focus-visible:outline-black"
        >
          Crédit immobilier
          <Icon name="iconamoon:arrow-down-2-duotone" class="ml-1" />
        </button>

        <DropdownMenu 
          @close-dropdown="closeMenuAndDropdown" 
          @update:is-dropdown-open="isDropdownOpen = $event" 
          :class="[
          isDropdownOpen ? 'block' : 'hidden',
          'absolute top-full mt-[-10px]'
          ]"
        />
      </li>
      <li v-if="isDropdownOpen" class="h-[165px] md:hidden" />
      <li class="lg:pr-10">
        <NuxtLink
          to="/assurance-emprunteur"
          :class="{ 'font-bold': route.path === '/assurance-emprunteur' }"
          class="block px-4 py-2 hover:underline hover:underline-offset-2"
          @click="closeMenuAndDropdown"
        >
          Assurance emprunteur
        </NuxtLink>
      </li>
      <li class="lg:pr-10">
        <NuxtLink
          to="/a-propos"
          :class="{ 'font-bold': route.path === '/a-propos' }"
          class="block px-4 py-2 hover:underline hover:underline-offset-2"
          @click="closeMenuAndDropdown"
        >
          À propos
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact"
          :class="{ 'font-bold': route.path === '/contact' }"
          class="block px-4 py-2 hover:underline hover:underline-offset-2"
          @click="closeMenuAndDropdown"
        >
          Contact
        </NuxtLink>
      </li>
    </ul>
    <div class="hidden sm:block bg-blue-600 font-semibold p-3 rounded-2xl w-fit transition-all delay-75 duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 text-white">
      <CalendlyPopupButton
        v-bind="options"
        :root-element="rootElement"
      />
    </div>
    <div class="absolute top-0" ref="rootElement" />
    <div class="md:hidden">
      <BurgerMenu @click="toggleMenu" />
    </div>
  </nav>
</template>
