import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import QuizApp from "./components/QuizProject/QuizApp.vue";
import CitiesGame from "./components/CitiesGame";

Vue.use(VueRouter);

const router = new VueRouter({
      routes: [
            { path: '/', component: QuizApp },
            { path: '/cities', component: CitiesGame },
      ],
      mode: 'history',
});

new Vue({
      router,
  render: h => h(App)
}).$mount("#app");
