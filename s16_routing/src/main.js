import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import {routes} from "./routes";

// enables routing with vue-router 'plugin'
Vue.use(VueRouter);

const router = new VueRouter({
      routes,
      mode: 'history',
      scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                  return savedPosition;
            }
            if (to.hash) {
                  return { selector: to.hash};
            }
            return {x: 0, y: 700}; // can be x,y coordinate or selector with element id
      }
});

Vue.config.productionTip = false;

new Vue({
      router,
      render: h => h(App)
}).$mount("#app");
