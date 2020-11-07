<template>
  <div id="app">
    <TheNavigation />
    <Accueil />
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
  background-color: white;

}
</style>
