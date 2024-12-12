<script setup lang="ts">
import { useRoute } from 'vue-router'

const emit = defineEmits(['closeDropdown', 'update:isDropdownOpen'])
const isDropdownOpen = ref(false)
const route = useRoute()
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
  emit('update:isDropdownOpen', isDropdownOpen.value);
}

function closeDropdown() {
  isDropdownOpen.value = false
  emit('update:isDropdownOpen', isDropdownOpen.value);
  emit('closeDropdown')
}
</script>

<template>
  <li class="relative">
    <button
      :class="{ 'font-bold': ['/credit-immobilier/pret-residence-principale-ou-secondaire', '/credit-immobilier/pret-investissement-locatif', '/credit-immobilier/rachat-soulte', '/credit-immobilier/rachat-credit'].includes(route.path) }"
      class="flex items-center gap-2 w-full text-gray-800 px-4 py-2 focus:outline-none hover:underline hover:underline-offset-2"
      @click="toggleDropdown"
    >
      Crédit immobilier
      <Icon v-if="!isDropdownOpen" name="iconamoon:arrow-down-2-duotone" />
        <Icon v-else name="iconamoon:arrow-up-2-duotone" />
    </button>
    <ul
      v-if="isDropdownOpen"
      class="absolute w-full bg-slate-100 rounded-lg md:w-[350px] px-4 md:py-2"
    >
      <li>
        <NuxtLink
          to="/credit-immobilier/pret-residence-principale-ou-secondaire"
          :class="{ 'font-bold': route.path === '/credit-immobilier/pret-residence-principale-ou-secondaire' }"
          class="list-item py-2 hover:bg-slate-200"
          @click="closeDropdown"
        >
          <div class="flex items-center gap-2">
            <Icon name="iconamoon:arrow-right-2-duotone" />Résidence principale ou secondaire
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/credit-immobilier/pret-investissement-locatif"
          :class="{ 'font-bold': route.path === '/credit-immobilier/pret-investissement-locatif' }"
          class="list-item py-2 hover:bg-slate-200"
          @click="closeDropdown"
        >
          <div class="flex items-center gap-2">
            <Icon name="iconamoon:arrow-right-2-duotone" />Investissement locatif
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/credit-immobilier/rachat-soulte"
          :class="{ 'font-bold': route.path === '/credit-immobilier/rachat-soulte' }"
          class="list-item py-2 hover:bg-slate-200"
          @click="closeDropdown"
        >
          <div class="flex items-center gap-2">
            <Icon name="iconamoon:arrow-right-2-duotone" />Rachat de soulte
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/credit-immobilier/rachat-credit"
          :class="{ 'font-bold': route.path === '/credit-immobilier/rachat-credit' }"
          class="list-item pt-2 pb-3 border-b-2 md:border-b-0 hover:bg-slate-200"
          @click="closeDropdown"
        >
          <div class="flex items-center gap-2">
            <Icon name="iconamoon:arrow-right-2-duotone" />Rachat de crédit
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>
