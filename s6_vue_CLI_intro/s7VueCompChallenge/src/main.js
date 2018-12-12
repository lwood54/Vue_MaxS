import Vue from 'vue';
import App from './App.vue';

//// THIS WAS PART OF MY ORIGINAL SOLUTION ////
//// I registered the components globally ////
// import PageHeading from './PageHeading.vue';
// import Servers from './Servers.vue';
// import PageFooter from './PageFooter.vue';

// Vue.component('pageHeading', PageHeading);
// Vue.component('servers', Servers);
// Vue.component('pageFooter', PageFooter);

new Vue({
  el: '#app',
  render: h => h(App)
});
