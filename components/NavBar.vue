<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function closeMenuAndDropdown() {
  isMenuOpen.value = false
  isDropdownOpen.value = false
}
</script>

<template>
  <nav class="container mx-auto flex items-center justify-between p-4">
    <NuxtLink
      to="/"
      class="text-2xl font-bold text-gray-800 dark:text-white"
    >
      <img src="../assets/logo/Logo_capture_proche.png" alt="Logo" class="w-24 h-14 object-cover">
    </NuxtLink>
    <div class="lg:hidden">
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
      class="lg:flex lg:items-center lg:space-x-6 flex-col lg:flex-row absolute lg:static top-20 left-0 lg:top-0 lg:left-0 bg-slate-100 lg:bg-transparent w-full lg:w-auto shadow-lg lg:shadow-none z-50"
    >
      <li class="relative">
        <button
          class="flex items-center gap-2 text-gray-800 px-4 py-2 focus:outline-none"
          @click="toggleDropdown"
        >
          Crédit immobilier
          <Icon name="iconamoon:arrow-down-2-duotone" />
        </button>
        <ul
          v-if="isDropdownOpen"
          class="absolute left-0 top-full w-full bg-slate-100 rounded-lg"
        >
          <li>
            <NuxtLink
              to="/credit-immobilier/pret-residence-principale"
              class="list-item px-4 py-2 border-t-2"
              @click="closeMenuAndDropdown"
            >
              <div class="flex items-center gap-2">
                <Icon name="icon-park:dot" />Résidence principale
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/credit-immobilier/pret-residence-secondaire"
              class="list-item px-4 py-2"
              @click="closeMenuAndDropdown"
            >
              <div class="flex items-center gap-2">
                <Icon name="icon-park:dot" />Résidence secondaire
              </div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/credit-immobilier/pret-investissement-locatif"
              class="list-item px-4 pt-2 pb-3 border-b-2"
              @click="closeMenuAndDropdown"
            >
              <div class="flex items-center gap-2">
                <Icon name="icon-park:dot" />Investissement locatif
              </div>
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li v-if="isDropdownOpen" class="h-32" />
      <li>
        <NuxtLink
          to="/assurance-emprunteur"
          class="block px-4 py-2"
          @click="closeMenuAndDropdown"
        >
          Assurance emprunteur
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/regroupement-credits"
          class="block px-4 py-2"
          @click="closeMenuAndDropdown"
        >
          Regroupement de crédits
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/rachat-credits"
          class="block px-4 py-2"
          @click="closeMenuAndDropdown"
        >
          Rachat de crédits
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact"
          class="block px-4 py-2"
          @click="closeMenuAndDropdown"
        >
          Contact
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
