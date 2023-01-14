
export default {
  namespaced: true,
  state: {
    valueSeat: [],
  },
  getters: {
    valueSeat: (state) => state.valueSeat,
  },
  actions: {
    addData({commit},data) {
      commit('SET_SEAT', data);
    },
    removeData({commit},data) {
      commit('REMOVE_SEAT', data);
    },
  },
  mutations: {
    SET_SEAT(state, data) {
      state.valueSeat.push(data);
    },
    REMOVE_SEAT(state, data) {
      state.valueSeat = data;
    },
  },
};
