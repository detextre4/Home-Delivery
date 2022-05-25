<template>
  <section id="restaurantes" class="parent">
    <v-col class="contup relative divcol">
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
