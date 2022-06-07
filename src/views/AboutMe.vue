<template>
    <div class="container" ref="About Me 2">
        <div class="img-container">
            <span data-aos="fade" data-aos-duration="1000">NOAH LUNDBERG</span><br/>
            <img :src="require('../assets/about/noah.jpg')" data-aos="zoom-in" data-aos-duration="1000"/>   
        </div>

        <div class="text-1"
        :data-aos="screenWidth > 1300 ? 'fade-down' : 'fade'" data-aos-duration="1000" data-aos-delay="500">
            <p>I'm a front-end student at Hyper Island in Sweden. </p>
            <p>I like to solve complex problems with creative solutions using programming. </p>
            <p>Languages and frameworks I have worked with include, Javascript, React, Vue, Node.js & Haxe
            and have dipped my toes in Java, C++, C# & Python. </p>
        </div>

        <div class="text-3" :data-aos="screenWidth > 1300 ? 'fade-down' : 'fade'" data-aos-duration="1000" :data-aos-delay="screenWidth > 1300 ? 1500 : 0">
            CONTACT INFO<br/>
            nhlund@gmail.com<br/>
            <a href="https://www.linkedin.com/in/noah-lundberg-02142021b/">linkedin</a>
        </div>

        

        <div class="text-2" v-if="screenWidth > 750"
        data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
            <p>
                When not programming I love to do martial arts, go for adventures on my bike, draw, play videogames, make videogames,
                play music, be out in nature & explore the world.
            </p>
            <p>
                
            </p>
            
        </div>

    </div>
</template>

<script>
import AOS from "aos";
export default {
    name: "AboutMe",
    mounted() {
        AOS.init();

    },
    data () {
        return {
            screenWidth: window.innerWidth
        }
    },
    methods: {
        refreshAos() {
            AOS.refresh();
        }
    }

    
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&display=swap');

    /* ------------------- TEXT BOXES ----------------*/
    .text-1 {
        position:absolute;
        top:20vh;
        left:10vw;


        height: auto;
        width: 20vw;
        

    }

    .text-2 {
        position:absolute;
        top:40vh;
        left:70vw;

        height: auto;
        width: 20vw;

    }

    .text-3 {
        position:absolute;
        top:70vh;
        left:10vw;

        height:auto;
        width:20vw;

        font-family: 'Source Code Pro', monospace;
        font-size:1.2em;
    }

    @media only screen and (max-width: 750px) { 
        .text-1 {
            position:relative;
            top:unset;
            left:unset;
            float:left;

            width:100vw;

            
        }

        .text-3 {
            position:relative;
            top:10vw;
            left:unset;
            float:left;
            
            width:100vw;
        }
    }

    a {
        font-family: 'Source Code Pro', monospace;
    }

    p {
        font-family: 'Source Code Pro', monospace;
        font-size:1.2em;
    }

    span {
        font-family: 'Chakra Petch', sans-serif;
        font-size:2.5vw;
    }

    /* ------------------- TEXT BOXES END ----------------*/

    /* ------------------- GENERAL ----------------*/
    .container {
        position:absolute;

        height:100vh;
        width:100vw;
    }

    .img-container {
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);

        height:auto;
        width:30vw;
    }

    img {
        width:20vw;
        height:auto;
    }

    @media only screen and (max-width: 750px) { 
        .img-container {
            position:relative;
            top:unset;
            left:5vw;
            float:left;
            transform:unset;
            width:90vw;

        }

        span {
            font-size:10vw;
        }

        img {
            width:90vw;
        }
    }

    /* ------------------- GENERAL END ----------------*/
</style>