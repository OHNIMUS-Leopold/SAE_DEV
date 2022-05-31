<template>
    <div class="my-24 text-center">
        <h2 class="text-deep-blue font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">
            Erreur 404
        </h2>
        <h1 class="text-orange mt-[34px] font-Poppins font-bold text-5xl leading-[3rem] tracking-normal">
            Page non trouvée !
        </h1>
        <h2 class="text-pink mt-12 font-Poppins font-bold text-[21px] leading-[21px] tracking-normal">
            Nous n'arrivons pas à trouver la page que vous recherchez.
        </h2>
        <p class="text-black mt-[14px] font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            Il se peut que l'URL saisie soit mal orthographiée ou que la page que vous recherchez n'existe plus.
        </p>
        <RouterLink to="/"><BoutonBold class="mt-[14px]">Revenir à l'accuiel</BoutonBold></RouterLink>
    </div>
</template>

<script>
import BoutonBold from "../components/BoutonBold.vue"
import { computed } from '@vue/runtime-core';
export default {
 name: "Page404",
 components: {  BoutonBold },
};
</script>