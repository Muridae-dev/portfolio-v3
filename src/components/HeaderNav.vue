<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="hamburger-menu" @click="menuActive = !menuActive">
        <svg fill="gold" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="60px" height="60px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
    </div>
    <nav :class="{active: menuActive}">
        <div :class="[center-align-text]">
            <!--<router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            {{this.globalVar}}-->

            <!-- LOADING A TITLE FOR EACH ITEM IN COMPONENT ARRAY -->
            <div v-for="item in componentArray" :key="item.name" @click="item.isActive = !item.isActive">
                {{item.name}}
            </div>

        </div>
    </nav>
</template>

<script>

    export default {
        name: "HeaderNav",
        data() {
            return {
                menuActive: false,
            }
        },
        props: ["componentArray"],
        methods: {
            
        },

    }

</script>



<style scoped>
    div {
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        z-index: 1;
    }
    nav {
        mix-blend-mode:difference;
        position:fixed;
        left:10%;
        top:5%;

        width:0vw;
        height:5vh;
        border: 3px solid gold;
        border-radius:50px;
        transition: width 1s;
        overflow: hidden;
        z-index: 1;
    }

    .active {
        width: 80vw;
    }

    .hamburger-menu {
        position:fixed;
        top:5%;
        left:5%;
        
        border: 3px solid gold;
        width:100px;
        height:5vh;
        border-radius:100px;
        text-align: center;
    }

    nav a {
        font-size:1.5em;
        color:#fff;
        text-decoration:none;
        
    }

    nav a.router-link-exact-active {
        color:gold;
    }
</style>