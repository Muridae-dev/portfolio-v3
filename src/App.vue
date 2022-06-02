<template>
  <div class="container-main" ref="Home">
    <!-- SENDING THE COMPONENT ARRAY TO THE HEADER IN ABLE TO ACTIVATE EACH WINDOW 
    <HeaderNav :componentArray="windowedComponents"/>-->
    <div v-for="thumbnail in windowedComponents"
      :key="thumbnail.name" class="thumbnail" 
      @click="thumbnail.useWindow ? (thumbnail.isActive = !thumbnail.isActive, currentZ++, thumbnail.zIndex = currentZ) : noNewWindow(thumbnail)"
      :style="{'left' : thumbnail.xPos ,'top' : thumbnail.yPos}"
    >
      <img :src="require(`${thumbnail.thumbnail}`)" style="height:100px;width:auto;" /><br />
      {{thumbnail.name}}
    </div>

    <!-- LOOPING THROUGH THE COMPONENT ARRAY, SHOWING A NEW WINDOW WHEN THAT COMPONENTS "isActive" IS TRUE -->
    <div v-for="windowedComponent in windowedComponents"
      :key="windowedComponent.component" 
      @click="currentZ != windowedComponent.zIndex ? (currentZ++, windowedComponent.zIndex = currentZ) : null;"
    >
      <NewWindow v-if="windowedComponent.isActive" :windowedComponent="windowedComponent">
        <component :is="windowedComponent.component">
        </component>
      </NewWindow>
    </div>
  </div>

  
    <Mascots v-if="mascotsActive"/>
    
    <Intro />
        
    <div ref="Work" class="container-portfolio">
      <Portfolio />
    </div>

    <div ref="About Me" class="container-about">
      <AboutMe />
    </div>

  
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"
import NewWindow from "./components/NewWindow.vue"
import Portfolio from "./views/Portfolio.vue"
import HomeView from "./views/HomeView.vue"
import Travel from "./views/Travel.vue"
import Intro from "./views/Intro.vue"
import AboutMe from "./views/AboutMe.vue"
import Drawing from "./views/Drawing.vue"
import Mascots from "./components/Mascots.vue"

// MOVE X SCROLL TO APPROPRIATE PLACE ON RESIZE
$(window).resize(function () {
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
            thumbnail: "./assets/icons/portfolio.png",
            zIndex: 0,
            xPos: '10%',
            yPos: '10%',
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
            xPos: '100%',
            yPos: '0%',
            useWindow: false
          },
          {
            component: "Travel",
            isActive: false,
            name: "Travel",
            defaultSizeX: '1000px',
            defaultSizeY: '800px',
            thumbnail: "./assets/mascots/murky.png",
            zIndex: 0,
            xPos: '10%',
            yPos: '70%',
            useWindow: true
          },
          {
            component: "AboutMe",
            isActive: false,
            name: "About Me",
            defaultSizeX: '800px',
            defaultSizeY: '800px',
            thumbnail: "./assets/icons/portfolio.png",
            zIndex: 0,
            xPos: '70%',
            yPos: '70%',
            useWindow: false
          },
          {
           component: "Drawing",
            isActive: false,
            name: "Draw Here!",
            defaultSizeX: '800px',
            defaultSizeY: '800px',
            thumbnail: "./assets/mascots/hogger.png",
            zIndex: 0,
            xPos: '15%',
            yPos: '40%',
            useWindow: true
          },
          {
            component: "Mascots",
            isActive: false,
            name: "Mascots",
            thumbnail: "./assets/mascots/occult2.png",
            zIndex: 0,
            xPos: "70%",
            yPos: "10%",
            useWindow: false
            
          }
        ]
      }
    },
    methods: {
      noNewWindow(thumbnail) {
        if(thumbnail.name == "Mascots") {this.mascotsActive = !this.mascotsActive}
        else {this.goto(thumbnail.name)}
      

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
    }
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

.thumbnail-container {
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
}

.thumbnail {
  height:auto;
  width:auto;
  float:left;
  position:absolute;
  text-align:center;
  min-width: 100px;
  cursor:pointer;

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



/* ------------------- THUMBNAIL END ----------------*/

.container-main {
  height: 100vh;
  width:100vw;

}

.container-portfolio {
  height:auto;
  width:100vw;
  position:absolute;
  top:100%;
}

.container-about {
  height:100vh;
  width:100vw;

  position:absolute;
  top:0;
  left:100vw;

  z-index: -1;


}

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