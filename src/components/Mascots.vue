<template>
    <div class="container">
        <div class="close-x" @click="mascotsActive()">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
        </div>
        <div v-for="image in images" :key="image.src" @click="currentZIndex++, image.zIndex = currentZIndex, testing(image.zIndex)">
            <MascotsOne :imageData="image"/>
        </div>

    </div>
</template>

<script>
import MascotsOne from "./MascotsOne.vue"
// !!!!!!!!!!!!!!!!!!!!!!!!! LOOK HERE !!!!!!!!!!!!!!!!!!!!!!
// z-index ändras antagligen inte PGA det inte defineras i arrayn från början...
export default {
    name: "Mascots",
    props: ["mascotsActive"],
    components: {
        MascotsOne,
    },
    data() {
        return {
            images: [],
            currentZIndex: 0,
        }
        
    },
    async created() {
        // PUTTING ALL IMPORTED IMAGES INTO "IMAGES" ARRAY
        this.images = await this.importAll(require.context('../assets/mascots', false, /\.(png|jpe?g|svg)$/))
        await this.images.forEach(image => {
            image.zIndex = this.currentZIndex;
            console.log(image.zIndex);
        })
    },
    methods: {
        testing(data) {
            console.log(data)
        },
        // IMPORTING ALL IMAGES FROM MASCOTS FOLDER
        importAll(r) {
            let imagesTemp = {}
            r.keys().forEach((item, index) => {
                imagesTemp[item.replace('./', '')] = r(item);
            });
            let imagesArray = Object.keys(imagesTemp).map(image => {let img = new Image(); img.src = require('../assets/mascots/' + image); return img;})

            return imagesArray
        },
    }
}

</script>

<style scoped>
    .container {
        height:100%;
        width:100%;

        position:absolute;
        top:0;
        left:0;
        z-index:2;
        background: rgba(0, 0, 0, 0.397);
    }

    .close-x {
        position: absolute;
        top:40px;
        left:calc(100% - 50px);
        transform: translate(0,-50%);


        height:40px;
        width:40px;

        cursor:pointer;
    }
</style>