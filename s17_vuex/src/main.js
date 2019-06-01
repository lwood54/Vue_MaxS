import Vue from 'vue'
import App from './App.vue'

import { store } from "./store/store";

new Vue({
  el: '#app',
  store, // register the store like you would do with the router
  render: h => h(App)
})
