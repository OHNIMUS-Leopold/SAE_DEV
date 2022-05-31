<template>
  <div class="grid grid-cols-6">
    <div class="col-span-1 border-gray border-r-2">
      <RouterLink to="/profil">
        <div class="border-gray border-b-2 flex">
          <p class="text-black ml-11 py-5 font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            Profil public          
          </p>
          <img src="../components/icons/png/right-arrow-grey.png" alt="" class="h-9 w-9 my-auto mx-auto">
        </div>
      </RouterLink>
      <RouterLink to="/informations">
        <div class="border-gray border-b-2 flex">
          <p class="text-black ml-11 py-5 font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            Vos informations
          </p>
          <img src="../components/icons/png/right-arrow-grey.png" alt="" class="h-9 w-9 my-auto mx-auto">
        </div>
      </RouterLink>
      <RouterLink to="/festival">
        <div class="border-gray border-b-2 flex">
          <p class="text-black ml-11 py-5 font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            Festival en direct
          </p>
          <img src="../components/icons/png/right-arrow-grey.png" alt="" class="h-9 w-9 my-auto mx-auto">
        </div>
      </RouterLink>
      <RouterLink to="/pagerediffusions">
        <div class="border-gray border-b-2 flex bg-zinc-200">
          <p class="text-black ml-11 py-5 font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            Rediffusions         
          </p>
          <img src="../components/icons/png/right-arrow-grey.png" alt="" class="h-9 w-9 my-auto mx-auto">
        </div>
      </RouterLink>
    </div>
    <div class="col-span-5">
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-2">
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
        <card :nbVues="68415" :nbLikes="65" image="src/assets/img/blackpink/jennie.jpg"/>
      </div>
    </div>
</div>
</template>

<script>
import card from "../components/card.vue"
export default { 
 components: { card },
};
</script>