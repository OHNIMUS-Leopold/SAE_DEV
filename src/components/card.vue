<template>
<div class="p-1">
    <figure class="flex flex-col">
        <img 
        class="w-full h-48 object-cover rounded-t-xl border-2 border-black"
        :src="image" alt="image du groupe">
    </figure>
    <figcaption class="relative flex flex-col py-4 px-5 border-2 border-t-0 rounded-b-lg border-black">
        <p class="font-Poppins font-normal text-[15px] leading-[26px] tracking-normal" >
            {{ artiste }}
        </p>
        <div class="flex flex-row justify-between font-Poppins">
            <div class="w-max">
                <vues class="inline-block h-7 w-7 mr-1"/>
                <span class="font-Poppins font-normal text-xs tracking-normal text-black">{{ nbVues }} Vues</span>
            </div>
            <div class="w-max">
                <likes class="inline-block h-7 w-7 mr-1"/>
                <span class="font-Poppins font-normal text-xs tracking-normal text-black">{{ nbLikes }} Likes</span>
            </div>
        </div>
    </figcaption>
</div>
</template>

<script>
import vues from "../components/icons_compo/vues.vue"
import likes from "../components/icons_compo/likes.vue"
export default { 
    props: {
        nbVues: {
            type:Number,
            default: 0,
        },
        nbLikes: {
            type:Number,
            default: 0,
        },
        artiste: {
            type:String,
            default: "Artiste",
        },
        image: {
            type:String,
            default: "Image",
        },
    },
 components: { vues, likes },
};

</script>