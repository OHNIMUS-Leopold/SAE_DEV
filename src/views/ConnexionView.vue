<template>
 <div class="bg-gradient-to-r from-d1 via-d2 to-d3 rounded-[20px] my-[136px] mx-[348px]">
    <h1 style="filter:drop-shadow(0px 10px 10px gray)" class="text-white mb-11 text-center text-sh pt-12 font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      connectez-vous
    </h1>
    <form class="flex flex-col font-Poppins text-black font-normal text-[15px] leading-[26px] tracking-normal">
      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="username" id="uname" name="username" placeholder="Nom d'utilisateur">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-11 mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="password" type="password" name="password" placeholder="Mot de passe">

      <RouterLink to="/profil" class="contents"><input type="submit" value="SE CONNECTER" style="filter:drop-shadow(0px 10px 10px gray)" class="text-white uppercase rounded-[10px] mb-[22px] font-Poppins font-bold text-[15px] leading-[26px] mx-[270px] py-3 tracking-normal bg-ocean-blue hover:text-black"></RouterLink>
    </form>
    <div class="flex justify-center pb-12">
      <p class="text-white font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Pas de compte ? Commandez votre billet et inscrivez-vous</p>
      <RouterLink to="/inscription"><p class="text-ocean-blue font-Poppins font-normal text-[15px] leading-[26px] tracking-normal"> ici !</p></RouterLink>
    </div>
  </div>
</template>

<style>
</style>