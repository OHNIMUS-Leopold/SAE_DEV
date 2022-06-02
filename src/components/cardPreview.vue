<template>
<div class="p-1">
    <figure class="flex flex-col">
        <img 
        class="w-full h-48 object-cover rounded-t-xl border-2 border-black"
        :src="image" alt="image du groupe">
    </figure>
    <figcaption class="relative flex flex-col py-4 px-5 border-2 border-t-0 rounded-b-lg border-black" v-for='artiste in listePaysSynchro' :key='artiste.id'>
        <input class="font-Poppins font-normal text-[15px] leading-[26px] tracking-normal" v-model='artiste.nom'>
            
    </figcaption>
</div>
</template>

<script>
export default { 
    props: {
        artiste: {
            type:String,
            default: "Artiste",
        },
        image: {
            type:String,
            default: "Image",
        },
    },
};

</script>