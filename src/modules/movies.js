import axios from "axios"

export default {
  namespaced: true,
  state: {
    data: {},
    detail: {},
    isLoading: true,
  },
  getters: {
    data: (state) => state.data,
    detail: (state) => state.detail,
  },
  actions: {
    async getData({ commit }) {
      commit('SET_LOADING', true);
      await axios({
        method: 'get',
        params: {
          s: 'Guardians of the Galaxy',
        },
      })
        .then((response) => {
          commit('SET_DATA', response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // console.log('finish');
          commit('SET_LOADING', false);
        });
    },

    async getDetailMovie({ commit }, id) {
      commit('SET_LOADING', true);
      await axios({
        method: 'get',
        params: {
          i: id,
        },
      })
        .then((response) => {
          commit('SET_DETAIL', response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // console.log('finish');
          commit('SET_LOADING', false);
        });
    },
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_DETAIL(state, data) {
      state.detail = data;
    },
    SET_LOADING(state, data) {
      state.isLoading = data;
    }
  },
};
