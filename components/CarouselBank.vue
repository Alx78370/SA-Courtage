<script setup lang="ts">
import bnpParibasLogo from '@/assets/logo/bnp-paribas-logo.svg'
import caisseDepargneLogo from '@/assets/logo/caisse-d-epargne-logo.svg'
import creditAgricoleLogo from '@/assets/logo/credit-agricole-logo.svg'
import creditMutuelLogo from '@/assets/logo/credit-mutuel-logo.svg'
import societeGeneraleLogo from '@/assets/logo/societe-generale-logo.svg'

const images = ref([
  {
    itemImageSrc: societeGeneraleLogo,
    thumbnailImageSrc: societeGeneraleLogo,
    alt: 'Logo Société Générale',
  },
  {
    itemImageSrc: creditAgricoleLogo,
    thumbnailImageSrc: creditAgricoleLogo,
    alt: 'Logo Crédit Agricole',
  },
  {
    itemImageSrc: bnpParibasLogo,
    thumbnailImageSrc: bnpParibasLogo,
    alt: 'Logo BNP Paribas',
  },
  {
    itemImageSrc: caisseDepargneLogo,
    thumbnailImageSrc: caisseDepargneLogo,
    alt: 'Logo Caisse d\'Épargne',
  },
  {
    itemImageSrc: creditMutuelLogo,
    thumbnailImageSrc: creditMutuelLogo,
    alt: 'Logo Crédit Mutuel',
  },
])

const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4,
  },
  {
    breakpoint: '767px',
    numVisible: 3,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])
</script>

<template>
  <div class="card">
    <Galleria
      id="fixed-galleria-id"
      :value="images"
      :responsive-options="responsiveOptions"
      :num-visible="5"
      :circular="true"
      container-style="max-width: 640px"
      :show-item-navigators="true"
      :show-thumbnails="false"
      :auto-play="true"
      :transition-interval="2000"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 80%; display: block;">
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;">
      </template>
    </Galleria>
  </div>
</template>

<style>
.p-galleria {
  border: none !important;
}
</style>
