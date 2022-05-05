<template>
  <section id="miPerfil" class="parentForm section">
    <v-col class="contmiperfil divcol gap">
      <aside class="contup divcol">
        <h1 class="h4-em">Mi Tienda</h1>
        <h2 class="h6-em">Introduzca la siguiente información</h2>
      </aside>

      <aside class="contdown">
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
            for="telefono"
            class="h7-em"
          >
            Logo
          </label>
          <v-file-input
            v-model="image"
            id="foto"
            class="input-file"
            prepend-icon=""
            solo
            @change="ImagePreview()"
          >
            <template v-slot:selection>
              <img :src="url" alt="Image selected">
            </template>
          </v-file-input>
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
      url: null,
      image: null,
      walletid: null,
      // foto: false,
      // foto2: false,
      perfil: {wallet: localStorage.getItem('walletid')},
    }
  },
  mounted(){
    this.$parent.$parent.$parent.$refs.navbar.clearAll()
  },
  methods: {
    ImagePreview() {
      this.url= URL.createObjectURL(this.image)
    },
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
