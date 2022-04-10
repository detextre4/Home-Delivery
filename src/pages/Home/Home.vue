<template>
  <section id="home" class="parent center">
    <v-btn class="bold" rounded style="background: var(--colorCartas2);
      box-shadow: 0 3px 11px 0 #111011, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A !important;">
      Checkout "_personal-base.scss" file
    </v-btn>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
    }
  },
  // mounted() {
  //   // window.addEventListener('resize', this.getDimensions);
  //   this.responsive();
  // },
  // // unmounted() {
  // //   window.removeEventListener('resize', this.getDimensions)
  // // },
  // methods: {
  //   // getDimensions() {
  //   //   this.responsive();
  //   // },
  //   responsive() {
  //     if (window.innerWidth <= 880) {
  //       this.leftCard = false;
  //       this.centerCard = true;
  //       this.rightCard = false;
  //     } else {
  //       this.leftCard = true;
  //       this.centerCard = true;
  //       this.rightCard = true;
  //     }
  //   }
  // },
};
</script>

<style src="../pages.scss" lang="scss" />
