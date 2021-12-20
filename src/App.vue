<template>
  <div id="app">
    <b-container>

      <b-navbar toggleable="lg" type="light" variant="light">
        
        <b-navbar-brand href="#">Курсы валют и конвертер</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" to="/">Список валют</b-nav-item>
            <b-nav-item href="#" to="/converter">Конвертер</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

      </b-navbar>

      <router-view/>

    </b-container>
  </div>
</template>


<script>
export default {
  created(){
    this.$store.dispatch('loadValute');
  }
}
</script>
