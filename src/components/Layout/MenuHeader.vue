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
                <v-list-item :href="item2.to" @click="ActiveClass(item2)"
                  :class="{ activeClass: item2.active }">
                  <v-list-item-title class="center">
                    <span class="notdefault-clr">{{ item2.item }}</span>
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
                  class="notdefault-clr"
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
                <v-list-item :href="item2.to" :class="{ activeClass: item2.active }">
                  <v-list-item-title class="center">
                    <span class="notdefault-clr">{{ item2.item }}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </template>

          <v-list v-if="item.name" class="intoExpansion">
            <v-list-item @click="SelectLogoutItem(item.key)" :href="item.to">
              <v-list-item-title>
                <span class="notdefault-clr">{{ item.name }}</span>
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
        // {
        //   key: "chats",
        //   name: "Chats temporales"
        // },
        {
          title: "Idioma",
          to: "#",
          selection: [
            {item: "Ingles", to: "#", active: false, key: "US"},
            {item: "Español", to: "#", active: false, key: "ES"}
          ]
        }
      ],
      dataMenuLogout: [
        {
          title: "ajustes",
          selection: [
            {
              item: "Mi Perfil",
              to: "#/mi-perfil",
              key: "perfil"
            },
            {
              item: "Mi Tienda",
              to: "#/mi-tienda",
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
    ActiveClass(item) {
      // const dataOptions1 = this.dataMenuOptions[0].selection;
      // if (item == dataOptions1[0]) {
      //   dataOptions1[1].active = false;
      //   item.active = true;
      //   this.CambiarTheme(item.key);
      // }
      // if (item == dataOptions1[1]) {
      //   dataOptions1[0].active = false;
      //   item.active = true;
      //   this.CambiarTheme(item.key);
      // }
      const dataOptions2 = this.dataMenuOptions[1].selection;
      if (item == dataOptions2[0]) {
        dataOptions2[1].active = false;
        item.active = true;
        this.CambiarLanguaje(item.key);
      }
      if (item == dataOptions2[1]) {
        dataOptions2[0].active = false;
        item.active = true;
        this.CambiarLanguaje(item.key);
      }
    },
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
    SelectLogoutItem(item) {
      if (item == "perfil") {
        this.ClearNavbar();
        this.logout = false;
      }
      if (item == "tienda") {
        this.ClearNavbar();
        this.logout = false;
      }
      if (item == "logout") {
        this.Logout();
        this.logout = false;
      }
    },
    Logout() {
      this.$parent.$parent.loginNear('logout');
      if (this.$route.name !== 'Home') {
        localStorage.removeItem('store')
        this.$router.push({ name: 'Home' });
      }
    },
    ClearNavbar() {
      this.$parent.$parent.$parent.$parent.$refs.navbar.clearAll();
    },
    // SelectOptionItem(item) {
    //   if (item == "chats") {
    //     this.optionMenu = false;
    //     const key = 'open'
    //     this.$store.dispatch("DrawerChats", {key})
    //   }
    // },
  },
};
</script>

<style src="./Layout.scss" lang="scss"></style>
