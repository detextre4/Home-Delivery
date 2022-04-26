<template>
  <section>
    <!-- desktop -->
    <v-app-bar
      id="headerApp"
      color="transparent"
      height="100px"
    >
      <v-row class="jend">
        <v-col class="contheader space">
          <aside class="contleft acenter">
            <v-text-field
              v-model="search"
              solo
              hide-details="true"
              maxlength="20"
              class="eliminarmobile"
            >
            <template v-slot:prepend-inner>
              <img src="@/assets/icons/lupa.png" alt="icon">
            </template>

              <template v-slot:label>
                <span class="label">BUSCAR POR COMIDA / RESTAURANTE</span>
              </template>
            </v-text-field>

            <v-btn class="botones openOptions">
              <img width="100%" src="@/assets/icons/options.png" alt="options">
            </v-btn>

            <v-btn
              class="botones vermobile openSearch">
              <img src="@/assets/icons/lupa.png" alt="icon">
            </v-btn>
          </aside>

          <aside class="contright center">
            <v-btn v-for="(item, index) in dataLogin" :key="index" @click="Login(item)"
              v-show="item.show" :class="{ openMenuLogout: item.openMenu }"
              class="walletButton center">
              {{ item.text }}
            </v-btn>

            <v-btn class="botones">
              <v-badge
                :content="messages"
                :value="messages"
                color="#3E2185"
              >
                <img width="100%" src="@/assets/icons/cart.png" alt="shopping cart">
              </v-badge>
            </v-btn>
          </aside>
        </v-col>
      </v-row>
    <MenuHeader ref="menu"></MenuHeader>
    </v-app-bar>
  </section>
</template>

<script>
import MenuHeader from './MenuHeader.vue'
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection } = nearAPI;

export default {
  name: "Header",
  i18n: require("./i18n"),
  components: {
    MenuHeader
  },
  data() {
    return {
      nearid: false,
      user: null,
      messages: 2,
      search: "",
      dataLogin: [
        {
          text: this.$t('sesion'),
          show: false,
        },
        {
          text: this.user,
          show: false,
          openMenu: true,
        },
      ]
    };
  },
  mounted(){
     this.isSigned()
  },
  methods: {
    async loginNear() {
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      const wallet = new WalletConnection(near);
      if (this.nearid === false) {
        wallet.requestSignIn(
          "min.mintick.testnet",
        );
      } else if (this.nearid) {
        wallet.signOut();
        this.nearid = false;
        this.$router.go();
      }
    },
    async isSigned() {
      // connect to NEAR
      const near = await connect(
        CONFIG(new keyStores.BrowserLocalStorageKeyStore())
      );
      // create wallet connection
      const wallet = new WalletConnection(near);
      if (wallet.isSignedIn()) {
        this.nearid = true;
        // returns account Id as string
        const walletAccountId = wallet.getAccountId();
        this.user = walletAccountId;
      }
      localStorage.setItem('wallerid' ,this.user)
      if (this.nearid === false){
        this.dataLogin[0].show = true;
         this.dataLogin[1].show = false;
        }
      if(this.nearid === true){
            this.dataLogin[0].show = false;
            this.dataLogin[1].show = true;
            this.dataLogin[1].text = this.user
      }
    },
    Login(item) {
      if (item == this.dataLogin[0]) {
        this.dataLogin[0].show = false;
        this.dataLogin[1].show = true;
        this.loginNear()
      }
    },
    Logout() {
      this.dataLogin[1].show = false;
      this.dataLogin[0].show = true;
    }
  },
};
</script>

<style src="./Layout.scss" lang="scss"></style>
