<template>
  <div id="app">
    <h1>Cute animals - with a Chuck Norris twist</h1>
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

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*background-image: url("../images/71377.jpg");*/

}
</style>
