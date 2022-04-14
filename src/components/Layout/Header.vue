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
            <!-- <router-link to="/" class="contlogo align vermobile">
              <img class="logo" src="@/assets/logos/logo.png" alt="Logo">
            </router-link> -->
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

            <v-btn class="botones">
              <img width="100%" src="@/assets/icons/options.png" alt="options">
            </v-btn>

            <v-btn @click="ShowSearchMobile()"
              class="botones vermobile">
              <img src="@/assets/icons/lupa.png" alt="icon">
            </v-btn>
            <!-- <v-btn v-if="themeButton" icon width="2.8em" height="2.8em"
              @click="CambiarTheme('dark'), CambiarTheme2('dark')">
              <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-night</v-icon>
            </v-btn>
            <v-btn v-else icon width="2.8em" height="2.8em"
              @click="CambiarTheme('light'), CambiarTheme2('light')">
              <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-sunny</v-icon>
            </v-btn> -->
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

          <!-- menu search -->
          <v-col v-show="showSearchMobile" class="containerSearch">
            <v-text-field
              v-model="search"
              solo
              hide-details="true"
              maxlength="20"
            >
            <template v-slot:prepend-inner>
              <img src="@/assets/icons/lupa.png" alt="icon">
            </template>

              <template v-slot:label>
                <span class="label">BUSCAR POR COMIDA / RESTAURANTE</span>
              </template>
            </v-text-field>
          </v-col>
        </v-col>
      </v-row>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  name: "Header",
  i18n: require("./i18n"),
  // created() {
  //   this.element = document.getElementById("theme");
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     this.CambiarTheme(theme);
  //   }
  //   if (theme == "light") {
  //     this.themeButton = true;
  //   }
  //   if (theme == "dark") {
  //     this.themeButton = false;
  //   }
  // },
  data() {
    return {
      messages: 2,
      search: "",
      showSearchMobile: false,
      // themeButton: true,
    };
  },
  methods: {
    ShowSearchMobile() {
      this.showSearchMobile = !this.showSearchMobile
    },
    // CambiarTheme(theme) {
    //   this.$store.dispatch("CambiarTheme", { theme, element: this.element });
    //   this.themeButton = !this.themeButton;
    // },
    // CambiarTheme2(theme) {
    //   this.$refs.menu.OverlayMethod(theme);
    // },
  },
};
</script>

<style src="./Layout.scss" lang="scss"></style>
