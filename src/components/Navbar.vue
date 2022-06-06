 <template>
 <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- Ruta al componente Formulario -->
          <li class="nav-item">
            <router-link to="/Formulario">
              <a class="nav-link" href="#">Pagos Realizados</a>
            </router-link>
          </li>

            <!-- Ruta al componente RespuestasParcial -->
          <li class="nav-item">
            <router-link to="/RespuestasParcial">
              <a class="nav-link" href="#">Respuestas Parcial</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
