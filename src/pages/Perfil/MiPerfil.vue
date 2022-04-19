<template>
  <section id="miPerfil" class="parent">
    <MenuPerfil ref="menu"></MenuPerfil>
    <v-col class="contmiperfil divcol gap">
      <aside class="contup divcol">
        <h1 class="h4-em">Mi Perfil</h1>
        <h2 class="h6-em">Introduzca la siguiente información</h2>
      </aside>

      <aside class="contdown">
        <v-card v-for="(item, index) in dataForm" :key="index" color="transparent"
          :class="{gap_checkbox: item.gap}">
          <label
            :for="item.id"
            class="h7-em"
          >
            {{ item.label }}
          </label>

          <v-text-field
            v-if="item.textField"
            :id="item.id"
            v-model="item.model"
            solo
            :disabled="item.disabled"
          ></v-text-field>

          <v-file-input
            class="input-file"
            v-if="item.file"
            chips
            :prepend-icon="false"
            solo
          >
            <template v-slot:prepend-inner>
              <v-icon>mdi-camera</v-icon>
            </template>
          </v-file-input>

          <div v-for="(item2, index) in item.checkbox" :key="index"
            class="contcheckbox acenter">
            <v-btn color="var(--colorBoton)"
              :class="{ openDeliveryAlert: item2.verificatorD, openVendedorAlert: item2.verificatorV}">
              <img v-if="item2.model" src="@/assets/icons/check.png" :alt="item2.alt">
            </v-btn>
            <label
              :for="item2.id"
              class="h7-em"
            >
              {{ item2.label }}
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
      dataForm: [
        {
          model: "",
          id: "label-nombre",
          label: "Nombre o Pseudonimo",
          textField: true
        },
        {
          model: "",
          label: "Wallet",
          disabled: true,
          textField: true
        },
        {
          model: "",
          id: "label-direccion",
          label: "Dirección",
          textField: true
        },
        {
          model: "",
          id: "label-telefono",
          label: "Teléfono",
          textField: true
        },
        {
          model: "",
          id: "label-perfil",
          label: "Foto de perfil",
          file: true
        },
        {
          gap: true,
          checkbox: [
            {
              model: false,
              id: "label-delivery",
              label: "Delivery",
              alt: "check button for delivery",
              verificatorD: true
            },
            {
              model: false,
              id: "label-vendedor",
              label: "Vendedor",
              alt: "check button for merchant",
              verificatorV: true
            },
          ]
        },
      ]
    }
  },
  methods: {
    AcceptVerificator(item) {
      if (item == "delivery") {
        this.dataForm[5].checkbox[0].model = true
      }
      if (item == "vendedor") {
        this.dataForm[5].checkbox[1].model = true
      }
    },
    CancelVerificator(item) {
      if (item == "delivery") {
        this.dataForm[5].checkbox[0].model = false
      }
      if (item == "vendedor") {
        this.dataForm[5].checkbox[1].model = false
      }
    }
  },
};
</script>

<style src="./Perfil.scss" lang="scss" />
