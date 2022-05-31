<template>
    <div class="grid grid-cols-3 border-gray border-b-2">
        <div class="col-span-2">

        </div>
        <div class="col-span-1">

        </div>
    </div>
</template>

<script>
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
}
</script>