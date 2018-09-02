export default {
  namespaced: true,
  state: {
    theme: 'dark-theme'
  },
  getters: {
    theme(state){
      return state.theme;
    }
  },
  mutations: {
    changeTheme(state, theme){
      state.theme = theme;
    }
  },
  actions: {
    changeTheme(store, theme){
      store.commit('changeTheme', theme);
    }
  }
};
