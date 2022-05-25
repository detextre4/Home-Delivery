<template>
  <section id="restaurantes" class="parent relative">
    <v-col class="contup relative divcol">
      <v-btn class="prueba">hola</v-btn>
    </v-col>
  </section>
</template>

<script>
export default {
  name: "Restaurantes",
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
