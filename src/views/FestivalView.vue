<template>
  <div>
   <h1 class="text-ocean-blue text-center mt-[72px] mb-[34px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
     Festival en direct
   </h1>
  </div>
    <div class="flex justify-center">
    <RouterLink to="/connexion"><BoutonBold class="mt-5">SE CONNECTER POUR ACCEDER AU LIVE</BoutonBold></RouterLink>
  </div>
  <div class="mx-[92px] mb-24">
    <h1 class="text-deep-blue text-center mt-24 mb-[34px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      a propos du festival
    </h1>
    <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
      Depuis ses débuts en 2020, Pop Konnect est devenu un véritable lieu de pèlerinage, qui voit chaque année des milliers de fans de K-pop envahir Parc Olympique de Séoul, en Corée du Sud, pour s'immerger dans des musiques rythmées et entraînantes.
      <br/><br/>
      Si l'essentiel reste la musique et la rencontre fans-artistes, Pop Konnect est aussi connu pour son haut niveau de production, un staff impressionnant et une équipe technique spécialisée sont présents pour répondre à tous les besoins. C'est cette atmosphère de rêve et d'irréalité, qui séduit des fans du monde entier. 
      L’ampleur est telle, que le festival est diffusé en direct pour les fans qui ne peuvent pas se déplacer.
    </p>
  </div>
  <div>
    <h1 class="text-orange text-center mb-[34px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      quelques images du festival
    </h1>
  </div>
  <div class="slider mb-24">
    <div class="slide-track">
      <div class="slide">
        <img src="../assets/img/apropos/image12.jpg" alt="image 1">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image7.jpg" alt="image 2">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image9.jpg" alt="image 3">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image10.jpg" alt="image 4">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image6.jpg" alt="image 5">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide">
        <img src="../assets/img/apropos/image12.jpg" alt="image 1">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image7.jpg" alt="image 2">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image9.jpg" alt="image 3">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image10.jpg" alt="image 4">
      </div>
      <div class="slide">
        <img src="../assets/img/apropos/image6.jpg" alt="image 5">
      </div>
    </div>
  </div>
</template>

<script>
import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';
export default {
 name: "App",
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
