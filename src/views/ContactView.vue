<template>
  <div class="grid grid-cols-2 my-24">
    <div class="mt-[167px]">
      <h1 class="text-orange font-Poppins text-center font-bold text-5xl leading-[3rem] tracking-normal uppercase">
        Nous trouver...
      </h1>
      <div class="grid grid-cols-2 mt-[66px] mb-[34px]">
        <div>
          <h2 class="text-ocean-blue font-Poppins text-center font-bold text-[21px] leading-[21px] tracking-normal">
            Notre adresse
          </h2>
          <p class="text-black text-center mt-[14px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            424 Olympic-ro, Songpa-gu
            <br/>
            Parc Olympique de Séoul
            <br/>
            Corée du Sud
          </p>
        </div>
        <div>
          <h2 class="text-pink font-Poppins text-center font-bold text-[21px] leading-[21px] tracking-normal">
            Notre téléphone
          </h2>
          <p class="text-black text-center mt-[14px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            (+82) (8) 29 66 43 54
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-deep-blue font-Poppins text-center font-bold text-[21px] leading-[21px] tracking-normal">
          Notre e-mail
        </h2>
        <p class="text-black text-center mt-[14px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            contact@pop-konnect.com
          </p>
      </div>
    </div>
    <div class="mr-[92px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6537.859686363845!2d127.12325435468014!3d37.518769016469776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf8af3895a03%3A0x3b6ac5d5d4ff9a9a!2sOlympic%20Gymnastics%20Arena%20(KSPO%20Dome)!5e0!3m2!1sfr!2sfr!4v1654260395991!5m2!1sfr!2sfr" width="671" height="671" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-[20px]"></iframe>
    </div>
  </div>

  <div class="bg-gradient-to-r from-d1 via-d2 to-d3 rounded-[20px] mb-24 mx-[92px]">
    <h1 style="filter:drop-shadow(0px 10px 10px gray)" class="text-white mb-11 text-center pt-12 font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      Contactez-nous
    </h1>
    <form class="flex flex-col font-Poppins text-black font-normal text-[15px] leading-[26px] tracking-normal">
      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="text" id="fname" name="firstname" placeholder="Votre nom">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="emailAddress" type="email" name="email" placeholder="Votre email">

      <textarea style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mx-[74px] h-[300px] rounded-[10px] placeholder:text-black pt-4 pl-6 focus:border-deep-blue" id="subject" name="subject" type="message" placeholder="Votre message"></textarea>

      <input type="submit" value="ENVOYER" style="filter:drop-shadow(0px 10px 10px gray)" class="text-white uppercase py-2 rounded-[10px] mx-[600px] my-11 font-Poppins font-bold text-[15px] leading-[26px] tracking-normal bg-ocean-blue hover:text-black">
    </form>
  </div>
</template>
