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
    </div>
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
              description: [`I've been fascinated by video-games since I was 5 years old and got Pokemon Silver on GameBoy-Color and have ever since wanted
              to make my own games. Back in 2019 I was between two jobs and decided to put the time I had into making my own game "SavemissX".
              I was looking around at many different frameworks but many of them had a lot of graphical interfaces and I was more interested in raw coding
              and found Haxe/Haxeflixel. It's a "High-level strictly-typed programming language", and in my experience somewhat similar to Java,
              it is built using classes, states and functions/variables work very much in the same way as they do in Java.`,
              `I began by following a tutorial on Haxeflixels website on how to create a simple overhead 2d-dungeon-runner. After I got the basics down I
              started working on my own, changing large parts of code to fit a 2d-platformer rather than dungeon-runner, finding help and inspiration from their API-docs. 
              I also found a tool called Aseprite that is an easy to use pixel-art editor to make my own sprites and backgrounds.`,
              `In about two months of work I ended up with what you see now, "SavemissX" a 2d-platformer with many different features such as: double jumping, 
              climbing, running, 5 unique attacks & animations and a power up feature called "RAGE". It also features 2 kinds of enemies, one flying, one grounded, 
              7 different stages with 3 different backgrounds.`,
              `It was so much fun to create my own game and I learned a lot about coding that I had only vaguely understood in the past and it was
              great to be able to use that new knowledge in order to explore and try out different solutions for problems that arised.`,
              ],
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
              logos: ["jquery.png", "photoshop.svg"]
            },
            {
              name: 'marketplace',
              isActive: false,
              description: [`This was a project for our module Data interaction, where our task was to work with backend, using some type of server and requesting
              information from said server. While most people in class wanted to make E-commerce websites, I wanted to make something similar to "Ebay", where users
              could also interact with the backend, by creating their own accounts, posting their own items to the marketplace and being able to trade said items with
              other users.`,
              `So what I ended up with is a marketplace demo that features:`,
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
              description: [`I made this during our module "My first web-app" where we got introduced to component based frameworks and our task was to create an app using
              said frameworks while working with an API. I decided to work with react and to make a Blackjack game based on a deck of cards API https://deckofcardsapi.com/.`,
              `It was nice to have a simple goal, make blackjack, while being able to tackle the challanges that arose with creative solutions
              such as: betting, asking for more cards (hitting), losing (busting) with a value over 21, dealer showing only one card until users round is finished, 
              dealer drawing automatically until a value over 16, Aces automatically going between 11 and 1, dynamically lining up the cards in a viewable manner, etc.`,
              `I also found components compelling creating a natural easy-to-understand structure without thinking to much and being able to change a value in a state and it 
              automatically re-renders the site without having to use .innerHTML also being able to send those values to other components as props to use, WOW!`,
              ],
              logos: ["react.png"]
            },
            {
              name: 'thehills',
              isActive: false,
              description: [`Welcome to the Hills! This was a group project in where the focus was on collaboration, working together to create a E-commerce site. 
              As I had deepdived into the MERN-stack in my previous project (Marketplace) I knew what tasks was required to complete in order to get a functioning, 
              well structured MERN-stack. It was fun and challenging to share knowledge in a way that was easy to understand, gain new knowledge & understanding from
              my team and having a team to bounce ideas off of.`,
              `We worked with an agile/scrum setup with weekly sprints, I took the role as scrum-master one week and project-owner another week and took a lot of initiative
              to create bite-sized tasks for the team to complete.`,
              `The idea for the app was for users to be able to buy and own their own viritual apartments. We were somewhat short on time so for now it's only a demo,
              in where you can edit one apartment (601) with different posters of your choosing. Other apartments that light up are owned by us, the
              creators, in which we have our own posters. It is setup using the MERN-stack, where the apartments are loaded dynamically using a Mongodb database.
              We talked a lot about working with a focus of value to the customer so due to our short timeline we wanted to make sure the "customer" would be able to understand
              and interact with the base concept of the product to see if it was something they found valuable.`
              ],
              logos: ["mongodb.png", "react.png", "nodejs.png"]
            },
            {
              name: 'homepage',
              isActive: false,
              description: [`This was my first group project at Hyper-Island and our goal was to work with local/session-storage. We decided to make a more fun "new-tab" like website
              where you can add your own favourite websites as links to the page, while having a background that changes depending on the time of day (daytime = sun, nighttime = moon & stars)`,
              `As I had prior experience with coding, I took on the role of project-lead, structuring tasks, helping out to solve problems when they arose, and keeping a good working relationship
              in the team and with team-members. It was a fun and challenging experience and having great reception on my skills as a leader motivated me to keep leading the team in our
              next project we worked together.`,
              `In terms of coding I had a lot of fun to working with the math of creating positioning for the sun/moon based on time of day and implementing it with code, aswell as
              dynamically adding new website boxes based on the items saved to local-storage.`],
              logos: []
            },
            {
              name: 'tombraiders',
              isActive: false,
              description: [`This was my third group project at Hyper-Island where the focus was making games inside phaser. As my new team had heard from my old team about their
              experience with me as team leader and with my prior experience with game-programming I was voted to be team leader. It was fun to work together with my team to find
              a way to create a game we all had fun working with, aswell as creating an structuring tasks in forms of weekly sprints.`,
              `What we came up with is a 2d platformer called "Tomb Raiders", it's made in a javascript framework called phaser that revolves around using classes and states and a 
              tilemap editor called "tiled", where we could easily edit our game-maps.`,
              `The game includes features such as double-jumping, attacking, enemies following you on sight, keys to unlock doors and 4 different levels. Since our focus was on 
              coding and learning we found using free assets found online in form of sprites and textures the way to go.`,
              ],
              logos: ["phaser.png"]
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

    overflow-x: hidden;
  }

  .icon-container {
    height:90px;
    width:auto;
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

  footer {
    position:relative;
    left:50%;
    transform:translateX(-50%);
    height:150px;
    padding-top:100px;
    padding-bottom:100px;
    width:90vw;
    background:black;
    text-align:center;
    font-family: 'Source Code Pro', monospace;

    overflow-x: hidden;
  }


  svg {
    filter:invert(100%);
    width:50px;

    padding-left:10px;
    padding-right:10px;
  }

  }


</style>