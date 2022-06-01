<template>
  <div class="mx-80 mt-[72px] mb-[54px]">
    <h1 class="text-ocean-blue text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">un concert avec les blackpink, ça ressemble à ça</h1>
  </div>
  <div class="slider3">
    <div class="slide-track3">
      <div class="slide3">
        <img src="../assets/img/concert/7-BLACKPINK-Encore-Concert-Thailand-July-2019.jpg" alt="image 1">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/bp-the-show.jpg" alt="image 2">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/5f9ab63aac49419eb498199e839e6998.jpg" alt="image 3">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/no1_3461.jpg" alt="image 4">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/3-applewood-BLACKPINK-Concert-Bangkok-Thailand-Day-1-1.jpg" alt="image 5">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide3">
        <img src="../assets/img/concert/7-BLACKPINK-Encore-Concert-Thailand-July-2019.jpg" alt="image 1">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/bp-the-show.jpg" alt="image 2">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/5f9ab63aac49419eb498199e839e6998.jpg" alt="image 3">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/no1_3461.jpg" alt="image 4">
      </div>
      <div class="slide3">
        <img src="../assets/img/concert/3-applewood-BLACKPINK-Concert-Bangkok-Thailand-Day-1-1.jpg" alt="image 5">
      </div>
    </div>
  </div>
  <div class="bg-black rounded-[20px] py-7 px-12 mt-[72px] mb-6 w-max m-auto">
    <h1 class="text-ocean-blue mb-8 text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">Soyez au rendez-vous</h1>
    <div class="grid grid-cols-2 space-x-20">
      <div>
        <div class="flex mb-3">
          <img src="../components/icons/png/calendar-white.png" alt="date" class="h-9 w-9 mr-[18px]">
          <h2 class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal my-auto">Dimanche 21 août</h2>
        </div>
        <div class="flex mb-3">
          <img src="../components/icons/png/alarm-clock-white.png" alt="hour fansign" class="h-9 w-9 mr-[18px]">
          <h2 class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal my-auto">Fansign de 15h30 à 16h30 (KST)</h2>
        </div>
        <div class="flex">
          <img src="../components/icons/png/alarm-clock-white.png" alt="hour concert" class="h-9 w-9 mr-[18px]">
          <h2 class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal my-auto">Concert de 16h30 à 19h30 (KST)</h2>
        </div>
      </div>
      <div class="">
        <RouterLink to="/connexion">
          <div class="flex mb-3">
            <img src="../assets/img/logo/ytb-rouge.png" alt="hour concert" class="h-[68px] w-[68px] mr-[18px]">
            <h2 class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal my-auto">Voir les rediffusions</h2>
          </div>
        </RouterLink>
        <RouterLink to="/festival">
          <div class="flex">
            <img src="../assets/img/logo/rec-rouge.png" alt="hour concert" class="h-[35px] w-[63px] mr-[18px]">
            <h2 class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal my-auto">  Accéder au Live</h2>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="text-center mb-24">
    <RouterLink to="/pageartiste">
      <BoutonBold>Voir l'artiste</BoutonBold>
    </RouterLink>
  </div>
</template>



<script>
import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';
export default {
 name: "App",
 components: { BoutonBold },
};
</script>


<style>

.slider3 {
  height: 596px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track3 {
  display: flex;
  width: calc(1086px * 10);
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1086px * 5));
  }
}

.slide3 {
  height: 596px;
  width: 1086px;
  display: flex;
  align-items: center;
  padding: 15px;
}

img {
  width: 100%;
}

</style>