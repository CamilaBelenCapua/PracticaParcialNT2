<template>
 <section class="src-components-formulario">
  <div class="Formulario">
      <h2>Ingreso de pagos</h2>
        <hr>
        <hr> 
        <br>
        <vue-form :state="formState" @submit.prevent="enviar()">
        
          <!-- --------------------- -->
          <!--     Campo nombre      -->
          <!-- --------------------- -->
          <validate tag="div">
            <label for="nombre">Nombre completo</label>
            <input 
              type="text"
              id="nombre"
              name="nombre" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nombre" 
              required 
              :minlength="nombreMinLength"
              no-espacios
            />

            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Este campo requiere como mínimo {{nombreMinLength}} caracteres.
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                No se permiten espacios intermedios en este campo.
              </div>
            </field-messages>
          </validate>
          <br>

          <!-- --------------------- -->
          <!--      Campo documento  -->
          <!-- --------------------- -->
          <validate tag="div">
            <label for="documento">Documento</label>
            <input 
              type="number"
              id="documento"
              name="documento" 
              class="form-control"
              autocomplete="off"
              v-model.number="formData.documento" 
              required 
            />

            <field-messages name="documento" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
          </validate>
          <br>

          <!-- ---------------------------- -->
          <!--      Campo monto a pagar    -->
          <!-- ---------------------------- -->
          <validate tag="div">
            <label for="montoAPagar">Monto a pagar</label>
            <input 
              type="number"
              id="montoAPagar"
              name="montoAPagar" 
              class="form-control"
              autocomplete="off"
              v-model.number="formData.montoAPagar" 
              required 
            />

            <field-messages name="montoAPagar" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            </field-messages>
          </validate>
          <br>

          <!-- -------------------------------- -->
          <!--      Campo pago que realizó      -->
          <!-- -------------------------------- -->
           <validate tag="div">
            <label for="pagoRealizado">Pago que realizó</label>
            <input 
              type="number"
              id="pagoRealizado"
              name="pagoRealizado" 
              class="form-control"
              autocomplete="off"
              v-model.number="formData.pagoRealizado" 
              required 
              :min="montoMin"
            />

            <field-messages name="pagoRealizado" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div slot="min" class="alert alert-danger mt-1">
                  El monto minimo permitido es de es de {{montoMin}} pesos.
              </div>
            </field-messages>
          </validate>
          <br>

          <!-- Botón de envío -->
          <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
        </vue-form>   
      
     
         <hr>

        <table class="table">
          <thead class="table-dark">
            <tr>
                <th>Posicion</th>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Documento</th>
                <th>Monto a Pagar</th>
                <th>Pago Realizado</th>
                <th>Deuda</th>
            </tr>
          </thead>
            <!--<div v-for="(pago,index) in pagos" :key="index">-->
              <tr v-for="(pago,index) in pagosModificados" :key="index" :class="pago.backgroung">
                  <td>{{ index + 1 }}</td>
                  <td>{{pago.fecha}}</td>
                  <td>{{ pago.nombre }}</td>
                  <td>{{ pago.documento }}</td>
                  <td>{{ pago.montoAPagar }}</td>
                  <td>{{ pago.pagoRealizado}}</td>
                  <td>{{ calculoDeuda(pago)}}</td>
               </tr>
            <!--</div>-->
        </table>
      <hr>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        montoMin: 0.01,
        pagos: []
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          documento: '',
           montoAPagar: '',
          pagoRealizado: ''
        }
      },
      enviar() {
        const date = new Date()
        const mes = date.getMonth()+1
        const data = {
          nombre: this.formData.nombre,
          documento: this.formData.documento,
          montoAPagar: this.formData.montoAPagar,
          pagoRealizado: this.formData.pagoRealizado,
          fecha: date.getDate()+"/"+mes+"/"+date.getFullYear(),
        }
        this.pagos.push(data)
        this.formData = this.getInicialData()
        this.formState._reset()  
      },
      calculoDeuda(pago) {
        return pago.montoAPagar - pago.pagoRealizado
      }

    },
    computed: {
      pagosModificados: function () {
    return this.pagos.map((pago) => {
      let background = null
      if(this.calculoDeuda(pago)>0){
        background = "table-danger"  
      }else if(this.calculoDeuda(pago)==0){
        background = "table-success"
      }else{
        background = "table-primary"
      }
      return {
        nombre: pago.nombre,
        documento: pago.documento,
        montoAPagar: pago.montoAPagar,
        pagoRealizado: pago.pagoRealizado,
        fecha: pago.fecha,
        backgroung: background
      }
    })
  }
    }
}
</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  hr {
      background-color: #bbb;
  }  

   .pagoTotal{
    color: green;
  }

  .adeuda{
        background-color: red;
  }

   .aFavor {
      background-color: yellow;
  } 

</style>
