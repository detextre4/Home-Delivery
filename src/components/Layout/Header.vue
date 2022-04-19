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

export default {
  name: "Header",
  i18n: require("./i18n"),
  components: {
    MenuHeader
  },
  data() {
    return {
      messages: 2,
      search: "",
      dataLogin: [
        {
          text: this.$t('sesion'),
          show: true,
        },
        {
          text: "0x7885438272",
          show: false,
          openMenu: true,
        },
      ]
    };
  },
  methods: {
    Login(item) {
      if (item == this.dataLogin[0]) {
        this.dataLogin[0].show = false;
        this.dataLogin[1].show = true;
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
