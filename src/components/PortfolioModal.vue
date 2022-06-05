<template>
    <div class="modal-mask" @click="closeFunc">
        <div class="modal-container" id="style-4">
            <h1>{{portfolioItem.name}}</h1>
            <div class="video-container">
                <video muted preload="metadata" style="z-index: 1;" autoplay="true">
                    <source :src="require(`../assets/demos/${portfolioItem.name}_demo.mp4`)" type="video/mp4">
                </video>
                
            </div>
            <div class="description-container">
                <p v-for="description in portfolioItem.description" :key="description">
                    {{description}}
                </p>

                <div class="logo-container">
                    <div v-for="logo in portfolioItem.logos" :key="logo" style="padding:5px;">
                        <img :src="require(`../assets/framework-icons/${logo}`)"/>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "PortfolioModal",
    props: ["closeFunc", "portfolioItem"]
    
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
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    animation: opacityAnim 0.3s linear;
    }
    
    .modal-container {
        height:80%;
        width:90%;
        background:black;
        border:3px solid rgb(4, 255, 150);

        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        overflow-y:scroll;
        
    }

    .video-container {
    width:900px;
    height:540px;
    overflow:hidden;
    
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
  }

    img {
        height:100px;
        width:auto;
    }
</style>