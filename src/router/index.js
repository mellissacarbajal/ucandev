import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Registro from '../views/Auth/Registro.vue'
import firebase from 'firebase'
import LayoutUCan from '../views/Layout/LayoutUCan.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/home',
      name: 'Home',
      component: LayoutUCan,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from , next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();

});

export default router;