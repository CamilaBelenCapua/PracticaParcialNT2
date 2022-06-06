import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './components/Formulario.vue'
import RespuestasParcial from './components/RespuestasParcial.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/Formulario' },
        { path: '/Formulario', component: Formulario },
        { path: '/RespuestasParcial', component: RespuestasParcial },
    ]
})