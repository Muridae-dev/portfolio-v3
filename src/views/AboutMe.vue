<template>
    <div class="container">
        <!--
        <div class="text-4">
            CREATIVE GENIUS
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
        </div>-->
        <!--<div class="text-1">
            My name is Noah Lundberg I'm a
        </div>-->



        <div class="text-2">
            FRONT END DEVELOPER
        </div>
        <div class="text-3">
            <span class="boxer">
                BOXER
            </span>
            <span class="gamer">
                GAMER
            </span>
            <span class="traveler">
                TRAVELER
            </span>
        </div>

        <div class="text-4">
            <span class="musician">
                MUSICIAN
            </span>

            <span class="and">
                &
            </span>

            <span class="artist">
                ARTIST
            </span>
        </div>

        <div class="text-5">
            SO MUCH MORE!!
        </div>

        <div class="img-container">
            <img :src="require('../assets/about/noah.jpg')"/>
        </div>

        
        
        
    </div>
</template>

<script>
export default {
    name: "AboutMe",

}
</script>

<style scoped>

    @font-face {
        font-family: gameText;
        src: url("../assets/fonts/PressStart2P-Regular.ttf");
    }

    @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

    .gamer {

        font-family: 'Chakra Petch', sans-serif;
        /*font-family:gameText */
        font-size:7em;

        color:rgb(21, 255, 126);
    }

    .boxer {

        font-family: 'Permanent Marker', cursive;
        color:red;
        font-size:7em;
    }

    .traveler {

        font-family: 'Caesar Dressing', cursive;
        color:blue;
        font-size:7em;
    }

    span {
        
    }

    .musician {
        -webkit-text-stroke: 2px rgb(255, 0, 234);
        color:black;
        font-family: 'Rye', cursive;
        width:400px;
    }

    .and {
        margin-top:-25px;

        -webkit-text-stroke: 2px rgb(255, 255, 255);

        color:black;

        font-size:3em;
        font-family: 'Fugaz One', cursive;
        width:auto;
    }

    .artist {
        -webkit-text-stroke: 2px rgb(13, 235, 150);
        color:black;
        font-family: 'Shrikhand', cursive;
        width:400px;
    }


    .text-2 {
        -webkit-text-stroke: 2px rgb(255, 251, 0);
        color:black;
        font-size: 8em;
        font-family: 'Kanit', sans-serif;
    }
    .text-3 {
        margin-top:-70px;
    }

    .text-4 {
        font-size:2em;
        display:flex;
        flex-direction: row;
        justify-content:center;
        gap:200px;
        width:80%;

        margin-top:-35px;
    }

    .text-5 {
        font-size:4em;
        width:80%;
        margin-top:-45px;

        font-family: 'Fugaz One', cursive;

        -webkit-text-stroke: 2px rgb(255, 255, 255);

        color:black;
    }



    .container {

        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;


        text-align: center;

        height:auto;
        width:100%;
    }

    .img-container {
        height:40vh;
        width:80vw;
    }

    img {
        width:auto;
        height:100%;
    }
</style>