<template>
  <div class="container">
    <!-- SENDING THE COMPONENT ARRAY TO THE HEADER IN ABLE TO ACTIVATE EACH WINDOW 
    <HeaderNav :componentArray="windowedComponents"/>-->
    <div v-for="thumbnail in windowedComponents"
      :key="thumbnail.name" class="thumbnail" 
      @click="thumbnail.name != 'Portfolio' ? (thumbnail.isActive = !thumbnail.isActive, currentZ++, thumbnail.zIndex = currentZ) : goto('Portfolio')"
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
    
    <Intro />
    
    <div style="position:absolute; top:100%;" ref="Portfolio">
      <Portfolio />
    </div>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"
import NewWindow from "./components/NewWindow.vue"
import Portfolio from "./views/Portfolio.vue"
import HomeView from "./views/HomeView.vue"
import Travel from "./views/Travel.vue"
import Intro from "./views/Intro.vue"

  export default {
    name: "App",
    components: {
      HeaderNav,
      NewWindow,
      Portfolio,
      HomeView,
      Travel,
      Intro

    },
    data() {
      return {
        // COMPONENTS FOR "NewWindow.vue"
        currentZ: 0,
        windowedComponents : [
          {
            component: "Portfolio",
            isActive: false,
            name: "Portfolio",
            defaultSizeX: 'calc(100% - 6px)',
            defaultSizeY: 'calc(100% - 6px)',
            thumbnail: "./assets/icons/portfolio.png",
            zIndex: 0,
            xPos: '10%',
            yPos: '10%',
          },
          {
            component: "HomeView",
            isActive: false,
            name: "Home",
            defaultSizeX: '1000px',
            defaultSizeY: '800px',
            thumbnail: "./assets/intro/muridae.png",
            zIndex: 0,
            xPos: '70%',
            yPos: '20%',
          },
          {
            component: "Travel",
            isActive: false,
            name: "Travel",
            defaultSizeX: '1000px',
            defaultSizeY: '800px',
            thumbnail: "./assets/mascots/murky.png",
            zIndex: 0,
            xPos: '30%',
            yPos: '80%',
          }
        ]
      }
    },
    methods: {
      goto(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;

            window.scrollTo({
              top: top,
              left: 0,
              behavior: 'smooth'
            });
      }
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap');

body {
  background:black;
  color:white;
  overflow-x:hidden;
  
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

.thumbnail {
  height:auto;
  width:auto;
  float:left;
  position:absolute;
  text-align:center;
}

* {
  font-family: 'Koulen', cursive;
  color:white;
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
