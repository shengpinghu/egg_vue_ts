import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Request from './utils/request'
export default class App {
  config: any;
  constructor (config) {
    this.config = config
  }

  bootstrap () {
    return this.client()
  }

  create (initState) {
    const { entry, createStore, createRouter } = this.config
    const store = createStore(initState)
    const router = createRouter()
    Request.setOrigin(initState.config.apiHost)
    sync(store, router)
    return {
      router,
      store,
      render: h => { // not use ...entry, why ?
        return h(entry)
      }
    }
  }

  client () {
    const vm = this.create(window.__INITIAL_STATE__)
    vm.router.beforeEach((to, from, next) => {
      if (to.meta.title) {
        document.title = to.meta.title
      }
      next()
    })
    const app = new Vue(vm)
    app.$mount('#app')
    return app
  }
}
