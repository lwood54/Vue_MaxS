import * as types from "./types";

export default {
      [types.UPDATE_VALUE]: ({commit}, payload) => {
            commit(types.MUTATE_UPDATE_VALUE, payload);
      }
}

// multiple actions just means multiple named exports
// export const action 2 = () => { perform some action}