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
              description: [`I've loved video-games since I was 5 years old and got my first GameBoy-Color and since then I've always thought about
              making my own games. Back in 2019 I was between two jobs and decided to put the time I had into making my own game "SavemissX".
              I was looking around at many different frameworks, but many of them had a lot of graphical interfaces and I was more interested in raw coding
              so I found Haxe/Haxeflixel. It's a "High-level strictly-typed programming language", and in my experience somewhat similar to Java,
              games are built using classes, states that work very much in the same way as they do in Java.`,
              `I began by following a tutorial on Haxeflixels website on how to create a simple overhead 2d-dungeon-runner. After I got the basics down I
              started improvising, changing large parts of code, changing gravity, etc. to fit a 2d-platformer rather than dungeon-runner. I got a lot of inspiration 
              from their API-docs and I also found a tool called Aseprite that is an easy to use pixel-art editor to make my own sprites and backgrounds.`,
              `In about two months of work I ended up with, "SavemissX" a 2d-platformer with many different features such as: double jumping, 
              climbing, running, 5 unique attacks & animations and a power up feature called "RAGE". It also features 2 kinds of enemies, one flying, one grounded, 
              7 different stages with 3 different backgrounds.`,
              `Working with the game I learned a lot about coding that I had only vaguely understood in the past. Using that new experience allowed me to keep finding new
              solutions to problems, which sort of "unlocked" new things I could add into my game, like powerups and new attacks, which was like a game in it of itself.`,
              ],
              logos: ["haxe.png", "haxeflixel.png", "aseprite.png", "ogmo.png"],
              githubLink: "https://github.com/Muridae-dev/Savemissx"
            },
            {
              name: 'dodgethevirus',
              isActive: false,
              description: [`This is DODGE THE VIRUS! It's a game where you travel between different funky websites in order to reach the final boss, THE DRAGON.
              The game is full of dangerous VIRUSES that you need to avoid. Being a victim of a virus breaks the game you need to restart to continue.`,
              `This was my first project at Hyper Island, where we got introduced to HTML, CSS & Javascript and our task was just to use those languages in our project. 
              I really wanted to try out as many features within vanilla CSS/JS as possible and figured the best way was to create a whole bunch of different websites, 
              with different features and functions then bring it all together in a sort of "game", where you navigate those websites.`, `All the pages including their CSS & JS 
              are loaded dynamically through objects and most of the textures are hand drawn by me.`],
              logos: ["jquery.png", "photoshop.svg"],
              githubLink: "https://github.com/Muridae-dev/dodgethevirus"
            },
            {
              name: 'marketplace',
              isActive: false,
              description: [`This was a project at Hyper Island during our module Data interaction, where our task was to host and use some type of server and requesting
              information from said server. A recommendation was to make E-commerce websites and I wanted to take that to the next level and got the idea to make something 
              similar to "Ebay", where users could also interact with the backend, by creating their own accounts, posting their own items to the marketplace and being able 
              to trade said items with other users.`,
              `So what I ended up with is a marketplace demo that features:`,
              `- A fully built MERN-Stack`,
              `- User registration & login saved to Mongodb with bcrypted passwords`,
              `- User authentication using JSON-webtokens`,
              `- Posting items with images that are saved to the local server using Multer.`,
              `- Item creation also features a short description, choosing tags and choosing the color of the description text.`,
              `In the marketplace you can view other users items, filter items using tags and REQUEST TRADEs. When a trade request 
              is made the owner of the item will be notified in the "Inventory" route and can then choose to ACCEPT TRADE, where the requesting user will then aquire said item in 
              their inventory.`],
              logos: ["mongodb.png", "react.png", "nodejs.png"],
              githubLink: "https://github.com/Muridae-dev/di_brief"
            },
            {
              name: 'blackjack',
              isActive: false,
              description: [`This was my first introduction to component based frameworks where my task was to create an app using
              a component based framework, working with an API. I decided to work with react and to make a Blackjack game based on a deck of cards API https://deckofcardsapi.com/.`,
              `I had a nice, simple goal, make blackjack and while the idea was simple it was harder than I anticipated. Figuring out features 
              such as: betting, asking for more cards (hitting), losing (busting) with a value over 21, dealer showing only one card until users round is finished, 
              dealer drawing automatically until a value over 16, Aces automatically going between 11 and 1, dynamically lining up the cards in a viewable manner, etc.`,
              `It was a lot of fun and taught me a lot about React and using API:s/JSON-files. I thought it was really cool to use states that 
              automatically re-renders the site without having to use .innerHTML also being able to send those values to other components as props to use, WOW!
              The structure for the code was really nice aswell, using components kind of solves that problem on its own. All that code in one JS document,
              that would suck.`,
              ],
              logos: ["react.png"],
              githubLink: "https://github.com/Muridae-dev/blackjack"
            },
            {
              name: 'thehills',
              isActive: false,
              description: [`Welcome to the Hills! This was a group project with a focus on collaboration, working in an Agile-manner and coding together to create an E-commerce site. 
              We decided to build our project using the MERN-stack and since I had made a MERN-stack in my previous project (Marketplace), I was able to lead the team through 
              how to create and setup a simple stack with an easy-to-understand structure. It was fun and challenging to share knowledge with the team, explaning in different ways 
              for it to make sense to the team, while also gaining new knowledge and understanding through pair- and mob-programming.`,
              `We worked with an agile/scrum setup with weekly sprints, reviews, daily standups and switched around the roles of scrum master and project owner weekly during the
              project, to let everyone in the team try their hand.`,
              `The idea for the app was for users to be able to buy and own their own viritual apartments. In the app you can edit one apartment (601) with different posters 
              of your choosing. Other apartments that light up are owned by us, the creators, in where we have our own posters setup. Apartments are loaded dynamically using a 
              Mongodb database, fetching JSON data, using it as objects and looping through them to load the apartments.`,
              `During the project we talked a lot about working with a focus of value to the customer, due to our short timeline our focus was to make sure the "customer" would be
              able to understand and interact with the base concept of the product to see if it was something they found valuable, in which I think we succeeded.`
              ],
              logos: ["mongodb.png", "react.png", "nodejs.png"],
              githubLink: "https://github.com/iseneld/m8__e-commerce"
            },
            {
              name: 'homepage',
              isActive: false,
              description: [`This was my first group project at Hyper-Island and our goal was to work with local- and session-storage. We decided to make a more fun "new-tab" like website
              where you can add your own favourite websites as links on the page. We wanted to spice it up with a background that changes depending on the time of day (daytime = sun, 
              nighttime = moon & stars)`,
              `As I had some prior experience with coding, I was given the role of project-lead, structuring tasks, helping out to solve coding problems and keeping a good 
              working environment. It was a fun and challenging experience and having great reception on my skills as a leader motivated me to keep leading the team in our
              next project and in many projects since.`,
              `I had a lot of fun helping my teammates, finding ways to explain solutions in ways that made sense to them and in terms of coding to work with the math of creating 
              positioning for the sun/moon based on time of day and implementing it with code, aswell as dynamically adding new website boxes based on the items saved to local-storage.`],
              logos: [],
            },
            {
              name: 'tombraiders',
              isActive: false,
              description: [`This was my third group project at Hyper-Island where we were to make games inside "Phaser", a framework to make games in Javascript. Because of my 
              prior experience with game-programming and my team had heard from my old team about their experience with me as team leader I was voted to be team leader. 
              I was structuring weekly sprints for the team to cover, helped them with coding problems and basics of game-design. We worked mostly on our own, working on features
              seperately, since we figured it would be easier for us to learn and more efficient in terms of progress.`,
              `What we came up with is a 2d platformer called "Tomb Raiders"! It's build using phaser and tilemap editor called "tiled", where you can easily create and edit your
              own game-maps.`,
              `The game includes features such as double-jumping, attacking, enemies following you on sight, keys to unlock doors and 4 different levels. We used free assets for
              sprites and textures found online since we wanted to focus more on coding and learning.`,
              ],
              logos: ["phaser.png"],
              githubLink: "https://github.com/Muridae-dev/TombRaider"
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