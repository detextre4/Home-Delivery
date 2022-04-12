<template>
  <section>
    <!-- mobile -->

    <!-- desktop -->
    <v-app-bar
      id="headerApp"
      color="transparent"
      height="100px"
    >
      <v-row class="jend">
        <v-col class="contheader divrow space">
          <aside class="contleft divrow acenter">
            
            <!-- <v-btn v-if="themeButton" icon width="2.8em" height="2.8em"
              @click="CambiarTheme('dark'), CambiarTheme2('dark')">
              <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-night</v-icon>
            </v-btn>
            <v-btn v-else icon width="2.8em" height="2.8em"
              @click="CambiarTheme('light'), CambiarTheme2('light')">
              <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-sunny</v-icon>
            </v-btn> -->
          </aside>

          <aside class="contright">
            <v-btn class="walletButton" color="#ef3340">
              Iniciar Sesión
            </v-btn>
          </aside>
        </v-col>
      </v-row>
    </v-app-bar>

    <MenuHeader ref="menu"></MenuHeader>
  </section>
</template>

<script>
import MenuHeader from "./MenuHeader.vue"

export default {
  name: "Header",
  components: {
    MenuHeader
  },
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
      // themeButton: true,
    };
  },
  methods: {
    ShowDrawer() {
      this.$refs.menu.ShowDrawer();
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

<style src="./Layout.scss" lang="scss" />
