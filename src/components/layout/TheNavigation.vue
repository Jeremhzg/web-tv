<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" class="logo"><img src="src/images/logoUFC.png" alt="LogoUFC"></b-navbar-brand>
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="../views/Departement.vue">Département</b-nav-item>
          <b-nav-item href="../views/Departement.vue" >Thématique</b-nav-item>
          <b-nav-item href="../views/Departement.vue" >Direct</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Rechercher..."
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
          </b-nav-form>
            <b-nav-item href="#" >Admin</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<style scoped>
  .bg-info {
    background-color: white !important;
    border-bottom: 4px #EF4036 solid;
  }
.navbar-dark .navbar-brand{
    color: black !important;
    padding-right: 5rem;
  }
#nav-collapse > ul li a{
    color: black;
    padding: 0 2rem;
    /* border-left: 1px solid black ; */
    border-right: 1px solid black ;
  }
  #nav-collapse > ul.navbar-nav.ml-auto > li.nav-item > a{
    border-right: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>