<template>
  <div>
    <h1 class="text-ocean-blue text-center mt-[72px] mb-[64px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      Les artistes qui seront présents..
    </h1>
    <div class="p-2">
      <h2 class="text-pink font-Poppins font-bold text-[21px] leading-[21px] tracking-normal pb-3">Des groupes féminins</h2>
      <div class="pb-10 grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,300px))]">
        <card artiste="LOONA" :nbVues="68415" :nbLikes="65" :image="imgLoona"/>
        <card artiste="TWICE" :nbVues="68415" :nbLikes="65" :image="imgTwice"/>
        <RouterLink to="/pageartiste"><card artiste="BLACKPINK" :nbVues="68415" :nbLikes="65" :image="imgBlackpink"/></RouterLink>
      </div>
    </div>
    <div class="grid grid-cols-2">
    <div class="p-2">
      <h2 class="text-orange font-Poppins font-bold text-[21px] leading-[21px] tracking-normal pb-3">Des groupes masculins</h2>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,300px))]">
        <card artiste="Stray Kids" :nbVues="68415" :nbLikes="65" :image="imgStrayKids"/>
        <card artiste="BTS" :nbVues="68415" :nbLikes="65" :image="imgBts"/>
      </div>
    </div>
    <div class="p-2 mb-24">
      <h2 class="text-deep-blue font-Poppins font-bold text-[21px] leading-[21px] tracking-normal pb-3">Et des DJ !</h2>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,300px))]">
        <card artiste="Jennie" :nbVues="68415" :nbLikes="65" :image="imgMati"/>
        <card artiste="Jennie" :nbVues="68415" :nbLikes="65" :image="imgSura"/>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue"
import imgJennie from "../assets/img/blackpink/jennie.jpg?url"
import imgLoona from "../assets/img/grp/f/image4.jpg?url"
import imgTwice from "../assets/img/grp/f/image5.jpg?url"
import imgBlackpink from "../assets/img/grp/f/image6.jpg?url"
import imgStrayKids from "../assets/img/grp/m/straykidsok.jpg?url"
import imgBts from "../assets/img/grp/m/btsok.jpg?url"
import imgMati from "../assets/img/grp/dj/matiok.jpg?url"
import imgSura from "../assets/img/grp/dj/suraok.jpg?url"

export default { 
  data: function() {
return {
imgJennie, imgLoona, imgTwice, imgBlackpink, imgStrayKids, imgBts, imgMati, imgSura,
}
  },
 components: { card },
};
</script>