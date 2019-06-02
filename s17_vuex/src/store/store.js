import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { // holds application data
      value: 0
  },
  getters: { // accesses state
        value: state => {
              return state.value;
        }
  },
  mutations: { // initiates actual change to the state
        updateValue: (state, payload) => {
              state.value = payload;
        }
  },
  actions: { // handles the instruction calls, this is where async functions can be handled
      updateValue({commit}, payload) {
            commit('updateValue', payload);
      }
  },
  modules: {
        counter
  }
});
