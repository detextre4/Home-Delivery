<template>
  <section id="delivery" class="parent">
    delivery
  </section>
</template>

<script>
export default {
  name: "delivery",
  data() {
    return {
    }
  },
  mounted() {
    this.$parent.$parent.$parent.$refs.navbar.to('delivery')
  },
  methods: {
  }
};
</script>

<style src="./Delivery.scss" lang="scss" />
