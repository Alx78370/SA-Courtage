<script setup lang="ts">
const route = useRoute();
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenuAndDropdown() {
	isMenuOpen.value = false;
}

function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    closeMenuAndDropdown();
  }
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
    ref="menuRef"
    class="fixed z-50 h-20 bg-slate-100 w-screen flex items-center justify-between p-4 lg:py-4 lg:px-10 text-lg lg:text-xl"
  >
    <NuxtLink
      to="/"
      class="text-2xl font-bold text-gray-800"
      @click="closeMenuAndDropdown"
    >
      <img
        src="/Logo_capture_proche.webp"
        alt="Logo"
        class="w-24 h-14 object-cover"
      />
    </NuxtLink>
    <div>
      <BurgerMenu @click="toggleMenu"  />
    </div>
    <ul
      
      :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen, }"
      class="md:flex md:items-center flex-col md:flex-row absolute md:static top-20 left-0 md:top-0 md:left-0 bg-slate-100 md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none z-50"
    >
    <li
        class="relative lg:pr-10 group"
      >
        <button
          :class="{
            'font-bold': [
              '/credit-immobilier/pret-residence-principale-ou-secondaire',
              '/credit-immobilier/pret-investissement-locatif',
              '/credit-immobilier/rachat-soulte',
              '/credit-immobilier/rachat-credit',
            ].includes(route.path),
          }"
          class="flex items-center gap-2 w-full text-gray-800 px-4 p-2 md:py-4 focus:outline-none hover:underline hover:underline-offset-2"
        >
          Crédit immobilier
          <Icon name="iconamoon:arrow-down-2-duotone" class="ml-1" />
        </button>

        <DropdownMenu @close-dropdown="closeMenuAndDropdown" @update:is-dropdown-open="isDropdownOpen = $event" class="hidden top-full mt-[-10px] group-hover:block" />
      </li>
      <li v-if="isDropdownOpen" class="h-[165px]" />
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
  </nav>
</template>
