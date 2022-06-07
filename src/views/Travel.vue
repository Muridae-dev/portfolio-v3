<template>
    <div v-for="image in images" :key="image.width" style="height:auto; width:auto; float:left;">
        <img :src="image.src" :style=" windowWidth > 1300 ? {'height' : '500px', 'width' :'auto'} : {'height' : 'auto', 'width' : '90%'}"/>
    </div>
</template>

<script>
export default {
    name: "Travel",
    data() {
        return {
            images: [],
            imagesWide: [],
            imagesSquare: [],
            imagesPortrait: [],
            windowWidth: window.innerWidth,
        }
    },
    async created() {
        this.images = await this.importAll(require.context('../assets/travel', false, /\.(png|jpe?g|svg)$/))
        await this.images.forEach(image => {
            let diff = image.width/image.height;
            if(diff < 0.76) {this.imagesPortrait.push(image)}
            if(diff >= 0.76 && diff < 1.25) {this.imagesSquare.push(image)}
            if(diff >= 1.25) {this.imagesWide.push(image)}
        })
    },
    methods: {
        importAll(r) {
            let imagesTemp = {}
            r.keys().forEach((item, index) => {
                imagesTemp[item.replace('./', '')] = r(item);
            });
            let imagesArray = Object.keys(imagesTemp).map(image => {let img = new Image(); img.src = require('../assets/travel/' + image); return img;})

            console.log(imagesArray)


            imagesArray.forEach(image => {
                image.onload = () => {
                    

                    
                }
                
            });

            return imagesArray
        }
    }
}
</script>

<style scoped>
</style>