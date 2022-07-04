import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    drawerChats: false,
    OWNER_ID: null
  },
  mutations: {
    get_owner(state, item) {
      state.OWNER_ID = item
    },
    CambiarTheme(state, theme) {
      state.theme = theme
    },
    DrawerChats(state, key) {
      if (key == 'open') {
        state.drawerChats = true
      }
      if (key == 'close') {
        state.drawerChats = false
      }
    }
  },
  actions: {
    CambiarTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit( "CambiarTheme", theme)
    },
    DrawerChats({commit}, {key}) {
      commit( "DrawerChats", key)
    },
  },
});
