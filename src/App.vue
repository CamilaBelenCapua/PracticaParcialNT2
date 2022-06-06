<template>
  <div id="app">
       <Navbar/>
       <router-view></router-view>
       <!--<Formulario />-->
  </div>
</template>

<script>
//import Formulario from './components/Formulario.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    //Formulario,
    Navbar
  }
}
</script>

<style>

</style>
