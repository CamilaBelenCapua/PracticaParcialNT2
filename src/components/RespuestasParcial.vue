<template>
    <section class="src-components-RespuestasParcial">
        <table class="table table-dark">
            <tr>
                <th>Numero de pregunta</th>
                <th>Respuesta</th>
            </tr>
            <tr>
                <td>1</td>
                <td>a</td>
            </tr>
            <tr>
                <td>2</td>
                <td>a</td>
            </tr>
            <tr>
                <td>3</td>
                <td>b</td>
            </tr>
        </table>
    </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-RespuestasParcial',
    props: [],
    mounted () {
        console.log('Entro en mount de respuestas')
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
  .src-components-RespuestasParcial {
  }
</style>
