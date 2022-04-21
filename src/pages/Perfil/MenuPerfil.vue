<template>
  <section id="menuPerfil">
    <v-menu
      v-model="item.closeMenu"
      v-for="(item, index) in dataVerificators" :key="index"
      transition="scale-transition"
      offset-y
      offset-x
      top
      :activator="item.activator"
      :close-on-content-click="false"
    >
      <v-col class="verificatorMiPerfil">
        <h6 class="h8-em">{{ item.text }}</h6>
        <div class="spacea">
          <v-btn color="var(--clr-btn)" @click="AcceptVerificator(item.accept)">
            <img src="@/assets/icons/check.png" alt="accept button">
          </v-btn>
          <v-btn color="var(--clr-btn)" @click="CancelVerificator(item.cancel)">
            <img src="@/assets/icons/cancel.png" alt="cancel button">
          </v-btn>
        </div>
      </v-col>
    </v-menu>
  </section>
</template>

<script>
export default {
  name: "MenuPerfil",
  data() {
    return {
      closeMenu: true,
      dataVerificators: [
        {
          text: "¿Estas seguro que deseas ser delivery?",
          activator: ".openDeliveryAlert",
          accept: "delivery",
          cancel: "delivery",
          closeMenu: false,
        },
        {
          text: "¿Estas seguro que deseas ser vendedor?",
          activator: ".openVendedorAlert",
          accept: "vendedor",
          cancel: "vendedor",
          closeMenu: false,
        },
      ]
    };
  },
  methods: {
    AcceptVerificator(item) {
      this.$parent.AcceptVerificator(item);
      this.dataVerificators.forEach(element => {
        element.closeMenu = false;
      });
    },
    CancelVerificator(item) {
      this.$parent.CancelVerificator(item);
      this.dataVerificators.forEach(element => {
        element.closeMenu = false;
      });
    },
  }
};
</script>

<style src="./Perfil.scss" lang="scss"></style>
