<template>
  <v-row id="navbar" class="alignmobile">
    <!-- logo -->
    <a href="#" class="contlogo align eliminarmobile">
      <img class="logo" src="@/assets/logos/logo.png" alt="Logo" @click="to('inicio')">
    </a>
    <!-- content -->
    <aside class="contnavbar divcol divrowmobile spacea align">
      <template v-for="(item, index) in dataNavbar">
        <a :href="item.to" v-if="item.mostrar" :key="index" @click="to(item)"
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
  name: "navbar",
  i18n: require("./i18n"),
  data() {
    return {
      dataNavbar: [
        {
          key: "inicio",
          icon: icon1,
          title: "Inicio",
          active: false,
          mostrar: true,
          to: "#"
        },
        {
          key: "categorias",
          icon: icon2,
          title: "Categorias",
          active: false,
          mostrar: true,
          to: "#categorias"
        },
        {
          key: "restaurantes",
          icon: icon3,
          title: "Restaurantes",
          active: false,
          mostrar: true,
          to: "#restaurantes"
        },
        {
          key: "tienda",
          icon: icon4,
          title: "Mi Tienda",
          active: false,
          mostrar: false,
          to: "#/tienda",
        },
        {
          key: "delivery",
          icon: icon5,
          title: "Delivery",
          active: false,
          mostrar: false,
          to: "#"
        },
      ]
    };
  },
  mounted () {
    this.VerifyProfile(localStorage.walletid)
    this.to(this.$router.currentRoute.name)
  },
  methods: {
    VerifyProfile(user) {
      this.axios.post(PERFIL,{'wallet':user}).then((response) => {
        if (response.data.id) {
          if (response.data.vendedor) {
            var index = this.dataNavbar.findIndex((data) => data.key === 'tienda')
            this.dataNavbar[index].mostrar = true
          }
          if (response.data.delivery) {
            var index = this.dataNavbar.findIndex((data) => data.key === 'delivery')
            this.dataNavbar[index].mostrar = true
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
      this.dataNavbar.forEach(element => {element.active = false;});
    },
    to(item) {
      this.clearAll()
      if (item.key == 'inicio' || item == 'inicio') {
        if (item == "inicio") {
          this.dataNavbar[0].active = true;
          this.dataNavbar[0].icon = icon1Active;
          this.$router.push('/')
        } else {
          item.active = true;
          item.icon = icon1Active
          this.$router.push('/')
        }
      } else if (item.key == 'categorias' || item == 'categorias') {
        if (item == "categorias") {
          this.dataNavbar[1].active = true;
          this.dataNavbar[1].icon = icon2Active;
          this.$router.push('/categorias')
        } else {
          item.active = true;
          item.icon = icon2Active
          this.$router.push('/categorias')
        }
      } else if (item.key == 'restaurantes' || item == 'restaurantes') {
        if (item == "restaurantes") {
          this.dataNavbar[2].active = true;
          this.dataNavbar[2].icon = icon3Active;
          this.$router.push('/restaurantes')
        } else {
          item.active = true;
          item.icon = icon3Active
          this.$router.push('/restaurantes')
        }
      } else if (item.key == 'tienda' || item == 'tienda') {
        if (item == "tienda") {
          this.dataNavbar[3].active = true;
          this.dataNavbar[3].icon = icon4Active;
          this.$router.push('/tienda')
        } else {
          item.active = true;
          item.icon = icon4Active
          this.$router.push('/tienda')
        }
      } else if (item.key == 'delivery' || item == 'delivery') {
        if (item == "delivery") {
          this.dataNavbar[4].active = true;
          this.dataNavbar[4].icon = icon5Active;
          this.$router.push('/delivery')
        } else {
          item.active = true;
          item.icon = icon5Active
          this.$router.push('/delivery')
        }
      }
    }
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
