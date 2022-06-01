<template>
    <div class="container">
        <!--<div class="text-1">
            My name is Noah Lundberg I'm a
        </div>-->
        <div class="text-2">
            FRONT END DEVELOPER
        </div>

        <div class="text-6">
            I love programming, gaming, making music, drawing & martial arts
        </div>

        <div class="text-7">
            I developed a passion for coding being a gamer, making my own games as side projects, while working towards becoming
            a front-end developer. I find code to be a great creative outlet and love the fact that it's continually evolving
            forcing me to stay updated, learning new skills every day.
        </div>
        <div class="text-8">
            In my spare time I love to stay active, doing martial arts & biking. When relaxing I love to game, draw & play music.
            I've been playing drums since I was 4 years old, played in a band for over 6 years & performing live during that time.
            As a side job I work at a "youth center", a place for kids to hang out & do different activities, where my soft skills
            have grown in communication, taking responsibilities & stress management, having 4 staff taking care of 80+ kids.  
        </div>
        <!--<div class="text-3">
            GAMER BOXER TRAVELER
        </div>
        <div class="text-4">
            CREATIVE GENIUS
        </div>
        <div class="text-5">
            
        </div>-->
        <div class="img-container">
            <!--<img :src="require('../assets/about/noah.jpeg')"/>-->
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "AboutMe",

}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');

    .text-1 {
        position:absolute;
        left:2%;
        top:0%;

        font-size: 2em;
    }

    .text-2 {
        position:absolute;
        left:2%;
        top:0%;

        font-size: 8em;
        font-family: 'Kanit', sans-serif;
    }

    .text-6 {
        position:absolute;
        left:2%;
        top:16%;

        font-size: 2em;
        font-family: 'Kanit', sans-serif;
    }

    .text-3 {
        position:absolute;
        left:2%;
        top:12%;

        font-size: 6em;
        font-family: 'Kanit', sans-serif;
    }

    .text-4 {
        position:absolute;
        left:2%;
        top:18%;

        font-size: 8em;
        font-family: 'Kanit', sans-serif;
    }


    .container {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        height:100%;
        width:100%;
    }

    .img-container {
        position:absolute;
        top: 10%;
        left:78%;
        height:50%;
    }

    img {
        width:auto;
        height:100%;
    }
</style>