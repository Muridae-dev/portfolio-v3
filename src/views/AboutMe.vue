<template>
    <div class="container">
        <div class="text-2">
            <span v-for="(letter, index) in frontEndText" :key="index" class="front-end" :style="{'animation-delay' : `${index/20}s`}">
                {{letter}}
            </span>
        </div>
        <div class="text-3">
            <span class="gamer">
                GAMER
            </span>
            <span class="traveler">
                TRAVELER
            </span>
            <div class="musician-container">
                <span v-for="(letter, index) in musicianText" :key="index" class="musician" :style="{'animation-delay' : `${3+(index/20)}s`}">
                    {{letter}}
                </span>
            </div>
        </div>

        <div class="text-4">
            <span class="boxer">
                BOXER
            </span>
            <span class="artist">
                ARTIST
            </span>
        </div>

        <div class="text-5">
            <p class="and">&</p><span class="much-more"> SO MUCH MORE!!</span>
        </div>


        <!--<div class="img-container">
            <img :src="require('../assets/about/noah.jpg')"/>
            <div class="arrow-down">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Down</title><path fill="none" stroke="white" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/></svg>
            </div>
        </div>-->
        
        
    </div>

    
</template>

<script>
export default {
    name: "AboutMe",
    data() {
        return {
            frontEndText: ["F", "R", "O", "N", "T", " ", "E", "N", "D", " ", "D", "E", "V", "E", "L", "O", "P", "E", "R"],
            musicianText: ["M", "U", "S", "I", "C", "I", "A", "N"]
        }
    },

}
</script>

<style scoped>

    /* ------------------- ANIMATION ----------------*/

    @keyframes textFlyIn {
        0% {top:500px;}
        100% {top:0px;}
    }

    @keyframes travelerAnim {
        0% {left: -150%; transform: scaleX(6);}
        50% {left: 20%; transform: scaleX(0.15);}
        80% {left: 1vw; transform: scaleX(1.15);}
        100% {left:2vw; transform: scaleX(1);}
    }

    @keyframes gamerAnim {
        0% {filter:blur(5px); opacity:0;}
        100% {filter:blur(0); opacity:1;}
    }

    @keyframes musicianAnim {
        0% {top:-500px;}
        100% {top:0px;}
    }

    @keyframes boxerAnim {
        0% {opacity:0;transform:scale(4,4)}
        50% {transform:scale(0.8,0.8)}
        100% {opacity:1;transform:scale(1,1)}
    }

    @keyframes artistAnim {
        0% {
            transform: rotateX(90deg);
            opacity:1;
        }
        100% {
            transform: rotateX(-360deg);
            opacity:1;
        }
    }

    @keyframes andAnim {
        0% {top:300%}
        100% {top:-6vw}
    }

    @keyframes muchMoreAnim {
        0% {top:400%}
        100% {top:40%}
    }


    /* ------------------- ANIMATION END ----------------*/


    /* ------------------- INDIVIDUAL TEXT ----------------*/
    .gamer {
        opacity:0;
        font-family: 'Chakra Petch', sans-serif;
        /*font-family:gameText */
        font-size:5vw;

        color:rgb(21, 255, 126);

        position:absolute;
        
        left:50%;
        top:0;
        transform: translate(-50%,0);

        animation: gamerAnim 1s linear 2.8s;
        animation-fill-mode: forwards;

    }

    .traveler {

        font-family: 'Caesar Dressing', cursive;
        color:blue;
        font-size:5vw;

        position:absolute;
        left:300%;
        top:0;
        transform: translate(0,0);

        animation: travelerAnim 1.5s ease-in-out 1.5s;
        animation-fill-mode: forwards;
        
    }

    .musician-container {
        position:absolute;
        right:0;
        top:0.8vw;
        overflow-y:hidden;
    }

    .musician {
        -webkit-text-stroke: 2px rgb(255, 0, 234);
        color:black;
        font-family: 'Rye', cursive;

        position:relative;
        top:-500px;

        font-size:4vw;
        animation: musicianAnim 1s;
        animation-fill-mode: forwards;
    }

    
    .boxer {
        opacity:0;
        font-family: 'Permanent Marker', cursive;
        color:red;
        font-size:3vw;
        position:absolute;
        left:0;
        top:0;
        animation: boxerAnim 0.8s ease 4.3s;
        animation-fill-mode: forwards; 
        
    }

    .and {

        -webkit-text-stroke: 2px rgb(255, 255, 255);

        color:black;

        font-size:5vw;
        font-family: 'Fugaz One', cursive;
        width:auto;

        position:absolute;
        left:50%;
        top:-300%;
        transform:translate(-50%,0);

        animation: andAnim 0.8s ease 5.5s;
        animation-fill-mode: forwards; 
    }

    .artist {
        opacity:0;
        -webkit-text-stroke: 2px rgb(13, 235, 150);
        color:black;
        font-family: 'Shrikhand', cursive;
        font-size:3vw;

        position:absolute;
        right:0;
        top:0;

        animation: artistAnim 1s ease 5s;
        animation-fill-mode: forwards; 
    }

    .front-end {
        -webkit-text-stroke: 2px rgb(255, 251, 0);
        color:black;
        font-size: 7vw;
        font-family: 'Kanit', sans-serif;
        
        position:relative;
        top:500px;

        animation: textFlyIn 1s;
        animation-fill-mode: forwards; 
    }

    .much-more {
        position:relative;
        transform:translate(-50%,-50%);
        top:300%;

        
        font-family: 'Fugaz One', cursive;

        -webkit-text-stroke: 2px rgb(255, 255, 255);

        color:black;

        animation: muchMoreAnim 0.8s ease 6s;
        animation-fill-mode: forwards; 
    }

    .arrow-down {
        height:auto;
        width:10vw;
        color:white;

        position:absolute;
        top:60%;
        left:50%;
        transform:translateX(-50%);
        
    }

    svg {
        color:white;
    }

    /* ------------------- INDIVIDUAL TEXT END ----------------*/

    /* ------------------- TEXT CONTAINERS ----------------*/
    .text-2 {
        height:8vw;
        overflow-y:hidden;
        margin-bottom:2%;

        position:relative;
    }

    .text-3 {
        position:relative;
        width:65vw;
        height:6vw;
        top:-3vw;
    }

    .text-4 {
        font-size:2em;
        width:40vw;
        height:6vw;



        position:relative;
        top:-4.5vw;
    }

    .text-5 {
        font-size:3vw;
        width:80vw;
        height:10vw;
        position:relative;
        top:-10vw;

        overflow-y:hidden;

    }

    /* ------------------- TEXT CONTAINER END ----------------*/

    /* ------------------- GENERAL ----------------*/

    .container {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        gap:0;


        text-align: center;

        height:auto;
        width:100%;

        overflow-x:hidden;
    }

    .img-container {
        height:40vh;
        width:80vw;
    }

    img {
        width:auto;
        height:100%;
    }

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

    /* ------------------- GENERAL END ----------------*/
</style>