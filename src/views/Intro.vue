<template>
    <div className="logo-background">
    </div>
    
    <div class="logo-container">
        <div className="left-coming-logo">
            <img :src="require('../assets/intro/welcome.png')" style="height:100%; width:auto;"/>
        </div>
        <div className="right-coming-logo">
            <img :src="require('../assets/intro/to.png')" style="height:100%; width:auto;"/>
        </div>
        <div className="fading-in-logo">
            <img :src="require('../assets/intro/muridae.png')" style="height:100%; width:auto;"/>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "Intro"
}
</script>

<style scoped>
@keyframes opacityAnim {
    /*0% {opacity:1;top:0;}
    66% {opacity:1;top:0;}
    90% {opacity:1; top:-100%;}
    100% {opacity:1; top:-100%;}*/
    0% {opacity:1;top:0;pointer-events: all;}
    66% {opacity:1;top:0;pointer-events: all;}
    75% {pointer-events: none;}
    90% {opacity:0; }
}

.logo-background {
    height:100%;
    width:100%;
    background:rgb(0, 0, 0);
    position:absolute;
    top:0%;
    overflow:hidden;
    opacity:0;
    animation: opacityAnim 5s ease;
    z-index: 0;
    pointer-events: none;
  
    text-align:center;
  }


    @keyframes sizeAnim {
        /*0% {opacity:1;top:0;}
        66% {opacity:1;top:0;}
        90% {opacity:1; top:-100%;}
        100% {opacity:1; top:-100%;}*/
        0% {transform: scale(1);z-index:0;}
        66% {transform: scale(1);}
        90% {transform: scale(0.5);z-index:0;}
    }

  .logo-container {
      height:100%;
      width:100%;
      position:absolute;
      top:0%;
      transform: scale(0.5);
      overflow:hidden;
      pointer-events: none;
      opacity:1;

      animation: sizeAnim 5s ease;

      z-index:0;
  }
  
  @keyframes leftAnim {
    0% {left: -400%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(6);}
    50% {left: 60%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(0.15);}
    100% {left:44%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(1);}
  }
  
  .left-coming-logo {
    height:200px;
    width:auto;
    transform:rotate(-8deg) translate(-50%, -50%);
    display:block;
  
    font-size:10rem;
  
    animation: leftAnim 1.5s ease;
    position:absolute;
    top:23%;
    left:44%;
    
  }
  
  @keyframes rightAnim {
    0% {top:300%; }
    50% {top:300%;}
    100% {top:calc(23% + 100px);}
  }
  
  .right-coming-logo {
    height:100px;
    width:auto;
  
    font-size:6rem;
    
    animation: rightAnim 2s ease 0s;
    position:absolute;
    top:calc(23% + 100px);
    left:50%;
    transform:rotate(8deg) translate(-50%);
  }

  @keyframes fadeAnim {
      0% {opacity:0;}
      50% {opacity:0;}
      100% {opacity:1}
  }

  .fading-in-logo {
      height:400px;
      width:auto;

      font-size:10rem;

      animation: fadeAnim 4s ease 0s;
      position:absolute;
      top:calc(23% + 160px);
      left:50%;
      transform:translate(-50%,0);
  }

  @media only screen and (max-width: 750px) { 
    .logo-container {
      transform: scale(0.8);
    }

    .left-coming-logo {
      height:80px;
      left:40%
    }

    .right-coming-logo {
      height:40px;
      top:calc(23% + 90px);
    }

    .fading-in-logo {
      height:180px;
      top:calc(23% + 165px);
    }

    @keyframes sizeAnim {
        /*0% {opacity:1;top:0;}
        66% {opacity:1;top:0;}
        90% {opacity:1; top:-100%;}
        100% {opacity:1; top:-100%;}*/
        0% {transform: scale(1);z-index:0;}
        66% {transform: scale(1);}
        90% {transform: scale(0.8);z-index:0;}
    }

    @keyframes rightAnim {
      0% {top:300%; }
      50% {top:300%;}
      100% {top:calc(23% + 90px);}
    }

    @keyframes leftAnim {
      0% {left: -400%; transform:translate(-50%, -50%) rotate(-8deg)  scaleX(6); /*-webkit-transform:rotate(-8deg)  scaleX(6) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(6) translate(-50%, -50%);*/}
      50% {left: 60%; transform:translate(-50%, -50%) rotate(-8deg)  scaleX(0.15); /*-webkit-transform:rotate(-8deg)  scaleX(0.15) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(0.15) translate(-50%, -50%);*/}
      100% {left:40%; transform:translate(-50%, -50%) rotate(-8deg) scaleX(1); /*-webkit-transform:rotate(-8deg)  scaleX(1) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(1) translate(-50%, -50%);*/}
    }

    @-webkit-keyframes leftAnim {
      0% {left: -400%; transform:translate(-50%, -50%) rotate(-8deg)  scaleX(6); -webkit-transform:rotate(-8deg)  scaleX(6) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(6) translate(-50%, -50%);}
      50% {left: 60%; transform:translate(-50%, -50%) rotate(-8deg)  scaleX(0.15); -webkit-transform:rotate(-8deg)  scaleX(0.15) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(0.15) translate(-50%, -50%);}
      100% {left:40%; transform:translate(-50%, -50%) rotate(-8deg) scaleX(1); -webkit-transform:rotate(-8deg)  scaleX(1) translate(-50%, -50%); -ms-transform: rotate(-8deg)  scaleX(1) translate(-50%, -50%);}
    }

    @media only screen and (max-height: 750px) {
      .left-coming-logo {
        height:80px;
        top:20%;
      }

      .right-coming-logo {
        height:40px;
        top:calc(20% + 90px);
      }

      .fading-in-logo {
        height:180px;
        top:calc(20% + 165px);
      }

      @keyframes rightAnim {
        0% {top:300%; }
        50% {top:300%;}
        100% {top:calc(20% + 90px);}
      }
    }
  }


</style>
