export const updateValue = ({commit}, payload) => {
      commit('updateValue', payload);
}

// multiple actions just means multiple named exports
// export const action 2 = () => { perform some action}