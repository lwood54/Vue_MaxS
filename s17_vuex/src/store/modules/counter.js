import * as types from '../types';

const state = {
      counter: 0
};

const getters = {
      [types.COUNTER]: state => {
            return state.counter;
      },
        [types.DOUBLE_COUNTER]: state => {
              return state.counter * 2;
        },
        [types.CLICK_COUNTER]: state => {
              return state.counter + " Clicks";
        }
}

const mutations = {
      [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
            state.counter += payload;
      },
      [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
            state.counter -= payload;
      }
}

const actions = {
      [types.COUNTER_INCREMENT]: ({commit}, payload) => {
            // if not destructured like above, then you can use context.commit();
            commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
      },
      [types.COUNTER_DECREMENT]: ({commit}, payload) => {
            // if not destructured like above, then you can use context.commit();
            commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
      },
      [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
            setTimeout(() => {
                  commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
            }, payload.duration);
      },
      [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
            setTimeout(() => {
                  commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
            }, payload.duration);
      }
}

export default {
      state,
      getters,
      mutations,
      actions
}