<template>
    <section ref="sectionContainer" 
        id="style-4"
        :class="{fullscreen: isFullscreen}" 
        :style="[isFullscreen ? {'top' : '50%', 'left' : '50%'} : {'width': windowedComponent.defaultSizeX,'height' : windowedComponent.defaultSizeY}, {'z-index' : windowedComponent.zIndex}]"
    >
        <div class="top-bar" @mousedown="!isFullscreen && dragMouseDown($event)">
            <div class="fullscreen-button" @click="isFullscreen = !isFullscreen">
                FULLSCREEN
            </div>
            <div class="close-x" @click="windowedComponent.isActive = !windowedComponent.isActive">
                X
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
        transition: width 1s, height 1s;

        overflow-y:auto;
        overflow-x:hidden;
    }

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


    .fullscreen {
        height:calc(100% - 6px);
        width:calc(100% - 6px);
        transition: top 1s, left 1s, width 1s, height 1s;
    }

    .fullscreen-button {
        float:left;
    }

    .top-bar {
        position:sticky;
        top:0;
        left:0;

        border-bottom: 3px solid rgb(4, 255, 150);
        background:black;
        height:20px;
        width:100%;
        z-index:999;

    }

    .close-x {
        float:right;

        background:red;
        border-radius:70px;
        height:100%;
        width:30px;
    }


</style>