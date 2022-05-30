<template>
    <img class="draggableImage" :src="imageData.src" :style="{
                height: '150px',
                width: 'auto',
                position: 'absolute',
                top: `${Math.round(Math.random()* 90)}%`,
                left: `${Math.round(Math.random()* 90)}%`,
                transform: 'translate(-50%,-50%)'
            }, {'z-index' : imageData.zIndex}" @mousedown="dragMouseDown($event)"
            @click="testing($event, imageData.zIndex)"
    />
</template>

<script>
export default {
    props: ['imageData'],
    data() {
        return{
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
        testing(e, data) {
            console.log('TARGET STYLE:' + e.target.style.zIndex, 'DATA INDEX' + data)
        },
        // -------------------- DRAG FUNCTIONS --------------------
        dragMouseDown: function(e) {
            if(e.target.className === "draggableImage") {
                e.preventDefault();
                this.positions.clientX = e.clientX;
                this.positions.clientY = e.clientY;
                document.onmousemove = this.startDrag;
                document.onmouseup = this.stopDrag;
            }
        },
        startDrag: function(e) {
            if(e.target.className === "draggableImage") {
                this.positions.movementX = this.positions.clientX - e.clientX;
                this.positions.movementY = this.positions.clientY - e.clientY;
                this.positions.clientX = e.clientX;
                this.positions.clientY = e.clientY;
                console.log(e)
                e.target.style.top = (e.y - this.positions.movementY) + "px";
                e.target.style.left = (e.x - this.positions.movementX) + "px";
            }

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

</style>