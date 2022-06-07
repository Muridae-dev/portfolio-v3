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
  <footer>
    
    <div class="icon-container">
    <a href="https://github.com/Muridae-dev">
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Github</title><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/noah-lundberg-02142021b/">  
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Linkedin</title><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/></svg>
    </a>
    <a href="https://www.instagram.com/noahlundis/"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
    </a>
    </div>
    THIS SITE WAS MADE USING VUE.JS <br/>
    NOAH LUNDBERG 2022 - nhlund@gmail.com
  </footer>
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
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

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

  svg {
    filter:invert(100%);
    width:80px;

    padding-left:10px;
    padding-right:10px;
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

  footer {
    position:relative;
    height:150px;
    padding-top:100px;
    padding-bottom:100px;
    width:100vw;
    background:black;
    text-align:center;
    font-family: 'Source Code Pro', monospace;
  }

  .icon-container {
    height:90px;
    width:400px;
    margin:auto;

    
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