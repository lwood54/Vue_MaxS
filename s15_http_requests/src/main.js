import Vue from "vue";
import App from "./App.vue";
import VueResource from 'vue-resource';

// tells Vue to add a plugin
Vue.use(VueResource);

// setting up global root URL that all requests will be sent through
Vue.http.options.root = "https://vuejs-http-375a2.firebaseio.com/";

// SIDE NOTE: In Firebase, a PUT request overrides the data, whereas the POST request appends the data
// and provides a unique ID. QUESTION: Would you use this to replace data if located by ID?
Vue.http.interceptors.push((request, next) => {
      console.log('interceptor request: ', request);
      if (request.method === 'POST') {
            request.method = 'PUT';
      }
      // next() enables continuation of the http process (rarely will you want to end within an interceptor)
      next(response => {
            response.json = () => { return { messages: response.body}}
      }); 
});



Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
