<template>
  
    <!--<h1 class="text-pink font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">Heading 1</h1>
    <h2 class="text-ocean-blue font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">Heading 2</h2>
    <p class="text-orange font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Body</p>
    <h3 class="text-deep-blue font-Poppins font-normal text-xs tracking-normal">Copirights bar</h3>-->
  
  <div>
    <h1 class="text-orange mt-[72px] mb-[34px] text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      venez découvrir le plus<br>grand festival de k-pop au monde
    </h1>
  </div>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="../assets/img/apropos/image 12.jpg" alt="image 1">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 7.jpg" alt="image 2">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 9.jpg" alt="image 3">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 10.jpg" alt="image 4">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 6.jpg" alt="image 5">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide">
        <img src="../assets/img/apropos/image 12.jpg" alt="image 1">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 7.jpg" alt="image 2">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 9.jpg" alt="image 3">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 10.jpg" alt="image 4">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image 6.jpg" alt="image 5">
      </div>
    </div>
  </div>
  <div class="mt-24 mb-[34px]">
    <h1 class="text-pink text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      De nombreux artistes vous attendent
    </h1>
  </div>
  <div class="flex justify-center">
    <img src="../assets/img/apropos/accueil.jpg" alt="Accueil">
  </div>
  <div class="flex justify-center">
    <RouterLink to="/programmation"><BoutonBold class="mt-[34px] mb-24">Voir la programmation</BoutonBold></RouterLink>
  </div>
</template>

<script>
import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';
export default {
 name: "Accueil",
 components: {  BoutonBold },
};
</script>


<style>

.slider {
  height: 596px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track {
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

.slide {
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