<template>
    <section ref="sectionContainer" 
        id="style-4"
        :class="{fullscreen: isFullscreen}" 
        :style="[isFullscreen ? {'top' : '50%', 'left' : '50%'} : {'width': windowedComponent.defaultSizeX,'height' : windowedComponent.defaultSizeY}, {'z-index' : windowedComponent.zIndex}]"
    >
        <div class="top-bar" @mousedown="!isFullscreen && dragMouseDown($event)">
            <div class="title-text">
                {{windowedComponent.name}}
            </div>
            <div class="fullscreen-button" @click="isFullscreen = !isFullscreen">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Resize</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 96h112v112M405.77 106.2L111.98 400.02M208 416H96V304"/></svg>
            </div>
            <div class="close-x" @click="windowedComponent.isActive = !windowedComponent.isActive">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>
            </div>
        </div>
        <slot>
        </slot>
    </section>
</template>

<script>
export default {
    name: "NewWindow",
    props: ["windowedComponent"],
    data() {
        return {
            isFullscreen: false,
            
            // FOR DRAG
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            }
        }
    },
    methods: {
        // -------------------- DRAG FUNCTIONS --------------------
        dragMouseDown: function(e) {
            e.preventDefault();
            this.positions.clientX = e.clientX;
            this.positions.clientY = e.clientY;
            document.onmousemove = this.startDrag;
            document.onmouseup = this.stopDrag;
        },
        startDrag: function(e) {
            this.positions.movementX = this.positions.clientX - e.clientX;
            this.positions.movementY = this.positions.clientY - e.clientY;
            this.positions.clientX = e.clientX;
            this.positions.clientY = e.clientY;
            this.$refs.sectionContainer.style.top = (this.$refs.sectionContainer.offsetTop - this.positions.movementY) + "px";
            this.$refs.sectionContainer.style.left = (this.$refs.sectionContainer.offsetLeft - this.positions.movementX) + "px";
        },
        stopDrag() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        // --------------------      END       --------------------
    }
}
</script>

<style scoped>
    section {
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        height:30vh;
        width:30vw;
        background:black;
        border:3px solid rgb(4, 255, 150);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: width 1s, height 1s;

        overflow-y:auto;
        overflow-x:hidden;
    }

    #style-4::-webkit-scrollbar-track
    {
        border-radius:10px;
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

    .title-text {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        
        cursor:default;
    }


    .fullscreen {
        height:calc(100% - 6px);
        width:calc(100% - 6px);
        transition: top 1s, left 1s, width 1s, height 1s;
    }

    .fullscreen-button {
        position: absolute;
        top:50%;
        left:calc(100% - 60px);
        transform: translate(0,-50%);

        background:rgb(255, 20, 118);
        border-radius:50%;
        height:25px;
        width:25px;

        cursor:pointer;
    }

    .top-bar {
        position:sticky;
        top:0;
        left:0;

        border-bottom: 3px solid rgb(4, 255, 150);
        background:black;
        height:40px;
        width:100%;
        z-index:999;

    }

    .close-x {
        position: absolute;
        top:50%;
        left:calc(100% - 30px);
        transform: translate(0,-50%);

        background:red;
        border-radius:50%;
        height:25px;
        width:25px;

        cursor:pointer;
    }


</style>