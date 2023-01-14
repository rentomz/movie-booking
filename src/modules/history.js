
export default {
  namespaced: true,
  state: {
    dataHistory: [],
  },
  getters: {
    dataHistory: (state) => state.dataHistory,
  },
  actions: {
    addData({commit},data) {
      commit('SET_HISTORY', data);
    },
    getData({commit}) {
      commit('GET_HISYORY', this.dataHistory);
    },
  },
  mutations: {
    SET_HISTORY(state, data) {
      state.dataHistory.push(data);
    },
    GET_HISYORY(state, data) {
      state.dataHistory = data;
    },
  },
};
