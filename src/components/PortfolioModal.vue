<template>
    <div class="modal-mask" @click="closeFunc">
        <div class="modal-container">
            <h1>{{portfolioItem.name}}</h1>
            <div class="video-container">
                <video muted preload="metadata" style="z-index: 1;" autoplay="true">
                    <source :src="require(`../assets/demos/${portfolioItem.name}_demo.mp4`)" type="video/mp4">
                </video>
                
            </div>
            <div class="description-container">
                {{portfolioItem.description}}
            </div>
            <div class="logo-container">
                <div v-for="logo in portfolioItem.logos" :key="logo">
                    <img :src="require(`../assets/framework-icons/${logo}`)"/>

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
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    }
    
    .modal-container {
        height:80%;
        width:80%;
        background:black;
        border:3px solid rgb(4, 255, 150);

        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        
    }

    .video-container {
    width:900px;
    height:500px;
    overflow:hidden;
    
  }

  @media only screen and (min-width: 1800px) {
        .video-container {
            float:left;
        }
    }

    @media only screen and (max-width: 1799px) {
        .video-container {
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
  }


  .logo-container {
      height:150px;
      width:auto;
      margin:auto;
  }

    img {
        height:auto;
        width:100px;
        float:left;
    }
</style>