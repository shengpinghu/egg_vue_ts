import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from './pages/home.vue'

Vue.use(VueRouter)

export default function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  })
}
