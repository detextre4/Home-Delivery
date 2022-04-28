<template>
  <section id="miPerfil" class="parent">
    <v-col class="contmiperfil divcol gap">
      <aside class="contup divcol">
        <h1 class="h4-em">Mi Tienda</h1>
        <h2 class="h6-em">Introduzca la siguiente información</h2>
      </aside>

      <aside class="contdown">
        <v-card color="transparent">
          <label
            for="username"
            class="h7-em"
          >
            Perfil
          </label>

          <v-text-field
            id="username"
            v-model="perfil.nombre"
            solo
          ></v-text-field>
        </v-card>
        <v-card color="transparent">
          <label
            for="walet"
            class="h7-em"
          >
            Wallet
          </label>

          <v-text-field
            id="wallet"
            v-model="perfil.wallet"
            solo
            disabled
          ></v-text-field>
        </v-card>
        <v-card color="transparent">
          <label
            for="telefono"
            class="h7-em"
          >
            Teléfono
          </label>

          <v-text-field
            id="telefono"
            v-model="perfil.telefono"
            solo
          ></v-text-field>
        </v-card>
        <v-card color="transparent">
          <label
            for="Dirección"
            class="h7-em"
          >
            Dirección
          </label>

          <v-text-field
            id="Dirección"
            v-model="perfil.direccion"
            solo
          ></v-text-field>
        </v-card>
        <v-card color="transparent">
          <label
            for="Dirección"
            class="h7-em"
          >
            Categoria
          </label>

          <v-text-field
            id="Dirección"
            v-model="perfil.categoria"
            solo
          ></v-text-field>
        </v-card>
      </aside>

      <aside class="contsubmit center">
        <v-btn>
          <span class="h7-em">Guardar</span>
        </v-btn>
      </aside>
    </v-col>
  </section>
</template>

<script>
export default {
  name: "MiPerfil",
  data() {
    return {
      walletid: null,
      // foto: false,
      // foto2: false,
      perfil: {wallet: localStorage.getItem('wallerid')},
    }
  },
  mounted(){
  },
  methods: {
    // AcceptVerificator(item) {
    //   if (item == "delivery") {
    //     this.perfil.delivery = true
    //     this.foto = true
    //   }
    //   if (item == "vendedor") {
    //     this.perfil.vendedor = true
    //     this.foto2 = true
    //   }
    // },
    // CancelVerificator(item) {
    //   if (item == "delivery") {
    //     this.perfil.delivery =  false
    //     this.foto = false
    //   }
    //   if (item == "vendedor") {
    //     this.perfil.vendedor = false
    //     this.foto2 = false
    //   }
    // }
  },
};
</script>

<style src="./Forms.scss" lang="scss" />
