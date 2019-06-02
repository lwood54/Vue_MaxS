import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";

// star syntax lets JS export all exported values and put them into an object.
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { // holds application data
      value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
        counter
  }
});
