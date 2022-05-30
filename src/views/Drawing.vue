<template>
        <vue-drawing-canvas ref="VueDrawingCanvas" 
        :height="600"
        :width="600"
        :styles="{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }"
        :background-color="backgroundColor"
        :color="penColor"
        :line-join="lineJoin"

        />
        <button @click.prevent="$refs.VueDrawingCanvas.undo()">
        UNDO
        </button>
        <input type="color" v-model="backgroundColor"/>
        <input type="color" v-model="penColor" />
        <select v-model="lineJoin">
            <option value="round">lineJoin Round</option>
            <option value="miter">lineJoin Miter</option>
            <option value="bevel">lineJoin Bevel</option>
        </select>
        <select v-model="line">
            <option v-for="n in 25" :key="'option-' + n" :value="n">
              {{ n }}
            </option>
        </select>

        
</template>

<script>
    import VueDrawingCanvas from "vue-drawing-canvas"

    console.log(document.getElementById("container"))
    export default {
        name: "Drawing",
        components: {
            VueDrawingCanvas
        },
        methods: {
            check() {
                console.log(this.$refs.VueDrawingCanvas)
            }
        },
        data() {

            return {
                backgroundColor: "rgb(4, 255, 150)",
                penColor: "#000000",
                lineJoin: "round",
                line: 10,
            }
            
        }
    }
</script>

<style scoped>
    .container {
        height:100%;
        width:100%;

        position:absolute;
        top:0;
        left:0;
    }

    button {
        background:rgb(4, 255, 150);
        border:none;
        color:black;
    }

    input {
        background:rgb(4, 255, 150);
        border:none;
        color:black;
    }


</style>