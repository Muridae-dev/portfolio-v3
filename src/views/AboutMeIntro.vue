<template>
    <div class="container">
        <div class="text-2" @mouseenter="hovered[0] = true" @mouseleave="hovered[0] = false">
            <span v-for="(letter, index) in frontEndText" :key="index"  :class="animationsTimer ? 'front-end-intro front-end' : hovered[0] ? 'active front-end' : 'front-end'" :style="{'animation-delay' : `${index/20}s`}">
                {{letter}}
            </span>
        </div>
        
        <div class="text-22" @mouseenter="hovered[0] = true" @mouseleave="hovered[0] = false">
        <span v-for="(letter, index) in developerText" :key="index"  :class="animationsTimer ? 'front-end-intro front-end' : hovered[0] ? 'active front-end' : 'front-end'" :style="{'animation-delay' : `${0.5 + (index/20)}s`}">
                {{letter}}
            </span>
        </div>
        <div class="text-3">
            <span @mouseenter="hovered[1] = true" @mouseleave="hovered[1] = false" :class="animationsTimer ? 'traveler-intro traveler' : hovered[1] ? 'traveler-hover traveler' : 'traveler'">
                TRAVELER
            </span>
            <span @mouseenter="hovered[2] = true" @mouseleave="hovered[2] = false" :class="animationsTimer ? 'gamer-intro' : hovered[2] ? 'gamer-hover' : null" class="gamer">
                GAMER
            </span>
            <div class="musician-container" @mouseenter="hovered[3] = true" @mouseleave="hovered[3] = false">
                <span v-for="(letter, index) in musicianText" :key="index" :class="animationsTimer ? 'musician-intro' : hovered[3] ? 'musician-hover' : null" class="musician" :style="animationsTimer ? {'animation-delay' : `${3+(index/20)}s`} : {'animation-delay' : `${(index/20)}s`}">
                    {{letter}}
                </span>
            </div>
        </div>

        <div class="text-4">
            <span @mouseenter="hovered[4] = true" @mouseleave="hovered[4] = false" :class="animationsTimer ? 'boxer-intro' : hovered[4] ? 'boxer-hover' : null" class="boxer">
                BOXER
            </span>
            <span @mouseenter="hovered[5] = true" @mouseleave="hovered[5] = false" :class="animationsTimer ? 'artist-intro' : hovered[5] ? 'artist-hover' : null" class="artist">
                ARTIST
            </span>
        </div>

        <div class="text-5">
            <p class="and">&</p><span class="much-more"> SO MUCH MORE!!</span>
        </div>


        <div @mouseenter="hovered[6] = true" @mouseleave="hovered[6] = false" :class="animationsTimer ? 'arrow-down-intro' : hovered[6] ? 'arrow-down-hover' : null" class="arrow-down" @click="() => arrowDownFunc()">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Arrow Down</title><path fill="none" stroke="white" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/></svg>
        </div>
        
        
    </div>

    
</template>

<script>
export default {
    name: "AboutMeIntro",
    props: ["arrowDownFunc"],
    data() {
        return {
            frontEndText: ["F", "R", "O", "N", "T", " ", "E", "N", "D"],
            developerText: [" ", "D", "E", "V", "E", "L", "O", "P", "E", "R"],
            musicianText: ["M", "U", "S", "I", "C", "I", "A", "N"],
            hovered: [false,false,false,false,false,false,false],
            animationsTimer: true,
        }
    },

    created() {
        console.log(this.animationsTimer)
        setTimeout(() => {this.animationsTimer = false; console.log("ran: " + this.animationsTimer)}, 7500)
    }

}
</script>

<style scoped>

    /* ------------------- ANIMATION INTRO ----------------*/

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

    @keyframes arrowDownAnim {
        0% {top:400%}
        100% {top: 70%}
    }

    @media only screen and (max-width: 650px) { 
        @keyframes travelerAnim {
            0% {left: -150%; transform: scaleX(6) translateX(-50%);}
            50% {left: 70%; transform: scaleX(0.15) translateX(-50%);}
            80% {left: 50%; transform: scaleX(1.15) translateX(-50%);}
            100% {left:50%; transform: scaleX(1) translateX(-50%);}
        }

        @keyframes arrowDownAnim {
            0% {top:400%}
            100% {top: 110vw}
        }
    }


    /* ------------------- ANIMATION INTRO END ----------------*/

    /* ------------------- ANIMATION HOVER ----------------*/

    @keyframes frontEndHover {
        0% {top:0px}
        50% {top:-3vw}
        100% {top:0px}
    }

    @keyframes travelerHover {
        0% {transform:scaleX(1)}
        50% {transform:scaleX(0.5)}
        100% {transform:scaleX(1)}
    }

    @keyframes gamerHover {
        0% {color:aqua;}
        50% {color:rgb(255, 0, 255)}
        100% {color:rgb(0, 255, 0)}

    }

    @keyframes musicianHover {
        0% {transform: rotateX(-360deg);}
        100% {transform: rotateX(360deg);}
    }

    @keyframes boxerHover {
        0% {transform: rotate(20deg);}
        50% {transform: rotate(-20deg);}
        100% {transform: rotate(20deg);}
    }

    @keyframes artistHover {
        0% {transform: rotateY(0deg);}
        100% {transform: rotateY(360deg);}
    }

    @keyframes andMuchMoreHover {
        0% {transform:scale(1,1)}
        50% {transform:scale(1.5,1.5)}
        100% {transform:scale(1,1)}
    }

    /*@keyframes arrowHover {
        0% {top:70%;}
        50% {top:73%;}
        100% {top:70%;}
    }*/

    .active {
        position:relative;
        animation: frontEndHover 1s ease-in-out;
        animation-iteration-count:infinite;
        animation-fill-mode: forwards; 

    }


    /* ------------------- ANIMATION HOVER END ----------------*/


    /* ------------------- INDIVIDUAL TEXT ----------------*/
    .gamer {
        opacity:1;
        font-family: 'Chakra Petch', sans-serif;
        /*font-family:gameText */
        font-size:5vw;

        color:rgb(21, 255, 126);

        position:absolute;
        
        left:50%;
        top:0;
        transform: translate(-50%,0);


    }

    .gamer-intro {
        opacity:0;
        animation: gamerAnim 1s linear 2.8s;
        animation-fill-mode: forwards;

    }

    .gamer-hover {
        animation: gamerHover 1s ease-in-out;
        animation-iteration-count: infinite;
    }

    .traveler {

        font-family: 'Caesar Dressing', cursive;
        color:blue;
        font-size:5vw;
        position:absolute;
        left:2vw;
        transform: translate(0,0);

        
    }

    .traveler-intro {
        position:absolute;
        left:300%;
        top:0;
        transform: translate(0,0);

        animation: travelerAnim 1.5s ease-in-out 1.5s;
        animation-fill-mode: forwards;
    }

    .traveler-hover {
        
        animation: travelerHover 1s ease-in-out;
        animation-iteration-count: infinite;
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
        font-size:4vw;

        position:relative;
        top:0px;
        transform: rotateX(0deg);
        display:inline-block;
    }

    .musician-intro {
        position:relative;
        top:-500px;


        animation: musicianAnim 1s;
        animation-fill-mode: forwards;
    }

    .musician-hover {
        animation: musicianHover 1s linear;
        animation-iteration-count: infinite;
    }

    
    .boxer {
        opacity: 1;
        font-family: 'Permanent Marker', cursive;
        color:red;
        font-size:3vw;
        position:absolute;
        left:0;
        top:0;

        transform:rotate(0deg);
        
        
    }

    .boxer-intro {
        opacity:0;
        animation: boxerAnim 0.8s ease 4.3s;
        animation-fill-mode: forwards; 
    }

    .boxer-hover {
        animation: boxerHover 1s linear;
        animation-iteration-count: infinite;
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
        opacity:1;
        -webkit-text-stroke: 2px rgb(13, 235, 150);
        color:black;
        font-family: 'Shrikhand', cursive;
        font-size:3vw;

        position:absolute;
        right:0;
        top:0;
    }

    .artist-intro {
        opacity:0;
        animation: artistAnim 1s ease 5s;
        animation-fill-mode: forwards; 
    }

    .artist-hover {
        animation: artistHover 1s linear;
        animation-iteration-count: infinite;
    }

    .front-end {
        -webkit-text-stroke: 2px rgb(255, 251, 0);
        color:black;
        font-size: 7vw;
        font-family: 'Kanit', sans-serif;

        animation-fill-mode: forwards; 

        position: relative;
        transition:top 1s;
    
    }

    .front-end-intro {
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
        top:70%;
        left:50%;
        transform:translateX(-50%);

        overflow:hidden;
        transition:top 0.5s;


    }

    .arrow-down-intro {
        animation: arrowDownAnim 0.8s ease 6.5s;
        animation-fill-mode: forwards; 

        top:400%;

    }

    .arrow-down-hover {
        top:73%;
        cursor:pointer;
    }

    svg {
        color:white;
        overflow:hidden;
 
    }

    @media only screen and (max-width: 650px) { 
        .front-end {
            -webkit-text-stroke: unset;
            color:rgb(255, 251, 0);
            font-size:16vw;
        }

        @keyframes travelerHover {
            0% {transform: translateX(-50%) scaleX(1) }
            50% {transform:translateX(-50%) scaleX(0.5) }
            100% {transform:translateX(-50%) scaleX(1) }
        }

        .traveler {
            font-size:14vw;
            left:50%;
            transform:translateX(-50%);
        }

        .traveler-intro {
            left:300%;
        }

        .gamer {
            font-size:14vw;
            left:50%;
            top:14vw;
            transform:translateX(-50%);
            
        }

        .musician {
            -webkit-text-stroke: unset;
            color:rgb(255, 0, 234);
            font-size:14vw;

        }

        .musician-container {
            right:unset;
            height:18vw;
            width:100%;
            top:28vw;
            left:50%;
            transform:translate(-50%,0);

        }

        .boxer {
            font-size:9.5vw;
        }

        .artist {
            font-size:10vw;
            -webkit-text-stroke: unset;
            color:rgb(13, 235, 150);
        }

        .and {
            font-size:12vw;
            -webkit-text-stroke: unset;
            color:white;
        }

        .much-more {
            font-size:9vw;
            -webkit-text-stroke: unset;
            color:white;
        }

        .arrow-down {
            top:110vw;
            width:30vw;
        }

        svg {
            overflow:visible;
        }

        .arrow-down-intro { 
            top:400%;
        }

    }


    /* ------------------- INDIVIDUAL TEXT END ----------------*/

    /* ------------------- TEXT CONTAINERS ----------------*/
    .text-2 {
        height:8vw;
        overflow-y:hidden;
        margin-bottom:2%;

        position:relative;
    }

    .text-22 {
        padding-left:1em;
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

        overflow-y:visible;
        z-index:-1;

    }

    @media only screen and (max-width: 650px) { 
        .text-2 {
            position:absolute;
            height:18vw;
            width:100vw;
            top:0;
        }

        .text-22 {
            position:absolute;
            height:18vw;
            top:15vw;
        }

        .text-3 {
            position:absolute;
            height:16em;
            top:32vw;
            width:90vw;
        }

        .text-4 {
            position:absolute;
            top:72vw;
            width:80vw;
        }

        .text-5 {
            top:75vw;
            height:50vw;
        }

    }


    /* ------------------- TEXT CONTAINER END ----------------*/

    /* ------------------- GENERAL ----------------*/

    .container {
        position:absolute;
        top:50vh;
        left:50vw;
        transform:translate(-50%,-50%);

        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        gap:0;


        text-align: center;

        height:auto;
        width:100%;

        overflow:hidden;
        cursor:default;
    }

    @media only screen and (max-width: 650px) { 
        .container {
            height:100%;
            
        }
    }

    @media only screen and (max-width: 550px) { 
        .container {
            height:80%;
        }
    }

    @media only screen and (max-width: 480px) { 
        .container {
            height:70%;
        }

        @media only screen and (max-height: 700px) { 
            .container {
                height:90%;
            }
        }
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