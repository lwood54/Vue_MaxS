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
            // check for saved positon, and go there if there is one
            if (savedPosition) {
                  return savedPosition;
            }
            // check for explicit use of hash and id to set location
            if (to.hash) {
                  return { selector: to.hash};
            }
            // if no other instructions, then take user to 700px below top on y-axis
            return {x: 0, y: 700}; // can be x,y coordinate or selector with element id
      }
});

router.beforeEach((to, from, next) => {
      console.log('global beforeEach');
      // 3 options for next()
            // 1 - can be empty and takes to next path
            // 2 - can define with object including path instructions as in other files or path string
            // 3 - can put false and will keep on same page
      next();
      
});

new Vue({
      router,
      render: h => h(App)
}).$mount("#app");
