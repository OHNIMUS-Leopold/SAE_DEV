<template>
    <div>
        <h1 class="text-center text-black font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase my-10">Guide de styles</h1>
    </div>
    <div class="ml-2">
        <h1 class="text-black font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase underline">
            Typographies
        </h1>
        <h1 class="text-black font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase mt-5">
            Heading 1
        </h1>
        <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            (font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase)
        </p>
        <h2 class="text-black font-Poppins font-bold text-[21px] leading-[21px] tracking-normal mt-5">
            Heading 2
        </h2>
        <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            (font-Poppins font-bold text-[21px] leading-[21px] tracking-normal)
        </p>
        <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal mt-5">
            Body
        </p>
        <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            (font-Poppins font-normal text-[15px] leading-[26px] tracking-normal)
        </p>
        <h3 class="text-black font-Poppins font-normal text-xs tracking-normal mt-5">
            Heading 3 (Copyrights Bar)
        </h3>
        <p class="text-black font-Poppins font-normal text-[15px] leading-[26px] tracking-normal">
            (font-Poppins font-normal text-xs tracking-normal)
        </p>
    </div>
    <div class="mt-10 mx-1">
        <h1 class="text-black font-Poppins font-bold text-5xl leading-[3rem] tracking-normal uppercase underline mx-1  mb-5">Couleurs</h1>
        <SquareStyle class="bg-gray mx-1 my-1">#A1A1A1</SquareStyle>
        <SquareStyle class="bg-black mx-1 my-1">#000000</SquareStyle>
        <SquareStyle class="bg-ocean-blue mx-1 my-1">#299BFB</SquareStyle>
        <SquareStyle class="bg-deep-blue mx-1 my-1">#0113FB</SquareStyle>
        <SquareStyle class="bg-orange mx-1 my-1">#FFA827</SquareStyle>
        <SquareStyle class="bg-pink mx-1 my-1">#F964F4</SquareStyle>
        <SquareStyle class="bg-d1 mx-1 my-1">#66CBF7</SquareStyle>
        <SquareStyle class="bg-d2 mx-1 my-1">#D8A6C5</SquareStyle>
        <SquareStyle class="bg-d3 mx-1 my-1">#FDBD74</SquareStyle>
    </div>
</template>

<script>
import SquareStyle from "../components/SquareStyle.vue"

export default {
 components: { SquareStyle },
};
</script>