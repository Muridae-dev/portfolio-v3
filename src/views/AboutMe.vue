<template>
    <div class="container">
        <!--<img :src="require('../assets/about/noah.jpeg')"/>-->
    </div>
</template>

<script>
export default {
    name: "AboutMe",

}
</script>

<style scoped>
    .container {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        height:90%;
        width:80%;
        background:rgba(46, 224, 255, 0.459);
    }

    img {
        width:auto;
        height:30%;
        margin-top:10%;
    }
</style>