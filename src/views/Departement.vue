<template>
  <div id="app">
        <TheNavigation />
        <Accueil />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Accueil from "../components/Accueil";
import TheNavigation from "../components/layout/TheNavigation";

export default {
  name: "App",
  components: {
    Accueil,
    TheNavigation,
  }
}
</script>
