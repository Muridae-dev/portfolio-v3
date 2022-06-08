<template>
  <div class="container-main" ref="Home">

    <div v-for="thumbnail in windowedComponents"
      :key="thumbnail.name" class="thumbnail" 
      @click="thumbnail.useWindow ? (thumbnail.isActive = !thumbnail.isActive, currentZ++, thumbnail.zIndex = currentZ) : noNewWindow(thumbnail)"
      :style="{'left' : thumbnail.xPos ,'top' : thumbnail.yPos}"
    >
      <img :src="require(`${thumbnail.thumbnail}`)" class="thumbnail-image" /><br />
      {{thumbnail.name}}
    </div>

    <!-- LOOPING THROUGH THE COMPONENT ARRAY, SHOWING A NEW WINDOW WHEN THAT COMPONENTS "isActive" IS TRUE -->
    <div v-for="windowedComponent in windowedComponents"
      :key="windowedComponent.component" 
      @click="currentZ != windowedComponent.zIndex ? (currentZ++, windowedComponent.zIndex = currentZ) : null;"
    >
      <NewWindow v-if="windowedComponent.isActive && windowedComponent.name != 'About Me'" :windowedComponent="windowedComponent">
        <component :is="windowedComponent.component">
        </component>
      </NewWindow>
    </div>
  </div>

  
    <Mascots v-if="mascotsActive" :mascotsActive="closeMascots"/>
    
    <Intro />
        
    <div ref="Work" class="container-portfolio">
      <Portfolio />
    </div>

    <div ref="About Me" class="container-about">
      <AboutMeIntro v-if="windowedComponents[3].isActive" :arrowDownFunc="() => goto('About Me 2')"/>
      
    </div>
    <div ref="About Me 2" class="container-about-2">
      <AboutMe v-if="windowedComponents[3].isActive"/>
    </div>

  
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"
import NewWindow from "./components/NewWindow.vue"
import Portfolio from "./views/Portfolio.vue"
import HomeView from "./views/HomeView.vue"
import Travel from "./views/Travel.vue"
import Intro from "./views/Intro.vue"
import AboutMeIntro from "./views/AboutMeIntro.vue"
import AboutMe from "./views/AboutMe.vue"
import Drawing from "./views/Drawing.vue"
import Mascots from "./components/Mascots.vue"

// MOVE X SCROLL TO APPROPRIATE PLACE ON RESIZE
$(window).resize(function () {
  let halfWV = window.innerWidth / 2;
  console.log(window.pageXOffset , window.innerWidth)
  if(window.pageXOffset < halfWV) {
    window.scrollTo({
              left: 0,
              behavior: 'smooth'
    });
  }
  else {
        window.scrollTo({
              left: window.innerWidth,
              behavior: 'smooth'
    });
  }
})

$(window).scroll(function () {
  if(window.pageXOffset >= window.innerWidth - 100) { 
          if(window.pageYOffset > window.innerHeight) {
            window.scrollTo({
                  top:window.innerHeight,
                  
            })
          }
  }
})

  export default {
    name: "App",
    components: {
      HeaderNav,
      NewWindow,
      Portfolio,
      HomeView,
      Travel,
      Intro,
      AboutMeIntro,
      AboutMe,
      Drawing,
      Mascots

    },
    data() {
      return {
        // COMPONENTS FOR "NewWindow.vue"
        currentZ: 0,
        mascotsActive: false,
        windowedComponents : [
          {
            component: "Portfolio",
            isActive: false,
            name: "Work",
            thumbnail: "./assets/framework-icons/javascript.svg",
            zIndex: 0,
            xPos: window.innerWidth > 750 ? '20%' : '10%',
            yPos: window.innerWidth > 750 ? '15%' : '5%',
            useWindow: false,
          },
          {
            component: "HomeView",
            isActive: false,
            name: "Home",
            defaultSizeX: '800px',
            defaultSizeY: '800px',
            thumbnail: "./assets/intro/muridae.png",
            zIndex: 0,
            xPos: window.innerWidth > 1300 ? '100%' : '0%',
            yPos: window.innerWidth > 1300 ? '0%' : '-100%',
            useWindow: false
          },
          {
            component: "Travel",
            isActive: false,
            name: "Travel",
            defaultSizeX: window.innerWidth > 750 ? '1000px' : (window.innerWidth - 20) + 'px',
            defaultSizeY: window.innerWidth > 750 ? '800px' : (window.innerHeight - 20) + 'px',
            thumbnail: "./assets/mascots/murky.png",
            zIndex: 0,
            xPos: window.innerWidth > 750 ? '20%' : '10%',
            yPos: window.innerWidth > 750 ? '70%' : '75%',
            useWindow: true
          },
          {
            component: "AboutMeIntro",
            isActive: false,
            name: "About Me",
            defaultSizeX: '800px',
            defaultSizeY: '800px',
            thumbnail: "./assets/icons/portfolio.png",
            zIndex: 0,
            xPos: window.innerWidth > 750 ? '70%' : '70%',
            yPos: window.innerWidth > 750 ? '70%' : '75%',
            useWindow: false
          },
          {
           component: "Drawing",
            isActive: false,
            name: "Draw Here!",
            defaultSizeX: window.innerWidth > 750 ? '800px' : (window.innerWidth - 20) + 'px',
            defaultSizeY: window.innerWidth > 750 ? '800px' : (window.innerHeight - 20) + 'px',
            thumbnail: "./assets/mascots/hogger.png",
            zIndex: 0,
            xPos: window.innerWidth > 750 ? '13%' : '70%',
            yPos: window.innerWidth > 750 ? '40%' : '5%',
            useWindow: true
          },
          {
            component: "Mascots",
            isActive: false,
            name: "Mascots",
            thumbnail: "./assets/mascots/occult2.png",
            zIndex: 0,
            xPos: window.innerWidth > 750 ? "70%" : "0%",
            yPos: window.innerWidth > 750 ? "14%" : "-100%",
            useWindow: false
            
          }
        ]
      }
    },
    methods: {
      noNewWindow(thumbnail) {
        if(thumbnail.name == "Mascots") {this.mascotsActive = !this.mascotsActive}
        else {
          if(thumbnail.name == "About Me") {
            thumbnail.isActive = true;
            console.log(thumbnail.isActive)
          }
          this.goto(thumbnail.name)
          }
          

        console.log(thumbnail.name)
      },
      goto(refName) {
            console.log(refName.toString())
            var element = this.$refs[refName.toString()];
            console.log(element)
            var top = element.offsetTop;
            var left = element.offsetLeft;
            
            window.scrollTo({
              top: top,
              left: left,
              behavior: 'smooth'
            });
      },
      hoverThumbnail(e) {
        //ERROR HANDLING
        if(e.target.children[0]) e.target.children[0].classList.add("thumbActive");
      },
      leaveThumbnail(e) {
        //ERROR HANDLING
        if(e.target.children[0]) e.target.children[0].classList.remove("thumbActive")
      },
      closeMascots() {
        this.mascotsActive = false;
      }
    },
    mounted() {
        // MAKING SURE X POSITION IS CORRECT ON LOAD
        let halfWV = window.innerWidth / 2;
        if(window.pageXOffset < halfWV) {
          window.scrollTo({
                    left: 0,
                    behavior: 'smooth'
          });
        }
        else {
              window.scrollTo({
                    left: window.innerWidth,
                    behavior: 'smooth'
          });
        }

        // IF PAGE STARTS AT ABOUT ME IT SHOWS
        if(window.pageXOffset >= window.innerWidth - 100) {
          this.windowedComponents[3].isActive = true;
          
          if(window.pageYOffset > window.innerHeight*2) {
            window.scrollTo({
                  top:window.innerHeight,
                  behavior: 'smooth'
            })
          }
        }

        window.addEventListener('scroll', () => 
        {if(window.innerWidth <= 1350 && window.pageYOffset >= window.innerHeight*0.6) this.windowedComponents[3].isActive = true});
    },

  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap');

/* ------------------- GENERAL ----------------*/

html, body {
  height:100%;
  width:100%;
  padding:0;
  margin:0;

}

body {
  background:black;
  color:white;
  overflow-x:hidden;
  
}

* {
  font-family: 'Koulen', cursive;
  color:white;
}

body::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: black;
}

body::-webkit-scrollbar
{
    width: 10px;
    background-color: blue;
}

body::-webkit-scrollbar-thumb
{
    background-color: rgb(4, 255, 150);
    border: 2px solid rgb(4, 255, 150);
}

/* ------------------- GENERAL END ----------------*/



/* ------------------- THUMBNAIL ----------------*/

@keyframes thumbnailAnim {
    0% {opacity:0; transform:scale(2)}

    100% {opacity:1; transform:scale(1)}
}

.thumbnail-background {
  position:absolute;
  top:50%;
  left:50%;

  width:0px;
  height:0px;
  border-radius:50%;
  transform:translate(-50%,-50%);
  background:rgb(4, 255, 150);
  transition:width 0.5s, height 0.5s;

  z-index: -1;
}


.thumbnail-image {
  height:8vw;
  width:auto;
  min-height:100px;
}

.thumbnail {
  position:absolute;
  cursor:pointer;
  font-size:1.5em;

  animation: thumbnailAnim 1.5s ease;

  transition:transform  0.5s;
}

.thumbnail:hover {
  transform:scale(1.5);
}


.thumbActive {
  width:150px;
  height:150px;
}

@media only screen and (max-width: 1350px) {
  .thumbnail {
    font-size:1.2em;
  }
}



/* ------------------- THUMBNAIL END ----------------*/

/* ------------------- CONTAINERS ----------------*/

.container-main {
  height: 100vh;
  width:100vw;

}

.container-portfolio {
  height:auto;
  width:100vw;
  position:absolute;
  top:100vh;
}

.container-about {
  height:100vh;
  width:100vw;

  position:absolute;
  top:0;
  left:100vw;

  z-index: -1;

}

.container-about-2 {
  height:100vh;
  width:100vw;

  position:absolute;
  top:100vh;
  left:100vw;

  
}

@media only screen and (max-width: 1350px) {
  .container-portfolio {
    top:340vh;
  }

  .container-about {
    top:100vh;
    left:0;
  }

  .container-about-2 {
    top:200vh;
    left:0;
  }

  @media only screen and (max-height: 700px) {
    .container-portfolio {
      top:380vh;
    }

    .container-about {
      top:120vh;
      left:0;
    }

    .container-about-2 {
      top:220vh;
      left:0;
    }
  }

}

/* ------------------- CONTAINERS END ----------------*/

.center-align-text {
  position:relative;
  top:50%;
  transform:translate(0,-50%);
  width:100%;
}

.right-align-text {
  float:right;
}

.left-align-text {
  float:left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>

<style scoped>
span {
  mix-blend-mode:difference;
  font-size: 1.5em;
  z-index: -1;
}
</style>