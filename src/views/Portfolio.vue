<template>
  <div v-for="item in portfolioItems" :key="item.name">
    <div v-if="item.isActive">
      <PortfolioModal :closeFunc="() => {item.isActive = !item.isActive}" :portfolioItem="item"/>
    </div>
  </div>
  <section class="portfolio-demos" style="z-index: 0;">
    <div v-for="item in portfolioItems" :key="item.name"
    class="portfolio-items" 
    :id="item.name"
    @click="item.isActive = !item.isActive">
      <div data-aos="fade">
      
        <div class="headline-text">{{item.name}}</div>
        <div class="video-container" :class="{leftPos: item.isActive}">
          <img :src="require(`../assets/demos/${item.name}_demo.png`)" style="height:100%;width:100%; z-index: 0;"/>
          <video muted preload="metadata" @mouseover="hoverVideo" @mouseleave="hideVideo" style="z-index: 1;">
            <source :src="require(`../assets/demos/${item.name}_demo.mp4`)" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import PortfolioModal from "../components/PortfolioModal.vue"


export default {
  name: "Portfolio",
  components: {
    PortfolioModal
  },
  mounted() {
    
    AOS.init();

  },

  data() {
    return {
      portfolioItems: [
            {
              name: 'savemissx',
              isActive: false,
              description: 'This is a game I made back in 2019, its a 2d platformer with many different features',
              logos: ["haxe.png", "haxeflixel.png", "aseprite.png"],
            },
            {
              name: 'thehills',
              isActive: false,
              description: ''
            },
            {
              name: 'dodgethevirus',
              isActive: false,
              description: ''
            },
            {
              name: 'blackjack',
              isActive: false,
              description: ''
            },
            {
              name: 'marketplace',
              isActive: false,
              description: ''
            },
            {
              name: 'quiz',
              isActive: false,
              description: ''
            },
            {
              name: 'homepage',
              isActive: false,
              description: ''
            },
            {
              name: 'tombraiders',
              isActive: false,
              description: ''
            },
          ]

    }
    
  },

  methods: {
    hoverVideo(e) {  
      e.preventDefault();
      e.target.play();
      e.target.classList.add("active");
      console.log("hover: ", e)
    },
    hideVideo(e) {
      e.target.pause();
      e.target.classList.remove("active");
      console.log("left: ", e)
    },
    refreshAos() {
      AOS.refresh();
    }

  }
}
</script>


<style scoped>
  .corner-border-box {
    z-index:9;
  }

  .corner-vert {
    position:absolute;
    width:50px;
    height:0;
    border:3px solid rgb(4, 255, 150);    
  }

  .corner-horiz {
    position:absolute;
    width:0;
    height:50px;
    border:3px solid rgb(4, 255, 150);    
  }

  .headline-text {
    float:left;
    font-size:2em;
    text-align:left;
    text-decoration:underline;
    color:rgb(4, 255, 150);
    width:100%;
  }

  .video-container {
    width:900px;
    height:500px;
    overflow:hidden;
    
    
    
  }

  video {
    opacity:0;
    height:540px;
    width:960px;
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
    
    

    overflow:hidden;
  }

  .leftPos {
    left:0;
    transform:translate(0,0);
  }

  img {
    overflow:hidden;
  }

  .portfolio-demos {
    width:100%;
    height:auto;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;

  }

  .portfolio-items {
    width:900px;
    height:auto;
    position:relative;
    overflow:hidden;
    padding:6px;
    transition: width 0.5s;
  }

  .activeScreen {
    width:100%;
  }

  .active {
    opacity:1;
  }

  /* PORTFOLIO PAGES BOXES 
  .save-miss-x {
    top:50px;
    left:0;

    border:3px solid gold;
    height:500px;
    width:900px;
  }

  .marketplace {
    position:absolute;
    top:40px;
    left:calc(50% + 95px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:500px;
    width:900px;
  }

  .the-hills {
    position:absolute;
    top:210px;
    left:calc(50% + 120px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:300px;
    width:200px;
  }

  .dodge-the-virus {
    position:absolute;
    top:370px;
    left:calc(50% - 150px);
    transform:translate(-50%,0);

    border:3px solid gold;
    height:200px;
    width:300px;
  }

  .sabimango-quiz {
    position:absolute;
    top:530px;
    left:calc(50% + 170px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:150px;
    width:300px;
  }

  .black-jack {
    position:absolute;
    top:590px;
    left:calc(50% - 100px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:200px;
    width:200px;
  }

  .day-night-home-page {
    position:absolute;
    top:700px;
    left:calc(50% + 95px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:150px;
    width:150px;
    
  }

  .tomb-raiders {
    position:absolute;
    top:810px;
    left:calc(50% - 150px);
    transform: translate(-50%,0);

    border:3px solid gold;
    height:150px;
    width:300px;
  }



  /*          END          */

</style>