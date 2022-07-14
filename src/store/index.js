import Vue from 'vue';
import Vuex from 'vuex';
import * as nearAPI from "near-api-js";
const { utils } = nearAPI;
Vue.use(Vuex);

export default new Vuex.Store({

  namespace: true,
  state: {
    baseURL: process.env.BASE_URL,
    theme: "light",
    drawerChats: false,
    OWNER_ID: null,
    dataModalShopCart: [],
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
      let pedidos = state.dataModalShopCart
      var pedido_encontrado =pedidos.find(pedido => pedido.wallet_shop === item.wallet_shop)
      if (pedido_encontrado) {
        pedido_encontrado.sub_total = pedido_encontrado.sub_total + item.price
        pedido_encontrado.productos.push({
          name: item.name,
          price: item.price,
          comment: ''
        })
      } else {
        let datoa_profile = JSON.parse(localStorage.getItem("data_profile"))
        console.log(datoa_profile)
        state.dataModalShopCart.push({
          client: localStorage.getItem("walletid"),
          name_shop: item.name_shop,
          wallet_shop: item.wallet_shop,
          wallet_seller: item.wallet_seller,
          productos: [{
            name: item.name,
            price: item.price,
            comment: ''
          }],
          direccion: datoa_profile.direccion,
          location: datoa_profile.location,
          telefono: datoa_profile.telefono,
          sub_total: item.price
        })
      }
    }
  },
  actions: {

    yoctoNEARNEAR: function(yoctoNEAR) {
      const amountInNEAR = utils.format.parseNearAmount((this.formatPrice(yoctoNEAR)).toString())
      this.yoctoNEARNEAR2(amountInNEAR)
      this.precio_yocto = amountInNEAR
    },
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
