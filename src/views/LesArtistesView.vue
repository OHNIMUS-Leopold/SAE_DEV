<template>
<div>
  <h1 class="text-ocean-blue text-center mt-[72px] mb-[64px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
    Les artistes qui seront présents..
  </h1>
</div>
<div class="grid grid-cols-3">
  <div class="slider2">
    <div class="slide-track2">
      <div class="slide2">
        <img src="../assets/img/grp/f/loona.jpg" alt="loona">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/f/twice.jpg" alt="twice">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/f/blackpink.jpg" alt="blackpink">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide2">
        <img src="../assets/img/grp/f/loona.jpg" alt="loona">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/f/twice.jpg" alt="twice">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/f/blackpink.jpg" alt="blackpink">
      </div>
    </div>
  </div>
    <div class="slider2">
    <div class="slide-track2">
      <div class="slide2">
        <img src="../assets/img/grp/m/straykids.jpg" alt="straykids">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/m/bts.jpg" alt="bts">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide2">
        <img src="../assets/img/grp/m/straykids.jpg" alt="straykids">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/m/bts.jpg" alt="bts">
      </div>
    </div>
  </div>
    <div class="slider2">
    <div class="slide-track2">
      <div class="slide2">
        <img src="../assets/img/grp/dj/mati.jpg" alt="djmati">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/dj/sura.jpg" alt="djsura">
      </div>

    <!--SLIDES DOUBLEES-->

      <div class="slide2">
        <img src="../assets/img/grp/dj/mati.jpg" alt="djmati">
      </div>
      <div class="slide2">
        <img src="../assets/img/grp/dj/sura.jpg" alt="djsura">
      </div>
    </div>
  </div>
</div>
</template>

<style>

.slider2 {
  height: 162px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track2 {
  display: flex;
  width: calc(242px * 6);
  animation: scroll 80s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1086px * 5));
  }
}

.slide2 {
  height: 162px;
  width: 242px;
  display: flex;
  align-items: center;
  padding: 15px;
}

img {
  width: 100%;
}

</style>

