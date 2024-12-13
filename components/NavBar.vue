<script setup lang="ts">
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const navRef = ref<HTMLElement | null>(null)
const route = useRoute()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenuAndDropdown() {
  isMenuOpen.value = false
}

function handleOutsideClick(event: MouseEvent) {
  if (navRef.value && !navRef.value.contains(event.target as Node)) {
    closeMenuAndDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <nav ref="navRef" class="fixed z-50 h-20 bg-slate-100 w-screen flex items-center justify-between p-4 lg:py-4 lg:px-10 md:text-lg lg:text-xl">
    <NuxtLink
      to="/"
      class="text-2xl font-bold text-gray-800"
      @click="closeMenuAndDropdown"
    >
      <img src="../assets/logo/Logo_capture_proche.png" alt="Logo" class="w-24 h-14 object-cover">
    </NuxtLink>
    <div class="md:hidden">
      <button
        class="text-gray-800 focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    <ul
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="md:flex md:items-center flex-col md:flex-row absolute md:static top-20 left-0 md:top-0 md:left-0 bg-slate-100 md:bg-transparent w-full md:w-auto  shadow-lg md:shadow-none z-50"
    >
      <DropdownMenu @close-dropdown="closeMenuAndDropdown" @update:is-dropdown-open="isDropdownOpen = $event" />
      <li v-if="isDropdownOpen" class="h-[165px]" />
      <li class="lg:pr-10 xl:pr-20">
        <NuxtLink
          to="/assurance-emprunteur"
          :class="{ 'font-bold': route.path === '/assurance-emprunteur' }"
          class="block px-4 py-2 hover:underline hover:underline-offset-2"
          @click="closeMenuAndDropdown"
        >
          Assurance emprunteur
        </NuxtLink>
      </li>
      <li class="lg:pr-10 xl:pr-20">
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
