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
    itemImageSrc: "/logo/bnp-paribas-logo.svg",
    thumbnailImageSrc: "/logo/bnp-paribas-logo.svg",
    alt: "Logo BNP Paribas",
  },
  {
    itemImageSrc: "/logo/caisse-d-epargne-logo.svg",
    thumbnailImageSrc: "/logo/caisse-d-epargne-logo.svg",
    alt: "Logo Caisse d'Épargne",
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
    itemImageSrc: "/logo/credit-mutuel-logo.svg",
    thumbnailImageSrc: "/logo/credit-mutuel-logo.svg",
    alt: "Logo LCL",
  },
  {
    itemImageSrc: "/logo/logo-la-banque-postale-1.svg",
    thumbnailImageSrc: "/logo/logo-la-banque-postale-1.svg",
    alt: "Logo La Banque Postale",
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
  <div>
    <Carousel
      :value="images"
      :num-visible="4"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      :autoplay-interval="3000"
      :show-item-navigators="false"
      :show-navigators="false"
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
