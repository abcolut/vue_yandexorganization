<template>
  <div id="app">  
    <router-view />
    <about />
  </div>
</template>

<script>
  import about from "./pages/About.vue"
  export default {
    name: 'App',
    components: {about},
    mounted(){
      this.$store.dispatch('org/getOrganizations')
    },
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  #text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2, h3{
  text-align:center;
}
</style>
