<!--Karen Evans
December 16, 2020
Assignment W13C VuePlaylist-->
<template>
  <div id="app">
    <page-body></page-body>
  </div>
</template>

<script>
import PageBody from "./components/Pagebody.vue";
export default {
  name: "App",
  components: {
    PageBody,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #082644;
  margin-top: 60px;
  background-color: darkgreen;
  padding: 25px;
}
</style>
