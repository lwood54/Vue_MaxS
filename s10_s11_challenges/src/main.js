import Vue from "vue";
import App from "./App.vue";

// creating custom directives globally
Vue.directive("highlight", {
      bind(el, binding, vnode) {
            // el.style.backgroundColor = "green";
            // el.style.backgroundColor = binding.value;
            let delay = 0;
            if (binding.modifiers['delayed']) {
                  delay = 3000;
            }
            setTimeout(() => {
                  if (binding.arg == "background") {
                        el.style.backgroundColor = binding.value;
                  } else {
                        el.style.color = binding.value;
                  }
            }, delay);
            
      }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
