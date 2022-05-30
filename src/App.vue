<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="bg-gradient-to-r from-d1 via-d2 to-d3">
      
      <nav class="flex justify-between">
        <RouterLink to="/"><LogoNav class="ml-[33px]"/></RouterLink>
        <!--<RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/concert">Concert</RouterLink>
        <RouterLink to="/pageartiste">Page Artiste</RouterLink>
        <RouterLink to="/mentionslegales">Mentions Légales</RouterLink>-->
        <RouterLink to="/connexion"><img src="./components/icons/user.svg" alt="Connexion" class="my-[23px]"></RouterLink>
        <RouterLink to="/festival" class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal uppercase my-[30px] hover:text-black">Le Festival</RouterLink>
        <RouterLink to="/lesartistes" class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal uppercase my-[30px] hover:text-black">Artistes</RouterLink>
        <RouterLink to="/programmation" class="text-white font-Poppins font-bold text-[21px] leading-[21px] tracking-normal uppercase my-[30px] hover:text-black">Programmation</RouterLink>
        <!--<RouterLink to="/profil">Profil</RouterLink>
        <RouterLink to="/informations">Informations</RouterLink>
        <RouterLink to="/pagerediffusions">Page Rediffusions</RouterLink>
        <RouterLink to="/rediffusion">Rediffusion</RouterLink>-->
        <RouterLink to="/inscription"><BoutonBold class="my-[18px] mr-[49px]">Commandez votre billet</BoutonBold></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="bg-black py-5">
      <h1 class="text-ocean-blue text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">Commandez dès maintenant votre billet !</h1>
      <div class="flex justify-center">
        <RouterLink to="/inscription"><BoutonFin class="mt-5">Commander</BoutonFin></RouterLink>
      </div>
    </div>
    <div class="bg-gradient-to-r from-d1 via-d2 to-d3 ">
      <section class="flex justify-center pt-7 pb-5 space-x-4">
        <a href="https://www.facebook.com/"><img src="./components/icons/facebook.svg" alt="Facebook"></a>
        <a href="https://www.twitter.com/"><img src="./components/icons/twitter.svg" alt="Twitter"></a>
        <a href="https://www.instagram.com/"><img src="./components/icons/instagram.svg" alt="Instagram"></a>
        <a href="https://www.youtube.com/"><img src="./components/icons/youtube.svg" alt="Youtube"></a>
      </section>
      <section class="flex justify-center space-x-1 pb-5">
        <span>
          <nav>
            <RouterLink to="/contact" class="text-white font-Poppins font-normal text-[15px] leading-[26px] tracking-normal uppercase">Contactez-nous</RouterLink>
          </nav>
        </span>
        <span>
          <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal uppercase">|</p>
        </span>
        <span>
          <nav>
            <RouterLink to="/mentionslegales" class="text-white font-Poppins font-normal text-[15px] leading-[26px] tracking-normal uppercase">Mentions légales</RouterLink>
          </nav>
        </span>
      </section>
    </div>
    <div class="bg-black flex justify-center py-[14px]">
      <h3 class="text-white font-Poppins font-normal text-xs tracking-normal">
        Copyright © 2022. All Rights Reserved.
      </h3>
    </div>
  </footer>
</template>

<script>
import BoutonFin from "./components/BoutonFin.vue"
import BoutonBold from "./components/BoutonBold.vue"
import LogoNav from "./components/LogoNav.vue"
import { computed } from '@vue/runtime-core';
export default {
 name: "App",
 components: { BoutonFin, BoutonBold, LogoNav },
};
</script>