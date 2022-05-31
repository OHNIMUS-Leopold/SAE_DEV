<template>
    <div class="grid grid-cols-3 border-gray border-b-2">
        <div class="col-span-2 ml-28 py-5">
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Nom d'utilisateur : {{ NomUser }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Artistes préférés : {{ ArtistesPref }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Groupes préférés : {{ GroupesPref }}</p>
            <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Bio :</p>
            <div class="border-gray border-2 text-black mb-[10px] font-Poppins font-normal text-xs tracking-normal h-24 px-1">
                <h3></h3>{{ MaBio }}
            </div>
            <div class="text-center">
                <BoutonBold>Modifier mes informations</BoutonBold>
            </div>
        </div>

        <div class="col-span-1 mx-auto my-auto">
            <img :src="ImgProfil" alt="Ma photo de profil" class="mb-[10px] rounded-full">
            <BoutonBold>Modifier ma photo</BoutonBold>
        </div>
    </div>
</template>

<script>

import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';

export default {
    components: {  BoutonBold },
    props: {
        NomUser: {
            type:String,
            default: "Mon Nom d'utilisateur",
        },
        ArtistesPref: {
            type:String,
            default: "Mes Artistes préférés",
        },
        GroupesPref: {
            type:String,
            default: "Mes Groupes préférés",
        },
        MaBio: {
            type:String,
            default: "Ceci est une bio",
        },
        ImgProfil: {
            type:String,
            default: "Moi",
        },
    },
}
</script>