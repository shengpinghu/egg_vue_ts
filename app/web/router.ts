import Vue from 'vue'

import VueRouter from 'vue-router'
import News from './pages/news/index.vue'
import NewsList from './pages/newsList/index.vue'
import Login from './pages/login/index.vue'
import Admin from './pages/admin/index.vue'

Vue.use(VueRouter)

export default function createRouter () {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/login',
        name: '用户登录',
        component: Login,
        meta: {
          title: '用户登录'
        }
      },
      {
        path: '/admin',
        component: Admin,
        meta: {
          title: '管理后台系统'
        },
        children: [
          {
            path: '/news',
            component: News,
            meta: {
              title: '添加资讯'
            }
          },
          {
            path: '/newsList',
            component: NewsList,
            meta: {
              title: '资讯列表'
            }
          }

        ]
      },
      {
        path: '/',
        redirect: '/login'
      },
      {
        path: '*',
        redirect: '/admin'
      }
    ]
  })
}
