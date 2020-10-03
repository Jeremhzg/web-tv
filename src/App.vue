<template>
  <div id="app">
    <TheNavigation />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TheNavigation from "./components/layout/TheNavigation";

export default {
  name: "App",
  components: {
    HelloWorld,
    TheNavigation,
  },
};
</script>

<style lang="scss">
@import "./assets/sass/base.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
