<template>
  <section id="categorias" class="parent">
    <v-col class="contup relative divcol">
      <GoogleMap></GoogleMap>
    </v-col>
  </section>
</template>

<script>
import GoogleMap from '@/components/GoogleMap/GoogleMap.vue'
export default {
  name: "categorias",
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

<style src="./Categorias.scss" lang="scss" />
