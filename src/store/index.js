import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    drawerChats: false,
    OWNER_ID: null,
    dataModalShopCart: [
      {
        user: "juanito's shop",
        pedido: [
          {
            orden: "papitas fritas con refresco, dos raciones de pollo y ensalada",
            precio: 4,
            comentario: "ensalada sin cebolla",
          },
          {
            orden: "papitas fritas con refresco, dos raciones de pollo y ensalada",
            precio: 4,
            comentario: "ensalada sin cebolla",
          },
          {
            orden: "papitas fritas con refresco, dos raciones de pollo y ensalada",
            precio: 4,
            comentario: "ensalada sin cebolla",
          },
          {
            orden: "papitas fritas con refresco, dos raciones de pollo y ensalada",
            precio: 4,
            comentario: "ensalada sin cebolla",
          },
        ],
        precio:{delivery: 0.5, total: 8.5},
        entrega: {
          direccion: "virgen de guadalupe, las rosas",
          coordinates: { lat:9.988903846136667, lng:-67.6891094161248 },
          numero: "0414-4137640",
        },
      },
    ]
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
    },
    ShoppingCart(state, item) {
      console.log(item)
      state.dataModalShopCart.push(item)
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
