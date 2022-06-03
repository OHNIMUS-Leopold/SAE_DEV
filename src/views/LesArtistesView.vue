<template>
    <div class="mb-24 mx-14">
    <h1 class="text-ocean-blue text-center mt-[72px] mb-[64px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase">
      Les artistes qui seront présents..
    </h1>
    <div class="text-center flex justify-center mb-[22px] space-x-2 text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
      <input v-model="nom" required style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue px-[204px] h-14 rounded-[10px] placeholder:text-black pl-6" id="addartist" type="text" name="addartist" placeholder="Ajouter un artiste">
      <button class="w-10" type="button" title="Création" @click='createArtiste()'><DocumentAddIcon /></button>
    </div>
    <div class="text-center text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
      <input v-model='filter' style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[44px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="filtre" type="search" name="filtrage" placeholder="Filtrer">
    </div>
<div class="grid grid-cols-4">
  
  <div class="p-1 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]" v-for='artiste in filterByName' :key='artiste.id'>
    <figcaption class="relative  py-4 px-5 border-2 rounded-lg border-black" >
      <div class="flex flex-row justify-between items-center">
        <input class="font-Poppins font-bold text-base leading-[26px] tracking-normal" v-model="artiste.nom" required>
        <div class="space-x-1 flex">
          <RouterLink to="/pageartiste" class="contents">
            <div class="w-8 ml-[-32px]">
              <EyeIcon />
            </div>
          </RouterLink>
          <button class="w-8" type="button" title="Modification" @click.prevent="updateArtiste(artiste)">
            <SaveIcon />
          </button>
          <button class="w-8" type="button" title="Suppression" @click.prevent="deleteArtiste(artiste)">
            <TrashIcon />
          </button>
        </div>
      </div>
    </figcaption>
  </div>
  
</div>
    </div>
</template>

<script>
import cardPreview from "../components/cardPreview.vue"
import imgJennie from "../assets/img/blackpink/jennie.jpg?url"
import imgLoona from "../assets/img/grp/f/image4.jpg?url"
import imgTwice from "../assets/img/grp/f/image5.jpg?url"
import imgBlackpink from "../assets/img/grp/f/image6.jpg?url"
import imgStrayKids from "../assets/img/grp/m/straykidsok.jpg?url"
import imgBts from "../assets/img/grp/m/btsok.jpg?url"
import imgMati from "../assets/img/grp/dj/matiok.jpg?url"
import imgSura from "../assets/img/grp/dj/suraok.jpg?url"
import { SearchIcon, SaveIcon, TrashIcon, DocumentAddIcon, EyeIcon } from "@heroicons/vue/outline"



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
      components:{
        SaveIcon, TrashIcon, DocumentAddIcon, EyeIcon
        },
      

        data(){
            return{
                nom:null,
                listeArtisteSynchro:[],
                filter:''
            }
        },

        computed:{
          orderByName:function(){
            return this.listeArtisteSynchro.sort(function(a, b){
              if(a.nom < b.nom) return -1;
              if(a.nom > b.nom) return 1;
              return 0;
            })
          },

          filterByName:function(){
            if(this.filter.length > 0){
              let filter = this.filter.toLowerCase();
              return this.orderByName.filter(function(artiste){
                return artiste.nom.toLowerCase().includes(filter);
              })
            }else{
              return this.orderByName;
            }
          }
        },


        mounted(){
            this.getArtisteSynchro();
        },

        methods:{
            async getArtisteSynchro(){
                const firestore = getFirestore();
                const dbArtiste= collection(firestore, "artiste");
                const query = await onSnapshot(dbArtiste, (snapshot) =>{
                    this.listeArtisteSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                })
            },

            async createArtiste(){
                const firestore = getFirestore();
                const dbArtiste = collection(firestore, "artiste");
                const docRef = await addDoc(dbArtiste,{
                    nom: this.nom
                })
                console.log('document créé avec le id : ', docRef.id);
            },

            async updateArtiste(artiste){
                const firestore = getFirestore();
                const docRef = doc(firestore, "artiste", artiste.id);
                await updateDoc(docRef, {
                    nom: artiste.nom
                })
            },

            async deleteArtiste(artiste){
                const firestore = getFirestore();
                const docRef = doc(firestore, "artiste", artiste.id);
                await deleteDoc(docRef);
            },
        }
      
    }


</script>