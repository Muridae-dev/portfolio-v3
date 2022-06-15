<template>
    <div class="background-sticky">
        

        
        <img src="../assets/background/static3.gif" class="gif-image op1"/>
        <img src="../assets/background/static15.gif" class="gif-image op2"/>

        
    </div>
    <div class="background-container">
        <div class="background-darkener"></div>
        <div class="background-image" />
        
    </div>
</template>

<script>
export default {
    name: "Background",
    data() {
        return {
            images: [{url: "pic1.jpg", top: '70'},{url: "pic2.jpg", top: '70'}]
        }
    }
}
</script>

<style scoped>
    .background-sticky {
        height:100vh;
        width:100vw;
        
        position:fixed;
        top:0;
        left:0;
        z-index: -9;

        overflow-y:hidden;
    }

    .background-container {
        height:100vh;
        width:100vw;
        
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
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 100%);


        position:absolute;
        top:0;
        left:0;
    }

    .background-image {
        height:100%;
        background-image: url("../../public/pic8.png");
        background-position: center;
        background-size: cover;
        width:100%;

        z-index:0;
        opacity:0.8;

        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }

    .gif-image {
        height:100%;
        width:100%;

        z-index:1;

        position:absolute;
        top:0;
        left:0;
    }

    .op1 {
        opacity:0.05;
    }

    .op2 {
        opacity:0.02;
    }

    @media only screen and (max-width: 750px) {
    .op1 {
        opacity:0.1;
    }

    .op2 {
        opacity:0.04;
    }
    }
</style>