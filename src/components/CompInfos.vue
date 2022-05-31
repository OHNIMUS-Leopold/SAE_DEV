<template>
    <div class="grid grid-cols-3 border-gray border-b-2 px-28">
        <div class="col-span-1 py-5">
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Nom : {{ Nom }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Prénom : {{ Prenom }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Adresse e-mail : {{ Mail }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Mot de passe : {{ MotDePasse }}</p>
        </div>

        <div class="col-span-1 py-5">
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Pays : {{ Pays }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Ville : {{ Ville }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Code postal : {{ CodePostal }}</p>
            <p class="text-black mb-[10px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">Adresse complète : {{ Adresse }}</p>
        </div>

        <div class="col-span-1 m-auto">
            <BoutonBold>Modifier mes informations</BoutonBold>
        </div>
    </div>
</template>

<script>

import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';

export default {
    components: {  BoutonBold },
    props: {
        Nom: {
            type:String,
            default: "Mon Nom",
        },
        Prenom: {
            type:String,
            default: "Mon Prénom",
        },
        Mail: {
            type:String,
            default: "Mon Adresse e-mail",
        },
        Adresse: {
            type:String,
            default: "Mon Adresse",
        },
        MotDePasse: {
            type:String,
            default: "Mon Mot de passe",
        },
        Ville: {
            type:String,
            default: "Ma Ville",
        },
        Pays: {
            type:String,
            default: "Mon Pays",
        },
        CodePostal: {
            type:String,
            default: "Mon Code postal",
        },
    },
}
</script>