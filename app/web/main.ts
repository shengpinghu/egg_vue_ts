'use strict'
import App from './framework/app'
import createStore from './store/index'
import createRouter from './router'
import entry from './entry.vue'
export default new App({ entry, createStore, createRouter }).bootstrap()
