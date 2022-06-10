<template>
    <div class="background-container">
        <div class="background-darkener">

        </div>
        <img src="../assets/background/static3.gif" class="gif-image" style="opacity:0.1;"/>
    
        <img src="../assets/background/static16.gif" class="gif-image" />
    </div>
</template>

<script>
export default {
    name: "Background",
    async created() {
        // PUTTING ALL IMPORTED IMAGES INTO "IMAGES" ARRAY
        this.images = await this.importAll(require.context('../assets/background', false, /\.(png|jpe?g|svg)$/))
        await this.images.forEach(image => {
            image.zIndex = this.currentZIndex;
            //console.log(image.zIndex);
        })
    },
    methods: {
        testing(data) {
            //console.log(data)
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
    .background-container {
        height:100%;
        width:100%;
        
        position:absolute;
        top:0;
        left:0;
        z-index: -10;

        overflow-y:hidden;
    }

    .background-darkener {
        height:100%;
        width:100%;

        z-index:2;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,1) 100%);


        position:absolute;
        top:0;
        left:0;
    }

    .background-image {
        height:auto;
        width:100%;

        z-index:0;
        opacity:0.8;

        position:absolute;
        top:0%;
        left:50%;
        transform:translate(-50%,0);
    }

    .gif-image {
        height:100%;
        width:100%;

        opacity:0.1;
        z-index:1;

        position:absolute;
        top:0;
        left:0;
    }
</style>