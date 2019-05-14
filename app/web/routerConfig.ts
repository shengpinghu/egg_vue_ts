import Vue from 'vue'

import VueRouter from 'vue-router'
import News from './pages/news/index.vue'
import NewsList from './pages/newsList/index.vue'
import Login from './pages/login/index.vue'
import Admin from './pages/admin/index.vue'

const newsRouter = {

}

const routerArray = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/news',
        component: News
      },
      {
        path: '/newsList',
        component: NewsList
      }

    ]
  }
]
