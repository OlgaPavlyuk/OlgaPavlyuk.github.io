export default {
  namespaced: true,
  state: {
    modal: false
  },
  getters: {
    modal(state){
      return state.modal;
    }
  },
  mutations: {
    switchModal(state, modal){
      state.modal = modal;
    }
  },
  actions: {
    switchModal(store, modal){
      if (modal === '') {
        store.commit('switchModal', 'form');
      } else {
        store.commit('switchModal', modal);
      }
    }
  }
};
