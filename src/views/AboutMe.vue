<template>
    <div class="container" ref="About Me 2">
        <div class="img-container" >
            <span data-aos="fade" data-aos-duration="1000">NOAH LUNDBERG</span><br/>
            <img :src="imgSwitch == 1 ? require('../assets/about/noah.jpg') : imgSwitch == 2 ? require('../assets/about/angel.png') : 
            imgSwitch == 3 ? require('../assets/about/demon.png') : imgSwitch == 4 ? require('../assets/about/clown.png') : imgSwitch == 5 ? require('../assets/about/lizard.png')
            : require('../assets/about/noah.jpg')"
            data-aos="zoom-in" data-aos-duration="1000"/>
            <img :src="require('../assets/about/demon.png')" rel="preload" class="hide-image"/>
            <img :src="require('../assets/about/angel.png')" rel="preload" class="hide-image"/>
            <img :src="require('../assets/about/lizard.png')" rel="preload" class="hide-image"/>
            <img :src="require('../assets/about/clown.png')" rel="preload" class="hide-image"/>
            <img :src="require('../assets/about/noah.jpg')" rel="preload" class="hide-image"/>
              
            <img :src="require('../assets/background/vue.config.gif')" class="static-gif" rel="preload" :style="enableStatic ? null : {opacity: 0}"/>
        </div>

        <div class="text-1"
        :data-aos="screenWidth > 1300 ? 'fade-down' : 'fade'" data-aos-duration="1000" data-aos-delay="500">
            <p>Hey, I'm Noah! I study front-end at Hyper Island in Sweden. </p>
            <p>I love solving complex problems using creative solutions in coding. </p>
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
                When not programming I'm either doing martial arts, going on bike adventures, drawing, play videogames, making videogames,
                playing music, out in nature, hanging with friends or exploring the world.
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

        
        
        setInterval(() => {
            this.enableStatic = true;
            setTimeout(() => {this.enableStatic = false}, 500);
            this.imgSwitch++;
            if(this.imgSwitch > 5) this.imgSwitch = 1;
            
        }, 5000)

    },
    data () {
        return {
            screenWidth: window.innerWidth,
            imgSwitch: 1,
            enableStatic: false
        }
    },
    methods: {
        refreshAos() {
            AOS.refresh();
        }
    }

    
}
</script>

<style scoped lang="scss">
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
        position:relative;

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

    .animate {
        animation: glitch .4s linear infinite;
    }

    img {
        position:relative;
        width:20vw;
        height:auto;
        z-index:0;
    }

    .static-gif {
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        width:20vw;
        height:90%;
        opacity:0.9;
        filter:brightness(70%);
        z-index:1;
    }

    .hide-image {
        display:none;
    }

    @keyframes glitch{
        0% {
            left:50%;
            top:50%;

        }

        10% {
            left:calc(50% + 100px);
        }

        15% {
            left:50%;
        }

        30% {
            top:50%;
            left:50%;
        }

        35% {
            top:calc(50% - 10px);
            left:calc(50% - 10px);
        }

        40% {
            top:50%;
            left:50%;
        }

        60% {
            top:50%;
            left:50%;
        }

        65% {
            top:calc(50% + 10px);
            left:calc(50% - 10px);
        }

        70% {
            top:50%;
            left:50%;
        }

        90% {
            left:50%;
            top:50%;
        }

        95% {
            left:calc(50% + 10px);
            top:calc(50% + 10px);
        }


        100% {
            left:50%;
            top:50%;
        }
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

        .static-gif {
            width:90vw;
            height:91%;
        }
    }

    /* ------------------- GENERAL END ----------------*/
</style>