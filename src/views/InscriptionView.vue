<template>
    <div class="bg-black rounded-[20px] my-24 mx-[92px] pb-12">
        <div class="pt-12 pb-[72px]">
            <h1 class="text-center text-deep-blue font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
                3 Formules possibles 
                <br />
                pour votre venue au festival
            </h1>
        </div>
        <div class="grid grid-cols-3">
            <div>
                <h1 class="text-pink pt-6 pb-10 text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
                    Formule 1
                </h1>
                <h2 class="text-pink text-center font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">
                    Festival en ligne
                    <br /><br />
                    Événements en direct et <br />rediffusions disponibles <br />jusqu’à 3 mois après le <br />festival
                </h2>
                <h1 class="text-white text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase pt-16">
                    29,99€
                </h1>
                <p class="text-white text-center font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
                    Pour un compte sur le site
                </p>
            </div>
            <div class="border-x-[5px] border-deep-blue">
                <h1 class="text-orange pt-6 pb-10 text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
                    Formule 2
                </h1>
                <h2 class="text-orange text-center font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">
                    Festival à Séoul
                    <br /><br />
                    Vivez l’expérience du festival <br />Pop Konnect, assistez aux <br />concerts et rencontrez-y vos <br />artistes préférés !
                </h2>
                <h1 class="text-white text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase pt-16">
                    49,99€
                </h1>
                <p class="text-white text-center font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
                    Pour une personne, réception du billet par e-mail
                </p>
            </div>
            <div>
                <h1 class="text-ocean-blue pt-6 pb-10 text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
                    Formule 3
                </h1>
                <h2 class="text-ocean-blue text-center font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">
                    Festival à Séoul et en ligne
                    <br /><br />
                    Vivez l’expérience du festival <br />Pop Konnect en présentiel et <br />revivez des moments forts avec <br />les rediffusions disponibles <br />jusqu’à 3 mois après le festival
                </h2>
                <h1 class="text-white text-center font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase pt-11">
                    69,99€
                </h1>
                <p class="text-white text-center font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
                    Pour une personne et un compte sur le site, <br />réception du billet par e-mail
                </p>
            </div>
        </div>
    </div>
    <div class="bg-gradient-to-r from-d1 via-d2 to-d3 rounded-[20px] mb-24 mx-[260px]">
    <h1 style="filter:drop-shadow(0px 10px 10px gray)" class="text-white mb-11 text-center pt-12 font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      Formulaire d'inscription
    </h1>
    <form class="flex flex-col font-Poppins text-black font-normal text-[15px] leading-[26px] tracking-normal">
      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="text" id="lname" name="lastname" placeholder="Nom">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="text" id="fname" name="firstname" placeholder="Prénom">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="emailAddress" type="email" name="email" placeholder="Adresse e-mail">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="country" type="country" name="country" placeholder="Pays">

      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
        <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] ml-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="city" type="city" name="city" placeholder="Ville">
        </div>
        <div class="flex flex-col">
        <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mr-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="zipcode" type="zipcode" name="zipcode" placeholder="Code postal">
        </div>
      </div>

      <textarea style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-[114px] rounded-[10px] placeholder:text-black pt-4 pl-6 focus:border-deep-blue" id="adress" name="adress" type="adress" placeholder="Adresse complète"></textarea>

        <div class="grid grid-cols-3 mb-[22px] mx-auto gap-44 text-white font-Poppins font-normal text-base leading-[26px] tracking-normal">
            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule1" name="formule1" v-model="formule" value="formule 1">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule1">Formule 1</label>
            </div>

            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule2" name="formule2" v-model="formule" value="formule 2">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule2">Formule 2</label>
            </div>

            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule3" name="formule3" v-model="formule" value="formule 3">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule3">Formule 3</label>
            </div>
        </div>

      <div v-if="formule !== 'formule 2'" class="contents">
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="username" id="uname" name="username" placeholder="Nom d'utilisateur">
          
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="password" id="password" name="password" placeholder="Mot de passe">
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="password" id="password" name="password" placeholder="Confirmer le mot de passe">
      </div>
        <div class="space-x-4 flex mx-[100px]">
            <input style="filter:drop-shadow(0px 10px 10px gray)" class="my-auto h-7 w-7" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
            <label style="filter:drop-shadow(0px 10px 10px gray)" for="vehicle1"> En cochant cette case, je reconnais avoir pris connaissance des <RouterLink to="/mentionslegales" class="text-deep-blue">Conditions Générales d'Utilisation</RouterLink> du site ainsi que sa <RouterLink to="/mentionslegales" class="text-deep-blue">Politique de Confidentialité</RouterLink> et je les accepte. </label>
        </div>

      <input type="submit" value="S'inscrire" style="filter:drop-shadow(0px 10px 10px gray)" class="text-white uppercase py-2 rounded-[10px] mx-[400px] mt-[22px] mb-12 font-Poppins font-bold text-[15px] leading-[26px] tracking-normal bg-ocean-blue hover:text-black">
      

    </form>
   </div>
</template>





<script>
export default {
    data: function() {
        return {
            formule:"",
        }
    }
}
</script>