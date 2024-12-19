<script setup lang="ts">
import banquePopulaireLogo from "@/assets/logo/banque-populaire-logo.svg";
import bnpParibasLogo from "@/assets/logo/bnp-paribas-logo.svg";
import caisseDepargneLogo from "@/assets/logo/caisse-d-epargne-logo.svg";
import creditAgricoleLogo from "@/assets/logo/credit-agricole-logo.svg";
import creditMutuelLogo from "@/assets/logo/credit-mutuel-logo.svg";
import lclLogo from "@/assets/logo/lcl-logo-bleu-signature.svg";
import laBanquePostaleLogo from "@/assets/logo/logo-la-banque-postale-1.svg";
import societeGeneraleLogo from "@/assets/logo/societe-generale-logo.svg";

const images = ref([
  {
    itemImageSrc: societeGeneraleLogo,
    thumbnailImageSrc: societeGeneraleLogo,
    alt: "Logo Société Générale",
  },
  {
    itemImageSrc: creditAgricoleLogo,
    thumbnailImageSrc: creditAgricoleLogo,
    alt: "Logo Crédit Agricole",
  },
  {
    itemImageSrc: bnpParibasLogo,
    thumbnailImageSrc: bnpParibasLogo,
    alt: "Logo BNP Paribas",
  },
  {
    itemImageSrc: caisseDepargneLogo,
    thumbnailImageSrc: caisseDepargneLogo,
    alt: "Logo Caisse d'Épargne",
  },
  {
    itemImageSrc: creditMutuelLogo,
    thumbnailImageSrc: creditMutuelLogo,
    alt: "Logo Crédit Mutuel",
  },
  {
    itemImageSrc: banquePopulaireLogo,
    thumbnailImageSrc: banquePopulaireLogo,
    alt: "Logo Banque Populaire",
  },
  {
    itemImageSrc: lclLogo,
    thumbnailImageSrc: lclLogo,
    alt: "Logo LCL",
  },
  {
    itemImageSrc: laBanquePostaleLogo,
    thumbnailImageSrc: laBanquePostaleLogo,
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
          class="md:px-10 xl:px-20"
        />
      </template>
    </Carousel>
  </div>
</template>
