import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from './pages/home/index.vue'
import Login from './pages/login/index.vue'

Vue.use(VueRouter)

export default function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: Login
      },
      {
        path: '/home',
        component: Home
      }
    ]
  })
}
