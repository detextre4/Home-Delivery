<template>
  <section id="menuHeader">
    <!-- menu search -->
    <v-menu
      bottom
      transition="scroll-y-transition"
      offset-y
      z-index="10"
      activator=".openSearch"
      :close-on-content-click="false"
    >
      <v-text-field
        v-model="search"
        solo
        hide-details="true"
        maxlength="20"
        class="searchMobile"
      >
      <template v-slot:prepend-inner>
        <img src="@/assets/icons/lupa.png" alt="icon">
      </template>

        <template v-slot:label>
          <span class="label">BUSCAR POR COMIDA / RESTAURANTE</span>
        </template>
      </v-text-field>
    </v-menu>

    <!-- menu options -->
    <v-menu
      v-model="optionMenu"
      bottom
      transition="scroll-y-transition"
      offset-y
      z-index="10"
      activator=".openOptions"
      :close-on-content-click="false"
    >
      <v-expansion-panels
        focusable
        class="menuGlobal"
      >
        <v-expansion-panel v-for="(item, i) in dataMenuOptions" :key="i">
          <template v-if="item.title">
            <v-expansion-panel-header>
              {{ item.title }}
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-list v-for="(item2, i) in item.selection" :key="i">
                <v-list-item @click="CambiarLanguaje(item2.key); optionMenu = false"
                  class="activeClass">
                  <v-list-item-title class="center">
                    <span class="not_clr">{{ item2.item }}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </template>

          <!-- <v-list v-if="item.name" class="intoExpansion">
            <v-list-item @click="SelectOptionItem(item.key)">
              <v-list-item-title>
                <v-badge
                  :content="messages"
                  :value="messages"
                  color="#3E2185"
                  inline
                  class="not_clr"
                  style="margin: 0"
                >
                  {{ item.name }}
                </v-badge>
              </v-list-item-title>
            </v-list-item>
          </v-list> -->
        </v-expansion-panel>
      </v-expansion-panels>
    </v-menu>

    <!-- menu logout -->
    <v-menu
      v-model="logout"
      bottom
      transition="scroll-y-transition"
      offset-y
      z-index="10"
      activator=".openMenuLogout"
      :close-on-content-click="false"
    >
      <v-expansion-panels
        focusable
        class="menuGlobal"
      >
        <v-expansion-panel v-for="(item, i) in dataMenuLogout" :key="i">
          <template v-if="item.title">
            <v-expansion-panel-header>
              {{ item.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list v-for="(item2, i) in item.selection" :key="i">
                <v-list-item class="activeClass" @click.stop="logout = false; $router.push(item2.to)" href="#">
                  <v-list-item-title class="center">
                    <span class="not_clr">{{ item2.item }}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </template>

          <v-list v-if="item.name" class="intoExpansion">
            <v-list-item @click.stop="logout = false">
              <v-list-item-title>
                <span class="not_clr">{{ item.name }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-menu>
  </section>
</template>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "headerMenu",
  i18n: require("./i18n"),
  // created() {
  //   this.element = document.getElementById("theme");
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     this.CambiarTheme(theme);
  //   }
  // },
  mounted() {
    this.CambiarLanguaje(localStorage.language);
  },
  data() {
    return {
      logout: false,
      optionMenu: false,
      messages: "1",
      search: "",
      dataMenuOptions: [
        {
          title: "Idioma",
          selection: [
            {item: "Ingles", key: "US"},
            {item: "Español", key: "ES"}
          ]
        }
      ],
      dataMenuLogout: [
        {
          title: "ajustes",
          selection: [
            {
              item: "Mi Perfil",
              to: "/mi-perfil",
              key: "perfil"
            },
            {
              item: "Mi Tienda",
              to: "/mi-tienda",
              key: "tienda"
            },
          ]
        },
        {
          name: "Cerrar sesión",
          key: "logout"
        }
      ],
    };
  },
  methods: {
    // CambiarTheme(theme) {
    //   if (theme == 'light') {
    //     this.$store.dispatch("CambiarTheme", { theme, element: this.element });
    //   }
    //   if (theme == 'dark') {
    //     this.$store.dispatch("CambiarTheme", { theme, element: this.element });
    //   }
    // },
    CambiarLanguaje(lang) {
      if (lang === "ES") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else {
        localStorage.language = lang;
        i18n.locale = lang;
      }
    },
    Logout() {
      this.$parent.$parent.loginNear('logout');
      if (this.$route.name !== 'inicio') {
        localStorage.removeItem('store')
        this.$router.push({name:'inicio'});
      }
    },
  },
};
</script>

<style src="./Header.scss" lang="scss"></style>
