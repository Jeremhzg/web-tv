<template>
  <div id="app">
    <TheNavigation />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Accueil/>
  </div>
</template>

<script>
import Accueil from "./components/Accueil";
import TheNavigation from "./components/layout/TheNavigation";

export default {
  name: "App",
  components: {
    Accueil,
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
}
</style>
