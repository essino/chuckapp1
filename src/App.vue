<template>
  <div id="app">
    <h1>Cute animals feat. Chuck Norris</h1>
    <nav>
      <router-link to='/'>Home </router-link>
      <router-link to='/addpics'>Add </router-link>
      <router-link to='/showpics'>Show </router-link>
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
    text-align: center;

    background-color: darkorchid;
    content: '';
    display: block;
    position: absolute;
    top: 5%;
    left: 15%;
    right: 15%;
    /*bottom: 100px;*/
    z-index: -1;

  }

  img {
    width: 70%;
  }

  button {
    background-color: white;
  }

  body {
    background-image: url("http://www.zingerbugimages.com/backgrounds/purple_christmas_lights_out_of_focus_seamless_texture.jpg");
  }

  /*mitähän tämä tekee?*/
  body, html {

    color: #2c3e50;

  }

  #smallPic {
    width: 20%;
  }










</style>
