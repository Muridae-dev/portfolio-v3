<template>
    <div class="modal-mask" @click="closeFunc">
    </div>

        <div class="modal" id="style-4">
            <div class="close-x" @click="closeFunc">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </div>
            <h1>{{portfolioItem.name}}</h1>
            <div class="video-container">
                <video muted preload="metadata" style="z-index: 1;" autoplay="true" controls>
                    <source :src="require(`../assets/demos/${portfolioItem.name}_demo.mp4`)" type="video/mp4">
                </video>
                
            </div>
            <div class="description-container">
                <p v-for="description in portfolioItem.description" :key="description">
                    {{description.toString()}}
                </p>

                <div class="logo-container">
                    <div v-for="logo in portfolioItem.logos" :key="logo" style="padding:5px;">
                        <img :src="require(`../assets/framework-icons/${logo}`)"/>

                    </div>
                </div>
            </div>
            
        </div>

    
</template>

<script>
export default {
    name: "PortfolioModal",
    props: ["closeFunc", "portfolioItem"],

    
}
</script>

<style scoped>

    #style-4::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: black;
    }

    #style-4::-webkit-scrollbar
    {
        width: 10px;
        background-color: blue;
    }

    #style-4::-webkit-scrollbar-thumb
    {
        background-color: rgb(4, 255, 150);
        border: 2px solid rgb(4, 255, 150);
    }



    @keyframes opacityAnim {

        0% {opacity:0;}
        100% {opacity:1;}

    }
    .modal-mask {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        animation: opacityAnim 0.3s linear;
    }

    
    .modal {
        height:80vh;
        width:90vw;
        background:black;
        border:3px solid rgb(4, 255, 150);

        position: fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        overflow-y:scroll;

        z-index: 10;

        
        
    }

    .close-x {
        position: sticky;
        top:40px;
        left:calc(100% - 50px);
        transform: translate(0,-50%);


        height:40px;
        width:40px;

        cursor:pointer;
    }

    .video-container {
        width:900px;
        height:540px;
        overflow:hidden;
    
  }

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

  p {
      font-family: 'Space Grotesk', sans-serif;
      font-size:1em;
  }

  @media only screen and (min-width: 1800px) {
        .video-container {
            float:left;
            padding-left:3%;
        }

        .description-container {
            float:left;
        }
    }

    @media only screen and (max-width: 1799px) {
        .video-container {
            margin:auto;
        }

        .description-container {
            margin:auto;
        }
    }

    video {
        height:540px;
        width:960px;
        
        overflow:hidden;
    }

    .description-container {
        min-height: 400px;
        width:600px;
        padding-left:5%;
        text-align: left;
    }


    .logo-container {
        height:150px;
        width:600px;
        margin:auto;
        padding-top:5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    img {
        height:100px;
        width:auto;
    }

    @media only screen and (max-width: 1000px) { 
        .video-container {
            width:80vw;
            height:auto;
            overflow-y:hidden;
        }

        video {
            width:90vw;
            height:auto;
        }

        .description-container {
            width:60vw;
        }

        .logo-container {
            width:60vw;
        }

    }
</style>