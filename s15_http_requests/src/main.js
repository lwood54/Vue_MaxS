import Vue from "vue";
import App from "./App.vue";
import VueResource from 'vue-resource';

// tells Vue to add a plugin
Vue.use(VueResource);

// setting up global root URL that all requests will be sent through
Vue.http.options.root = "https://vuejs-http-375a2.firebaseio.com/data.json";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
