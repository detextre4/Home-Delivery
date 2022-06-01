<template>
  <section id="pedido" class="parent">
    <v-col class="contup relative divcol">
      <v-card class="">hola</v-card>
      <GoogleMap></GoogleMap>
    </v-col>
  </section>
</template>

<script>
import GoogleMap from '@/components/googleMap/GoogleMap.vue'
export default {
  name: "pedido",
  components: {
    GoogleMap
  },
  data() {
    return {
    }
  },
  methods: {
  },
};
</script>

<style src="./Pedido.scss" lang="scss" />
