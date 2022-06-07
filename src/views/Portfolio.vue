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
          <img :src="require(`../assets/demos/${item.name}_demo.png`)" :style="item.name == 'marketplace' ? {left: '0', top: '0', transform: 'translate(0,0)'} : null"/>
          <video muted preload="metadata" @mouseover="hoverVideo" @mouseleave="hideVideo" style="z-index: 1;" v-if="windowWidth > 1000">
            <source :src="require(`../assets/demos/${item.name}_demo.mp4`)" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioModal from "../components/PortfolioModal.vue"
import AOS from "aos";


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
      windowWidth: window.innerWidth,
      portfolioItems: [
            {
              name: 'savemissx',
              isActive: false,
              description: [`This is a game I made back in 2019 using haxe & haxeflixel, its a 2d platformer with character features such as: double jumping,
              climbing, running, 5 unique attacks & animations and a power up feature called "RAGE", when activated
              increases character movement-speed and attack-damage for a short window of time.`,
              `It also features 2 kinds of enemies, one flying, one grounded, 7 different stages with three different backgrounds.`,
              `It's built using classes, states, a map editor called "Ogmo editor" and all sprites and textures are handrawn by me using Aseprite.`],
              logos: ["haxe.png", "haxeflixel.png", "aseprite.png", "ogmo.png"],
            },
            {
              name: 'dodgethevirus',
              isActive: false,
              description: [`This is DODGE THE VIRUS! It's a game where you travel between different funky websites in order to reach the final boss, THE DRAGON.
              The journey is full of dangerous VIRUSES that you need to avoid. Being a victim of a virus breaks the game and a restart is needed to continue.`,
              `This was my first project at Hyper Island. As such I wanted to explore as many features, in HTML, CSS & Javascript, as I could and figured the best way was to
              create a whole bunch of different websites, then stringing them together in a sort of "game". The websites are loaded dynamically on the page using Javascript 
              objects and most of the textures are hand-drawn by me using photoshop.`],
              logos: ["javascript.svg", "html.png", "css.png", "jquery.png", "photoshop.svg"]
            },
            {
              name: 'marketplace',
              isActive: false,
              description: [`This was my first introduction to the MERN stack. It's a marketplace demo that features:`,
              `- User registration & login saved to Mongodb with bcrypted passwords`,
              `- User authentication using JSON-webtokens`,
              `- Posting items with images that are saved to the local server using Multer.`,
              `Item creation also features a short description, choosing tags and choosing the color of the description text.`,
              `In the marketplace you can view other users items, filter items using tags and REQUEST TRADEs. When a trade request 
              is made the owner of the item will be notified in the "Inventory" route and can then choose to ACCEPT TRADE, where the requesting user will then aquire said item in 
              their inventory.`],
              logos: ["mongodb.png", "react.png", "nodejs.png"]
            },
            {
              name: 'blackjack',
              isActive: false,
              description: [`My first react project and it's Blackjack based on a deck of cards API https://deckofcardsapi.com/!!`,
              `It has all the necessary blackjack features
              such as: betting, asking for more cards (hitting), losing (busting) with a value over 21, dealer showing only one card until users round is finished, 
              dealer drawing automatically until a value over 16, Aces automatically going between 11 and 1 and dynamically lining up the cards in a viewable manner.`],
              logos: ["react.png", "javascript.svg"]
            },
            {
              name: 'thehills',
              isActive: false,
              description: [`Welcome to the Hills! It's an app where you would be able to buy and own your own viritual apartment. For now it's only a demo,
              in where you can edit one apartment (601) with different posters of your choosing. Other apartments that light up are owned by us, the
              creators, in which we have our own posters. It is setup using the MERN-stack, where the apartments are loaded dynamically using a Mongodb database.`,
              `This was a group project in where the focus was on collaboration. We worked with an agile/scrum setup with weekly sprints, in where my focus was mainly backend
              and functionality`],
              logos: ["mongodb.png", "react.png", "nodejs.png"]
            },
            {
              name: 'quiz',
              isActive: false,
              description: [`A fun quiz made in javascript! It features 6 different types of quizzes, a ghibli-sound quiz, a silhouette quiz, a quiz with dragging/dropping
              pictures, a flashlight quiz, a "dressing room" quiz and a more typical question with X options quiz.`,
              `This was my second group project at Hyper-Island, where our group chose to focus on learning. As such we divided the quizzes for each individual to work on,
              while being available for the group for questions/help throwing ideas around. I worked mainly on the dragging/dropping quiz, flashlight quiz and the visual effects
              inbetween the quizzes.`],
              logos: ["javascript.svg", "html.png", "css.png", "jquery.png"]
            },
            {
              name: 'homepage',
              isActive: false,
              description: [`This was my first group project at Hyper-Island and our goal was to work with local/session-storage. We decided to make a more fun "new-tab" like website
              where you can add your own favourite websites as links to the page, while having a background that changes depending on the time of day (daytime = sun, nighttime = moon & stars)`],
              logos: ["javascript.svg", "html.png", "css.png"]
            },
            {
              name: 'tombraiders',
              isActive: false,
              description: [`The game is called Tomb-Raiders! It's a 2d platformer made in phaser and a tilemap editor called "tiled", it has features such as double-jumping,
              attacking, enemies following you on sight, keys to unlock doors and 4 different levels. All of the sprites and textures are free assets we found online, while the
              spritesheets themselves are handmade by us.`,
              `This was my third group project at Hyper-Island where the focus was making games inside phaser.`],
              logos: ["javascript.svg", "phaser.png"]
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
    height:100%;
    width:100%; 
    z-index: 0;
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

  @media only screen and (max-width: 1000px) { 
  .portfolio-items {
      width:90vw;
      height:auto;
      position:relative;
      overflow:hidden;
      padding:6px;
      transition: width 0.5s;
  }

  .video-container {
    width:90vw;
    height:auto;
    overflow-y:hidden;
    position:relative;
  }

  img {
    width:100%;
    height:auto;
  }

  }


</style>