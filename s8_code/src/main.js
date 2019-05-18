import Vue from 'vue'
import App from './App.vue'

// created an event bus to communicate between components
// order is important, the event bus needs to be created before the vue instance or it won't have
// access to the event bus.
// ??? How would this work if the event bus was placed in its own file???
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

