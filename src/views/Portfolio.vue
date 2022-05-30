<template>
  <section class="portfolio-demos" style="z-index: 0;">
    <div v-for="item in portfolioItems" :key="item.name" class="portfolio-items">
      <span style="float:left;">{{item.name}}</span>

      <div class="corner-border-box" style="position:absolute;top:58px;left:0;">
        <div class="corner-horiz"></div>
        <div class="corner-vert"></div>
      </div>

      <div class="corner-border-box" style="position:absolute;top:58px;left:100%; transform:rotate(90deg);">
        <div class="corner-horiz"></div>
        <div class="corner-vert"></div>
      </div>

      <div class="corner-border-box" style="position:absolute;top:calc(100%);left:0; transform:rotate(270deg);">
        <div class="corner-horiz"></div>
        <div class="corner-vert"></div>
      </div>

      <div class="corner-border-box" style="position:absolute;top:calc(100%);left:calc(100%); transform:rotate(180deg);">
        <div class="corner-horiz"></div>
        <div class="corner-vert"></div>
      </div>
      
      <div class="video-container">
        <img :src="require(`../assets/demos/${item.name}_demo.png`)" style="height:100%;width:100%; z-index: 0;"/>
        <video muted preload="metadata" @mouseover="hoverVideo" @mouseleave="hideVideo" style="z-index: 1;">
          <source :src="require(`../assets/demos/${item.name}_demo.mp4`)" type="video/mp4">
        </video>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      portfolioItems: [
            {
              name: 'savemissx'
            },
            {
              name: 'thehills'
            },
            {
              name: 'dodgethevirus'
            },
            {
              name: 'blackjack'
            },
            {
              name: 'marketplace'
            },
            {
              name: 'quiz'
            },
            {
              name: 'homepage'
            },
            {
              name: 'tombraiders'
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

  span {
    float:left;
    font-size:2em;
    text-decoration:underline;
    color:rgb(4, 255, 150);
  }

  .video-container {
    width:900px;
    height:500px;
    overflow:hidden;
    
    
  }

  video {
    opacity:0;
    transition:opacity 0.5s;
    height:540px;
    width:960px;
    position:absolute;
    left:50%;
    transform:translate(-50%,0);
    

    overflow:hidden;
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