import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import c_footer from './components/footer.js'
Vue.component('c-footer', c_footer)

import c_oferecer from './components/oferecer.js'
Vue.component('c-oferecer', c_oferecer)

import c_sobre from './components/c_sobre.js'
Vue.component('c-sobre', c_sobre)
  
import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)
 
import page_informatica from './view/informatica/home.js'
Vue.component('p-informatica', page_informatica)

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

import page_energia from './view/energia/home.js'
Vue.component('p-energia', page_energia)

import page_internet from './view/internet/home.js'
Vue.component('p-internet', page_internet)

import page_acessorio from './view/acessorio/home.js'
Vue.component('p-acessorio', page_acessorio)
 
import page_cabos from './view/acessorio/cabos.js'
Vue.component('p-cabos', page_cabos)
import page_monitores from './view/acessorio/monitores.js'
Vue.component('p-monitores', page_monitores)
import page_armazenagem from './view/acessorio/armazenagem.js'
Vue.component('p-armazenagem', page_armazenagem)
import page_alimentacao from './view/acessorio/alimentacao.js'
Vue.component('p-alimentacao', page_alimentacao)
import page_audio from './view/acessorio/audio.js'
Vue.component('p-audio', page_audio)
import page_ahdsolu from './view/acessorio/ahdsolu.js'
Vue.component('p-ahdsolu', page_ahdsolu)

import page_diversos from './view/diversos/home.js'
Vue.component('p-diversos', page_diversos)

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

     { path: '/computador', component: { template: '<p-informatica></p-informatica>' } },
     { path: '/solar', component: { template: '<p-energia></p-energia>' } },
     { path: '/telecomunicacao', component: { template: '<p-internet></p-internet>' } },

     { path: '/acessorio', component: { template: '<p-acessorio></p-acessorio>' } },
     { path: '/cabos', component: { template: '<p-cabos></p-cabos>' } },
     { path: '/monitores', component: { template: '<p-monitores></p-monitores>' } },
     { path: '/store', component: { template: '<p-armazenagem></p-armazenagem>' } },
     { path: '/alime', component: { template: '<p-alimentacao></p-alimentacao>' } },
     { path: '/audio', component: { template: '<p-audio></p-audio>' } },
     { path: '/ahdsolu', component: { template: '<p-ahdsolu></p-ahdsolu>' } },

     { path: '/diversos', component: { template: '<p-diversos></p-diversos>' } },
     { path: '/logistica', component: { template: '<p-logistica></p-logistica>' } },
     
]

const router = new Router({ routes })

new Vue({
    router,
    data: {
   
    },

  
}).$mount('#app')

;(async () => { })()