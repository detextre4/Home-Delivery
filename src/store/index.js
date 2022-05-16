import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    chats: false,
  },
  mutations: {
    CambiarTheme(state, theme) {
      state.theme = theme
    },
    Chats(state, key) {
      if (key == 'open') {
        state.chats = true
      }
      if (key == 'close') {
        state.chats = false
      }
    }
  },
  actions: {
    CambiarTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit( "CambiarTheme", theme)
    },
    Chats({commit}, {key}) {
      commit( "Chats", key)
    },
  },
});
