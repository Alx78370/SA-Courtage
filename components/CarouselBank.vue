<script setup lang="ts">
import banquePopulaireLogo from '@/assets/logo/banque-populaire-logo.svg'
import bnpParibasLogo from '@/assets/logo/bnp-paribas-logo.svg'
import caisseDepargneLogo from '@/assets/logo/caisse-d-epargne-logo.svg'
import creditAgricoleLogo from '@/assets/logo/credit-agricole-logo.svg'
import creditMutuelLogo from '@/assets/logo/credit-mutuel-logo.svg'
import lclLogo from '@/assets/logo/lcl-logo-bleu-signature.svg'
import laBanquePostaleLogo from '@/assets/logo/logo-la-banque-postale-1.svg'
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
  {
    itemImageSrc: banquePopulaireLogo,
    thumbnailImageSrc: banquePopulaireLogo,
    alt: 'Logo Banque Populaire',
  },
  {
    itemImageSrc: lclLogo,
    thumbnailImageSrc: lclLogo,
    alt: 'Logo LCL',
  },
  {
    itemImageSrc: laBanquePostaleLogo,
    thumbnailImageSrc: laBanquePostaleLogo,
    alt: 'Logo La Banque Postale',
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
      :show-item-navigators="false"
      :show-thumbnails="false"
      :auto-play="true"
      :transition-interval="2000"
    >
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="block w-[80%] lg:w-[40%] xl:w-[30%]">
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
