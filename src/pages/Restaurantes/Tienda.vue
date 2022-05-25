<template>
  <section id="restaurantes-tienda" class="parent">
    <v-col class="contup relative divcol">
    </v-col>
  </section>
</template>

<script>
export default {
  name: "RestaurantesTienda",
  data() {
    return {
    }
  },
  mounted() {
    this.$parent.$parent.$parent.$refs.navbar.to('restaurantes')
  },
  methods: {
  },
};
</script>

<style src="./Restaurantes.scss" lang="scss" />
