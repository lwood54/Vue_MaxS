import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { // holds application data
      counter: 0
  },
  getters: { // accesses state
      counter: state => {
            return state.counter;
      },
        doubleCounter: state => {
              return state.counter * 2;
        },
        stringCounter: state => {
              return state.counter + " Clicks";
        }
  },
  mutations: { // initiates actual change to the state
        increment: (state, payload) => {
              state.counter += payload;
        },
        decrement: (state, payload) => {
              state.counter -= payload;
        }
  },
  actions: { // handles the instruction calls, this is where async functions can be handled
      increment: ({commit}, payload) => {
            console.log('actions - increment: ', commit, ':: payload --> ', payload);
            // if not destructured like above, then you can use context.commit();
            commit('increment', payload);
      },
      decrement: ({commit}, payload) => {
            // if not destructured like above, then you can use context.commit();
            commit('decrement', payload);
      },
      asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                  commit('increment', payload.by);
            }, payload.duration);
      },
      asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                  commit('decrement', payload.by);
            }, payload.duration);
      }
  }
});
