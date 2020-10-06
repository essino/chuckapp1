<template>
  <div id="app">
    <h1>Cute animals feat. Chuck Norris</h1>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/addpics'>Add Pics</router-link>
      <router-link to='/showpics'>Show Pics</router-link>
      <router-link to='/api'>API</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

//npm run serve -- --port 3000
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;;
  font-size: large;

}
body, html {
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;

  padding: 0;

  width: 100%;
  min-height: 100vh;
}
body {
 background-image: url("http://www.zingerbugimages.com/backgrounds/purple_christmas_lights_out_of_focus_seamless_texture.jpg");

}


div{
  background-color: darkorchid;
  margin: 20px;
  width: 70%;
  margin: auto;







}








</style>
