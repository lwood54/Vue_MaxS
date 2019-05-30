import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import {routes} from "./routes";

// enables routing with vue-router 'plugin'
Vue.use(VueRouter);

const router = new VueRouter({
      routes,
      mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
      router,
      render: h => h(App)
}).$mount("#app");