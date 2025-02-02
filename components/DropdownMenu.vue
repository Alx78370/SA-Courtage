<script setup lang="ts">
import { useRoute } from "vue-router";

const isDropdownOpen = ref(false);
const emit = defineEmits(["closeDropdown", "update:isDropdownOpen"]);
const route = useRoute();

function closeDropdown() {
  isDropdownOpen.value = false;
  emit("update:isDropdownOpen", isDropdownOpen.value);
  emit("closeDropdown");
}
</script>

<template>
  <ul
    class="absolute w-full md:top-[62px] bg-[#f1f5f9e4] rounded-b-lg md:w-[350px] lg:w-[400px] px-4 md:pb-4 z-50 md:shadow-lg"
  >
    <li>
      <NuxtLink
        to="/credit-immobilier/pret-residence-principale-ou-secondaire"
        :class="{
          'font-bold':
            route.path ===
            '/credit-immobilier/pret-residence-principale-ou-secondaire',
        }"
        class="list-item py-2 hover:bg-[#d6d9dde4]"
        @click="closeDropdown"
      >
        <div class="flex items-center gap-2">
          <Icon name="iconamoon:arrow-right-2-duotone" /> Résidence principale
          ou secondaire
        </div>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/credit-immobilier/pret-investissement-locatif"
        :class="{
          'font-bold':
            route.path === '/credit-immobilier/pret-investissement-locatif',
        }"
        class="list-item py-2 hover:bg-[#d6d9dde4]"
        @click="closeDropdown"
      >
        <div class="flex items-center gap-2">
          <Icon name="iconamoon:arrow-right-2-duotone" /> Investissement
          locatif
        </div>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/credit-immobilier/rachat-soulte"
        :class="{
          'font-bold': route.path === '/credit-immobilier/rachat-soulte',
        }"
        class="list-item py-2 hover:bg-[#d6d9dde4]"
        @click="closeDropdown"
      >
        <div class="flex items-center gap-2">
          <Icon name="iconamoon:arrow-right-2-duotone" /> Rachat de soulte
        </div>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/credit-immobilier/rachat-credit"
        :class="{
          'font-bold': route.path === '/credit-immobilier/rachat-credit',
        }"
        class="list-item pt-2 pb-3 border-b-2 md:border-b-0 hover:bg-[#d6d9dde4]"
        @click="closeDropdown"
      >
        <div class="flex items-center gap-2">
          <Icon name="iconamoon:arrow-right-2-duotone" /> Rachat de crédit
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
