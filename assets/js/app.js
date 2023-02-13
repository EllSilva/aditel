import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import c_footer from './components/footer.js'
Vue.component('c-footer', c_footer)

import c_slideprodutos from './components/c_slideprodutos.js'
Vue.component('c-slideprodutos', c_slideprodutos)

import c_sobre from './components/c_sobre.js'
Vue.component('c-sobre', c_sobre)

import c_outracat from './components/c_outracat.js'
Vue.component('c-outracategoria', c_outracat)
 
import c_acessorios from './components/c_acessorios.js'
Vue.component('c-acessorios', c_acessorios)

import page_acessorios from './view/info_mult/acessorios.js'
Vue.component('p-acessorios', page_acessorios)
 
import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)
 
import page_computador from './view/info_mult/computador.js'
Vue.component('p-computador', page_computador)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

import page_gps from './view/seguranca/gps.js'
Vue.component('p-gps', page_gps)
import page_cctv from './view/seguranca/cctv.js'
Vue.component('p-cctv', page_cctv)
import page_incendio from './view/seguranca/incendio.js'
Vue.component('p-incendio', page_incendio)
import page_intrusao from './view/seguranca/intrusao.js'
Vue.component('p-intrusao', page_intrusao)
import page_automacao from './view/seguranca/automacao.js'
Vue.component('p-automacao', page_automacao)

import page_energia from './view/energia/home.js'
Vue.component('p-energia', page_energia)

import page_internet from './view/internet/home.js'
Vue.component('p-internet', page_internet)



import page_tv from './view/info_mult/tv.js'
Vue.component('p-tv', page_tv)
import page_telefone from './view/info_mult/telefone.js'
Vue.component('p-telefone', page_telefone)
 
Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } }, 
    
    { path: '/gps', component: { template: '<p-gps></p-gps>' } },
    { path: '/cctv', component: { template: '<p-cctv></p-cctv>' } },
    { path: '/fire', component: { template: '<p-incendio></p-incendio>' } },
    { path: '/intrusao', component: { template: '<p-intrusao></p-intrusao>' } },
    { path: '/automacao', component: { template: '<p-automacao></p-automacao>' } },
     
     { path: '/solar', component: { template: '<p-energia></p-energia>' } },
     { path: '/telecomunicacao', component: { template: '<p-internet></p-internet>' } },
 
     { path: '/acessorios', component: { template: '<p-acessorios></p-acessorios>' } },

     { path: '/computador', component: { template: '<p-computador></p-computador>' } },
     { path: '/telefone', component: { template: '<p-telefone></p-telefone>' } },
     { path: '/tv', component: { template: '<p-tv></p-tv>' } },
     
   
]

const router = new Router({ routes })

new Vue({
    router,
    data: {
   
    },

  
}).$mount('#app')

;(async () => { })()