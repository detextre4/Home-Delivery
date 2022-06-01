<template>
  <section id="miPerfil" class="parentForm section">
    <Alerts ref="alerts"></Alerts>
    <MenuForms ref="menu"></MenuForms>
    <v-col class="contmiperfil divcol gap">
      <aside class="contup divcol">
        <h1 class="h7_em">Mi Perfil</h1>
        <h2 class="h9_em">Introduzca la siguiente información</h2>
      </aside>

      <aside class="contdown">
        <v-card color="transparent">
          <label
            for="username"
            class="h10_em"
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
            class="h10_em"
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
            class="h10_em"
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
            class="h10_em"
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
            class="h10_em"
          >
            Foto de perfil
          </label>
            <v-file-input
              v-model="image"
              id="foto"
              class="input-file"
              prepend-icon=""
              solo
              :clearable="false"
              @change="ImagePreview()"
            >
              <template v-slot:selection>
                <img :src="url" alt="Image selected">
              </template>
            </v-file-input>
          </v-card>
          <v-card color="transparent" class="gap_checkbox">
          <div 
            class="contcheckbox acenter">
            <v-btn 
              v-model="perfil.delivery"
              color="var(--clr-card-2)"
              id="delivery"
              class="openDeliveryAlert">
              <img  v-if="foto == true" src="@/assets/icons/check.png" alt="check button for delivery">
            </v-btn>
            <label
              for="delivery"
              class="h10_em"
            >
              ¿Quieres ser delivery?
            </label>
          </div>
          <div
            class="contcheckbox acenter">
            <v-btn 
              v-model="perfil.vendedor"
              color="var(--clr-card-2)"
              id="vendedor"
              class="openVendedorAlert">
              <img   v-if="foto2 == true" src="@/assets/icons/check.png" alt="check button for merchant">
            </v-btn>
            <label
              for="vendedor"
              class="h10_em"
            >
              ¿Quieres ser vendedor?
            </label>
          </div>

          </v-card>
      </aside>

      <aside class="contsubmit center">
        <v-btn @click="SaveProfile(perfil)">
          <span class="h10_em">Guardar</span>
        </v-btn>
      </aside>
    </v-col>
  </section>
</template>

<script>
import Alerts from '@/components/alerts/Alerts.vue'
import MenuForms from '../components/MenuForms.vue'
import { PERFIL,PROFILE } from '@/services/api.js'
export default {
  name: "miPerfil",
  components: {
    MenuForms,
    Alerts
  },
  data() {
    return {
      url: null,
      image: null,
      walletid: null,
      foto: false,
      foto2: false,
      perfil: {wallet: localStorage.getItem('walletid')},
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
    this.$parent.$parent.$parent.$refs.navbar.to({key: null});
    this.VerifyProfile({wallet:this.perfil.wallet})

    if (this.perfil.wallet && this.perfil.wallet !== 'null') {
      this.VerifyProfile({wallet:this.perfil.wallet})
    } else {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    ImagePreview() {
      this.url= URL.createObjectURL(this.image)
    },
    VerifyProfile(item) {
      this.axios.post(PERFIL,item).then((response) => {
        this.perfil=response.data
        this.foto = response.data.delivery
        this.foto2 = response.data.vendedor
      }).catch((e) => {
        console.log(e)
      })
    },
    SaveProfile(item) {
      if (item.id){
        this.axios.put(PROFILE+item.id+'/',item).then((response) => {
          this.perfil=response.data
          this.$router.push({ path: '/' })
          this.$router.go()
        })
      } else {
        this.axios.post(PROFILE,item).then((response) => {
          this.perfil=response.data
          this.$router.push({ path: '/' })
          this.$router.go()
        })
      }
    },
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
    },
    showAlert() {
      this.$refs.alerts.Alerts('success');
      this.$refs.alerts.Alerts('cancel');
    }
  },
};
</script>

<style src="./MiPerfil.scss" lang="scss" />
