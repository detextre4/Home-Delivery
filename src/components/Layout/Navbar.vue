<template>
  <v-row id="navbar" class="alignmobile">
    <!-- logo -->
    <router-link to="/" class="contlogo align eliminarmobile">
      <img class="logo" src="@/assets/logos/logo.png" alt="Logo" @click="to('inicio')">
    </router-link>
    <!-- content -->
    <aside class="contnavbar divcol divrowmobile spacea align">
      <template v-for="(item, index) in dataNavbar">
        <a :href="item.to" v-if="!item.no_mostrar" :key="index" @click="to(item)"
          class="conticon center" :class="{ conticonActive: item.active }">
          <button class="divcol center">
            <img :src="item.icon" alt="Icono">
            <span>{{ item.title}}</span>
          </button>
        </a>
      </template>
    </aside>
  </v-row>
</template>

<script>
import { PERFIL,PROFILE } from '@/services/api.js'
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
  mounted() {
    // crear funcion para validar que la ruta de home existe
    // if (this.dataNavbar[0]) {
    // this.dataNavbar[0].active = true;
    // this.dataNavbar[0].icon = require("@/assets/icons/inicio.png");
    // }
  },
  data() {
    return {
      dataNavbar: [
        {
          key: "inicio",
          icon: require("@/assets/icons/inicio-outline.png"),
          title: "Inicio",
          active: false,
          to: "#/"
        },
        {
          key: "categorias",
          icon: require("@/assets/icons/categorias-outline.png"),
          title: "Categorias",
          active: false,
          to: "#/categorias"
        },
        {
          key: "restaurantes",
          icon: require("@/assets/icons/restaurantes-outline.png"),
          title: "Restaurantes",
          active: false,
          to: "#"
        },
        {
          key: "tienda",
          icon: require("@/assets/icons/tienda-outline.png"),
          title: "Mi Tienda",
          active: false,
          to: "#/tienda",
        },
        {
          key: "delivery",
          icon: require("@/assets/icons/delivery-outline.png"),
          title: "Delivery",
          active: false,
          to: "#"
        },
      ]
    };
  },
  mounted () {
    this.VerifyProfile(localStorage.walletid)
  },
  methods: {
    VerifyProfile(user) {
      this.axios.post(PERFIL,{'wallet':user}).then((response) => {
        if (response.data.id) {
          if (!response.data.vendedor) {
            var index = this.dataNavbar.findIndex((data) => data.key === 'tienda')
            this.dataNavbar[index].no_mostrar = true
            this.$router.addRoute('Layout', { path: '/tienda', name: 'Tienda', component: () => import('@/pages/Tienda/Tienda') })
          }
          if (!response.data.delivery) {
            var index = this.dataNavbar.findIndex((data) => data.key === 'delivery')
            this.dataNavbar[index].no_mostrar = true
            this.$router.addRoute('Layout', { path: '/delivery', name: 'Delivery', component: '' })
          }
          // Set profile.id as localStorage item
          localStorage.setItem('profileid',response.data.id)
        }
      }).catch((e) => {
        console.log(e) // **
      })
    },
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
        this.dataNavbar[1].icon = icon2
        this.dataNavbar[2].icon = icon3
        this.dataNavbar[3].icon = icon4
        this.dataNavbar[4].icon = icon5
        this.dataNavbar.forEach(element => {
          element.active = false;
        });
        if (item == "inicio") {
          this.dataNavbar[0].active = true;
          this.dataNavbar[0].icon = icon1Active;
        } else {
          item.active = true;
          item.icon = icon1Active
        }
      }
      if (item.key == 'categorias' || item == 'categorias') {
        this.dataNavbar[0].icon = icon1
        this.dataNavbar[2].icon = icon3
        this.dataNavbar[3].icon = icon4
        this.dataNavbar[4].icon = icon5
        this.dataNavbar.forEach(element => {
          element.active = false;
        });
        if (item == "categorias") {
          this.dataNavbar[1].active = true;
          this.dataNavbar[1].icon = icon2Active;
        } else {
          item.active = true;
          item.icon = icon2Active
        }
      }
      if (item.key == 'restaurantes' || item == 'restaurantes') {
        this.dataNavbar[0].icon = icon1
        this.dataNavbar[1].icon = icon2
        this.dataNavbar[3].icon = icon4
        this.dataNavbar[4].icon = icon5
        this.dataNavbar.forEach(element => {
          element.active = false;
        });
        if (item == "restaurantes") {
          this.dataNavbar[2].active = true;
          this.dataNavbar[2].icon = icon3Active;
        } else {
          item.active = true;
          item.icon = icon3Active
        }
      }
      if (item.key == 'tienda' || item == 'tienda') {
        this.dataNavbar[0].icon = icon1
        this.dataNavbar[1].icon = icon2
        this.dataNavbar[2].icon = icon3
        this.dataNavbar[4].icon = icon5
        this.dataNavbar.forEach(element => {
          element.active = false;
        });
        if (item == "tienda") {
          this.dataNavbar[3].active = true;
          this.dataNavbar[3].icon = icon4Active;
        } else {
          item.active = true;
          item.icon = icon4Active
        }
      }
      if (item.key == 'delivery' || item == 'delivery') {
        this.dataNavbar[0].icon = icon1
        this.dataNavbar[1].icon = icon2
        this.dataNavbar[2].icon = icon3
        this.dataNavbar[3].icon = icon4
        this.dataNavbar.forEach(element => {
          element.active = false;
        });
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
