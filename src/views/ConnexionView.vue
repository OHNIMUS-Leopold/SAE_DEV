<template>
 <div class="bg-gradient-to-r from-d1 via-d2 to-d3 rounded-[20px] my-[136px] mx-[348px]">
    <h1 style="filter:drop-shadow(0px 10px 10px gray)" class="text-white mb-11 text-center text-sh pt-12 font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      connectez-vous
    </h1>
    <form @submit.prevent="onCnx()" class="flex flex-col font-Poppins text-black font-normal text-[15px] leading-[26px] tracking-normal">
      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="email" id="email" name="email" placeholder="Adresse e-mail" v-model="user.email" required>

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-11 mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="password" type="password" name="password" placeholder="Mot de passe" v-model="user.password" required>

      <!--<RouterLink to="/profil" class="contents">--><input type="submit" value="SE CONNECTER" style="filter:drop-shadow(0px 10px 10px gray)" class="text-white uppercase rounded-[10px] mb-[22px] font-Poppins font-bold text-[15px] leading-[26px] mx-[270px] py-3 tracking-normal bg-ocean-blue hover:text-black"><!--</RouterLink>-->
    
    <div class="flex justify-center">
      <p class="text-white font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Pas de compte ? Commandez votre billet et inscrivez-vous</p>
      <RouterLink to="/inscription"><p class="text-deep-blue font-Poppins font-normal text-[15px] leading-[26px] tracking-normal"> ici !</p></RouterLink>
    </div>
    <div class="flex justify-center mb-[22px]">
      <button @click="onDcnx()" class="text-deep-blue font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Se déconnecter</button>
    </div>
    <div class="alert alert-warning flex justify-center text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal mb-[22px]" v-if="message!=null" >
      {{ message }}
    </div>
    <div v-if="valeur!=null" class="flex justify-center pb-12">
      <RouterLink to="/profil"><BoutonRond style="filter:drop-shadow(0px 10px 10px gray)">Accéder à ma page de profil</BoutonRond></RouterLink>
    </div>
    </form>
  </div>
</template>

<script>
import BoutonRond from "../components/BoutonRond.vue"



import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import {
    getFirestore,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

    export default {
        data(){
            return{
                user:{
                    email:null,
                    password:null
                },
                message:null,
                valeur:null,
            }
        },

        mounted(){
            let user = getAuth().currentUser;
            if (user){
                this.user = user;
                this.message = "Utilisateur déjà connecté";
                this.valeur = 1;
            }else{
                this.message = "Utilisateur non connecté";
                this.valeur = null;
            }
        },

        methods:{
            onCnx(){
                signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
                .then((response)=>{
                    console.log('Utilisateur connecté', response.user);
                    this.user = response.user;
                    this.message = "Utilisateur connecté";
                    this.valeur = 1;
                    this.$router.replace('profil');
                })
                .catch((error)=>{
                    console.log("Erreur connexion", error);
                    this.message = "Erreur d'authentification";
                    this.valeur = null;
                   
                })
            },
            onDcnx(){
                signOut(getAuth())
                .then((response) =>{
                    this.user = getAuth().currentUser;
                    this.user = {
                        email:null,
                        password:null
                    };
                    console.log("Utilisateur deconnecté ", this.user);
                    this.message = "Utilisateur non connecté";
                    this.valeur = null;
                    this.$router.replace('connexion');
                })
                .catch((error)=>{
                    console.log("Erreur deconnexion", error);
                })
            },
        
        },

  components: { BoutonRond },

    }


</script>