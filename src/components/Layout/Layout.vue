<template>
  <v-app id="layout" :style="`background-image: url('${$store.state.baseURL}themes/${$store.state.theme}/bg.png')`">
    <Navbar ref="navbar" style="z-index: 11" />
    <Header ref="header" style="z-index: 10" />
    <DrawerChats style="z-index: 20"></DrawerChats>
    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import DrawerChats from "@/components/DrawerChats/DrawerChats.vue"
import Navbar from "@/components/Layout/Navbar";
import Header from "@/components/Layout/Header";
// import Footer from "@/components/Layout/Footer";
import "./Layout.scss";
export default {
  name: "layout",
  // components: { Footer, Header, Navbar },
  components: { Header, Navbar, DrawerChats },
}
</script>

<style src="./Layout.scss" lang="scss" />
