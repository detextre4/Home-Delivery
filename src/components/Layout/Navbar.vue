<template>
  <v-row id="navbar" class="alignmobile">
    <!-- logo -->
    <router-link to="/" class="contlogo align eliminarmobile">
      <img class="logo" src="@/assets/logos/logo.png" alt="Logo" @click="to('inicio')">
    </router-link>
    <!-- content -->
    <aside class="contnavbar divcol divrowmobile spacea align">
      <a :href="item.to" v-for="(item, index) in dataNavbar" :key="index" @click="to(item)"
        class="conticon center" :class="{ conticonActive: item.active }">
        <button class="divcol center">
          <img :src="item.icon" alt="Icono">
          <span>{{ item.title}}</span>
        </button>
      </a>
    </aside>
  </v-row>
</template>

<script>
const icon1 = require("@/assets/icons/inicio-outline.png");
const icon1Active = require("@/assets/icons/inicio.png");
const icon2 = require("@/assets/icons/categorias-outline.png");
const icon2Active = require("@/assets/icons/categorias.png");
const icon3 = require("@/assets/icons/restaurantes-outline.png");
const icon3Active = require("@/assets/icons/restaurantes.png");
const icon4 = require("@/assets/icons/tienda-outline.png");
const icon4Active = require("@/assets/icons/tienda.png");
const icon5 = require("@/assets/icons/delivery-outline.png");
const icon5Active = require("@/assets/icons/delivery.png");

export default {
  name: "Navbar",
  i18n: require("./i18n"),
  data() {
    return {
      dataNavbar: [
        {
          key: "inicio",
          icon: icon1,
          title: "Inicio",
          active: false,
          to: "#/"
        },
        {
          key: "categorias",
          icon: icon2,
          title: "Categorias",
          active: false,
          to: "#/categorias"
        },
        {
          key: "restaurantes",
          icon: icon3,
          title: "Restaurantes",
          active: false,
          to: "#"
        },
        {
          key: "tienda",
          icon: icon4,
          title: "Mi Tienda",
          active: false,
          to: "#/tienda"
        },
        {
          key: "delivery",
          icon: icon5,
          title: "Delivery",
          active: false,
          to: "#"
        }
      ]
    };
  },
  methods: {
    clearAll() {
      this.dataNavbar[0].icon = icon1
      this.dataNavbar[1].icon = icon2
      this.dataNavbar[2].icon = icon3
      this.dataNavbar[3].icon = icon4
      this.dataNavbar[4].icon = icon5
      this.dataNavbar.forEach(element => {
        element.active = false;
      });
    },
    to(item) {
      if (item.key == 'inicio' || item == 'inicio') {
        this.clearAll()
        if (item == "inicio") {
          this.dataNavbar[0].active = true;
          this.dataNavbar[0].icon = icon1Active;
        } else {
          item.active = true;
          item.icon = icon1Active
        }
      }
      if (item.key == 'categorias' || item == 'categorias') {
        this.clearAll()
        if (item == "categorias") {
          this.dataNavbar[1].active = true;
          this.dataNavbar[1].icon = icon2Active;
        } else {
          item.active = true;
          item.icon = icon2Active
        }
      }
      if (item.key == 'restaurantes' || item == 'restaurantes') {
        this.clearAll()
        if (item == "restaurantes") {
          this.dataNavbar[2].active = true;
          this.dataNavbar[2].icon = icon3Active;
        } else {
          item.active = true;
          item.icon = icon3Active
        }
      }
      if (item.key == 'tienda' || item == 'tienda') {
        this.clearAll()
        if (item == "tienda") {
          this.dataNavbar[3].active = true;
          this.dataNavbar[3].icon = icon4Active;
        } else {
          item.active = true;
          item.icon = icon4Active
        }
      }
      if (item.key == 'delivery' || item == 'delivery') {
        this.clearAll()
        if (item == "delivery") {
          this.dataNavbar[4].active = true;
          this.dataNavbar[4].icon = icon5Active;
        } else {
          item.active = true;
          item.icon = icon5Active
        }
      }
    }
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
