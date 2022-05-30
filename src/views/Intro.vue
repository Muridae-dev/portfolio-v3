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

      animation: sizeAnim 5s ease;

      z-index:0;
  }
  
  @keyframes leftAnim {
    0% {left: -200%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(6);}
    50% {left: 60%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(0.15);}
    100% {left:44%; transform:rotate(-8deg) translate(-50%, -50%) scaleX(1);}
  }
  
  .left-coming-logo {
    height:12rem;
    width:auto;
    transform:rotate(-8deg) translate(-50%, -50%);
  
    font-size:10rem;
  
    animation: leftAnim 1.5s ease;
    position:absolute;
    top:calc(43% - 15rem);
    left:44%;
    
  }
  
  @keyframes rightAnim {
    0% {top:300%; }
    50% {top:300%;}
    100% {top:calc(43% - 7rem);}
  }
  
  .right-coming-logo {
    height:6rem;
    width:auto;
  
    font-size:6rem;
    
    animation: rightAnim 2s ease 0s;
    position:absolute;
    top:calc(43% - 7rem);
    left:50%;
    transform:rotate(8deg) translate(-50%);
  }

  @keyframes fadeAnim {
      0% {opacity:0;}
      50% {opacity:0;}
      100% {opacity:1}
  }

  .fading-in-logo {
      height:30rem;
      width:auto;

      font-size:10rem;

      animation: fadeAnim 4s ease 0s;
      position:absolute;
      top:calc(43% - 2rem);
      left:50%;
      transform:translate(-50%);
  }
</style>
