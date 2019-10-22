import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ListaBloque from "@/components/ListaBloque.vue";
import BloqueLeer from "@/components/BloqueLeer.vue";
import BloqueWhile from "@/components/BloqueWhile.vue";
import BloqueImprimir from "@/components/BloqueImprimir.vue";
import BloqueCondicional from "@/components/BloqueCondicional.vue";
import BloqueDoWhile from "@/components/BloqueDoWhile.vue";
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false


Vue.component('ListaBloque', ListaBloque);
Vue.component('BloqueLeer', BloqueLeer);
Vue.component('BloqueWhile', BloqueWhile);
Vue.component('BloqueImprimir', BloqueImprimir);
Vue.component('BloqueCondicional', BloqueCondicional);
Vue.component('BloqueDoWhile', BloqueDoWhile);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
