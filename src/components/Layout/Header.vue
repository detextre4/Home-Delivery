<template>
  <section>
    <!-- mobile -->

    <!-- desktop -->
    <v-app-bar
    id="headerApp"
    color="transparent"
    height="100px"
    fixed
  >
    <v-row>
      <v-col cols="12" md="11" class="divrow space align paddbottomdel">
        <aside class="contleft divrow acenter">
          <!-- toggle -->
          <v-btn class="toggle vermobile" width="2.8em" height="2.8em"
            @click.stop="ShowDrawer()">
            <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-menu</v-icon>
          </v-btn>
          <!-- logo -->
          <router-link to="/" class="eliminarmobile">
            <img class="logo" :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`"
              alt="Logo">
          </router-link>
        </aside>

        <v-col class="divrow jend padd eliminarmobile">
          <!-- content -->
          <v-col class="contmiddle center padd">
            <a v-for="(item, index) in dataHeader" :key="index"
              class="h9-em openMenuCollections">
              {{ item.title }}
            </a>
          </v-col>
        </v-col>

        <aside class="contright">
          <v-btn v-if="themeButton" icon width="2.8em" height="2.8em"
            @click="CambiarTheme('dark'), CambiarTheme2('dark')">
            <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-night</v-icon>
          </v-btn>
          <v-btn v-else icon width="2.8em" height="2.8em"
            @click="CambiarTheme('light'), CambiarTheme2('light')">
            <v-icon size="clamp(1.5em, 2vw, 2em)">mdi-weather-sunny</v-icon>
          </v-btn>

          <v-btn class="walletButton" color="#ef3340">
            Connect Wallet
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

// let ubicacionPrincipal = window.pageYOffset;
// let resizeTimeout;
// function resizeThrottler(actualResizeHandler) {
//   // ignore resize events as long as an actualResizeHandler execution is in the queue
//   if (!resizeTimeout) {
//     resizeTimeout = setTimeout(() => {
//       resizeTimeout = null;
//       actualResizeHandler();

//       // The actualResizeHandler will execute at a rate of 15fps
//     }, 80);
//   }
// }
export default {
  name: "Header",
  components: {
    MenuHeader
  },
  i18n: require("./i18n"),
  created() {
    this.element = document.getElementById("theme");
    const theme = localStorage.getItem("theme");
    if (theme) {
      this.CambiarTheme(theme);
    }
    if (theme == "light") {
      this.themeButton = true;
    }
    if (theme == "dark") {
      this.themeButton = false;
    }
  },
  data() {
    return {
      themeButton: true,
      dataHeader: [
        {
          title: "Home"
        },
        {
          title: "Staking"
        },
        {
          title: "Community"
        },
        {
          title: "About"
        },
        {
          title: "Languaje"
        },
        {
          title: "Contact"
        }
      ]
    };
  },
  methods: {
    ShowDrawer() {
      this.$refs.menu.ShowDrawer();
    },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.themeButton = !this.themeButton;
    },
    CambiarTheme2(theme) {
      this.$refs.menu.OverlayMethod(theme);
    },
    // OcultarNavbar() {
    //   let Desplazamiento_Actual = window.pageYOffset;
    //   if (ubicacionPrincipal >= Desplazamiento_Actual) {
    //     document.getElementById("headerApp").style.top = "0";
    //   } else {
    //     document.getElementById("headerApp").style.top = "-100px";
    //   }
    //   ubicacionPrincipal = Desplazamiento_Actual;
    // },
    // scrollListener() {
    //   resizeThrottler(this.OcultarNavbar);
    // }
  },
  // mounted() {
  //   document.addEventListener('scroll', this.scrollListener);
  // },
  // beforeDestroy() {
  //   document.removeEventListener('scroll', this.scrollListener);
  // }
};
</script>

<style src="./Layout.scss" lang="scss" />
