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
  <div class="bg-black rounded-[20px]">
  </div>
</template>


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