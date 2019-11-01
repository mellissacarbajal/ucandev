import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import ListaBloque from "@/components/ListaBloque.vue";
import BloqueLeer from "@/components/BloqueLeer.vue";
import BloqueWhile from "@/components/BloqueWhile.vue";
import BloqueImprimir from "@/components/BloqueImprimir.vue";
import BloqueCondicional from "@/components/BloqueCondicional.vue";
import BloqueDoWhile from "@/components/BloqueDoWhile.vue";
import BloqueVariable from "@/components/BloqueVariable.vue";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

let app = ''
const firebaseConfig = {
  apiKey: "AIzaSyC0H6bdvq5yKB9Ox4mjrstdlvI6WoUTBWY",
  authDomain: "ucandev-aad8a.firebaseapp.com",
  databaseURL: "https://ucandev-aad8a.firebaseio.com",
  projectId: "ucandev-aad8a",
  storageBucket: "ucandev-aad8a.appspot.com",
  messagingSenderId: "674297630379",
  appId: "1:674297630379:web:37f6f2034f053707b831ee",
  measurementId: "G-HEFXDHWDS2"
};

Vue.component('ListaBloque', ListaBloque);
Vue.component('BloqueLeer', BloqueLeer);
Vue.component('BloqueWhile', BloqueWhile);
Vue.component('BloqueImprimir', BloqueImprimir);
Vue.component('BloqueCondicional', BloqueCondicional);
Vue.component('BloqueDoWhile', BloqueDoWhile);
Vue.component('BloqueVariable', BloqueVariable);

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() =>{
    if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

