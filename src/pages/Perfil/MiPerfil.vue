<template>
  <section id="miPerfil" class="parent">
    <MenuPerfil ref="menu"></MenuPerfil>
    <v-col class="contmiperfil divcol gap">
      <aside class="contup divcol">
        <h1 class="h4-em">Mi Perfil</h1>
        <h2 class="h6-em">Introduzca la siguiente información</h2>
      </aside>

      <aside class="contdown">
        <v-card color="transparent">
          <label
            for="username"
            class="h7-em"
          >
            Nombre o seudonimo
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
            Numero de telefono
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
            for="foto"
            class="h7-em"
          >
            Foto de perfil
          </label>
        <v-file-input
            id="foto"
            class="input-file"
            v-model="perfil.foto"
            chips
            :prepend-icon="false"
            solo
          >
            <template v-slot:prepend-inner>
              <v-icon>mdi-camera</v-icon>
            </template>
          </v-file-input>
         </v-card>
          <v-card color="transparent" class="gap_checkbox">
         <div 
            class="contcheckbox acenter">
            <v-btn 
              v-model="perfil.delivery"
              color="var(--colorBoton)"
              id="delivery"
              class="openDeliveryAlert">
              <img  v-if="foto == true" src="@/assets/icons/check.png" alt="check button for delivery">
            </v-btn>
            <label
              for="delivery"
              class="h7-em"
            >
               ¿Quieres ser delivery?
            </label>
          </div>
          <div
            class="contcheckbox acenter">
            <v-btn 
              v-model="perfil.vendedor"
              color="var(--colorBoton)"
              id="vendedor"
              class="openVendedorAlert">
              <img   v-if="foto2 == true" src="@/assets/icons/check.png" alt="check button for merchant">
            </v-btn>
            <label
              for="vendedor"
              class="h7-em"
            >
              ¿Quieres ser vendedor?
            </label>
          </div>

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
import MenuPerfil from './MenuPerfil.vue'
export default {
  name: "MiPerfil",
  components: {
    MenuPerfil
  },
  data() {
    return {
      walletid: null,
      foto: false,
      foto2: false,
      perfil: {wallet: localStorage.getItem('wallerid')},
      // dataForm: [
      //   {
      //     model: "",
      //     id: "label-nombre",
      //     label: "Nombre o Pseudonimo",
      //     textField: true
      //   },
      //   {
      //     model: this.walletid,
      //     label: "Wallet",
      //     disabled: true,
      //     textField: true
      //   },
      //   {
      //     model: "",
      //     id: "label-direccion",
      //     label: "Dirección",
      //     textField: true
      //   },
      //   {
      //     model: "",
      //     id: "label-telefono",
      //     label: "Teléfono",
      //     textField: true
      //   },
      //   {
      //     model: "",
      //     id: "label-perfil",
      //     label: "Foto de perfil",
      //     file: true
      //   },
      //   {
      //     gap: true,
      //     checkbox: [
      //       {
      //         model: false,
      //         id: "label-delivery",
      //         label: "Delivery",
      //         alt: "check button for delivery",
      //         verificatorD: true
      //       },
      //       {
      //         model: false,
      //         id: "label-vendedor",
      //         label: "Vendedor",
      //         alt: "check button for merchant",
      //         verificatorV: true
      //       },
      //     ]
      //   },
      // ]
    }
  },
  mounted(){
  },
  methods: {
    AcceptVerificator(item) {
      if (item == "delivery") {
        this.perfil.delivery = true
        this.foto = true
      }
      if (item == "vendedor") {
        this.perfil.vendedor = true
        this.foto2 = true
      }
    },
    CancelVerificator(item) {
      if (item == "delivery") {
        this.perfil.delivery =  false
        this.foto = false
      }
      if (item == "vendedor") {
        this.perfil.vendedor = false
        this.foto2 = false
      }
    }
  },
};
</script>

<style src="./Perfil.scss" lang="scss" />
