<script setup lang="ts">
const images = ref([
  {
    itemImageSrc: "/logo/societe-generale-logo.svg",
    thumbnailImageSrc: "/logo/societe-generale-logo.svg",
    alt: "Logo Société Générale",
  },
  {
    itemImageSrc: "/logo/credit-agricole-logo.svg",
    thumbnailImageSrc: "/logo/credit-agricole-logo.svg",
    alt: "Logo Crédit Agricole",
  },
  {
    itemImageSrc: "/logo/la-banque-postale-logo.svg",
    thumbnailImageSrc: "/logo/la-banque-postale-logo.svg",
    alt: "Logo La Banque Postale",
  },
  {
    itemImageSrc: "/logo/bnp-paribas-logo.svg",
    thumbnailImageSrc: "/logo/bnp-paribas-logo.svg",
    alt: "Logo BNP Paribas",
  },
  {
    itemImageSrc: "/logo/CIC-logo.svg",
    thumbnailImageSrc: "/logo/CIC-logo.svg",
    alt: "Logo CIC",
  },
  {
    itemImageSrc: "/logo/caisse-d-epargne-logo.svg",
    thumbnailImageSrc: "/logo/caisse-d-epargne-logo.svg",
    alt: "Logo Caisse d'Épargne",
  },
  {
    itemImageSrc: "/logo/CCF-logo.svg",
    thumbnailImageSrc: "/logo/CCF-logo.svg",
    alt: "Logo CCF",
  },
  {
    itemImageSrc: "/logo/bred-logo.svg",
    thumbnailImageSrc: "/logo/bred-logo.svg",
    alt: "Logo Bred",
  },
  {
    itemImageSrc: "/logo/credit-mutuel-logo.svg",
    thumbnailImageSrc: "/logo/credit-mutuel-logo.svg",
    alt: "Logo Crédit Mutuel",
  },
  {
    itemImageSrc: "/logo/banque-populaire-logo.svg",
    thumbnailImageSrc: "@/assets/logo/banque-populaire-logo.svg",
    alt: "Logo Banque Populaire",
  },
  {
    itemImageSrc: "/logo/LCL-logo.svg",
    thumbnailImageSrc: "/logo/LCL-logo.svg",
    alt: "Logo LCL",
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: "991px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="flex flex-col gap-20 px-5 md:px-10 xl:px-20">
    <h2 class="text-center pb-5 text-2xl md:text-3xl font-semibold px-5">Un réseau bancaire national avec un accès privilégié</h2>
    <Carousel
      :value="images"
      :num-visible="4"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      :autoplay-interval="2000"
      :show-item-navigators="false"
      :show-navigators="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.data.itemImageSrc"
          :alt="slotProps.data.alt"
          class="px-5 md:px-10 xl:px-20"
        />
      </template>
    </Carousel>
  </div>
</template>
