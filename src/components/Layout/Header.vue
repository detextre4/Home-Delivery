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
            <v-btn class="walletButton center">
              Iniciar Sesión
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
    };
  },
  methods: {
  },
};
</script>

<style src="./Layout.scss" lang="scss"></style>
<style scoped>
.openSearch {
  cursor: pointer
}
.openOptions {
  cursor: pointer
}
</style>
