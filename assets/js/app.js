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

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)
 
import page_computador from './view/info_mult/computador.js'
Vue.component('p-computador', page_computador)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

import page_seguranca from './view/seguranca/home.js'
Vue.component('p-seguranca', page_seguranca)
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

import page_info_mult from './view/info_mult/home.js'
Vue.component('p-info_mult', page_info_mult)
 
import page_cabos from './view/info_mult/cabos.js'
Vue.component('p-cabos', page_cabos)
import page_monitores from './view/info_mult/monitores.js'
Vue.component('p-monitores', page_monitores)
import page_armazenagem from './view/info_mult/armazenagem.js'
Vue.component('p-armazenagem', page_armazenagem)
import page_alimentacao from './view/info_mult/alimentacao.js'
Vue.component('p-alimentacao', page_alimentacao)
import page_audio from './view/info_mult/audio.js'
Vue.component('p-audio', page_audio)
import page_ahdsolu from './view/info_mult/ahdsolu.js'
Vue.component('p-ahdsolu', page_ahdsolu)

import page_tv from './view/info_mult/tv.js'
Vue.component('p-tv', page_tv)
import page_telefone from './view/info_mult/telefone.js'
Vue.component('p-telefone', page_telefone)

import page_logistica from './view/logistica/home.js'
Vue.component('p-logistica', page_logistica)

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } },
    { path: '/seguranca', component: { template: '<p-seguranca></p-seguranca>' } },
    { path: '/gps', component: { template: '<p-gps></p-gps>' } },
    { path: '/cctv', component: { template: '<p-cctv></p-cctv>' } },
    { path: '/fire', component: { template: '<p-incendio></p-incendio>' } },
    { path: '/intrusao', component: { template: '<p-intrusao></p-intrusao>' } },
    { path: '/automacao', component: { template: '<p-automacao></p-automacao>' } },
    

     { path: '/computador', component: { template: '<p-computador></p-computador>' } },
     { path: '/solar', component: { template: '<p-energia></p-energia>' } },
     { path: '/telecomunicacao', component: { template: '<p-internet></p-internet>' } },

     { path: '/informatica&multimidia', component: { template: '<p-info_mult></p-info_mult>' } },
     { path: '/cabos', component: { template: '<p-cabos></p-cabos>' } },
     { path: '/monitores', component: { template: '<p-monitores></p-monitores>' } },
     { path: '/store', component: { template: '<p-armazenagem></p-armazenagem>' } },
     { path: '/alime', component: { template: '<p-alimentacao></p-alimentacao>' } },
     { path: '/audio', component: { template: '<p-audio></p-audio>' } },
     { path: '/ahdsolu', component: { template: '<p-ahdsolu></p-ahdsolu>' } },

     { path: '/telefone', component: { template: '<p-telefone></p-telefone>' } },
     { path: '/tv', component: { template: '<p-tv></p-tv>' } },
     { path: '/logistica', component: { template: '<p-logistica></p-logistica>' } },
   
]

const router = new Router({ routes })

new Vue({
    router,
    data: {
   
    },

  
}).$mount('#app')

;(async () => { })()