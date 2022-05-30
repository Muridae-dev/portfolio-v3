<template>
  <div class="home">
    <h1>{{this.globalVar}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
div {
  background:blue;
}
.home {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  height:100%;
  width:100%;
  z-index:0;
  
}

h1 {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
</style>
