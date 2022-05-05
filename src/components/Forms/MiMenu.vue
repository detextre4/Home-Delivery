<template>
  <section id="miTienda" class="parent">
    <Alerts ref="alerts"></Alerts>
    <MenuForms ref="menu"></MenuForms>
    <v-col class="contmitienda divcol gap">
      <aside class="contup divrow">
        <v-btn class="back" icon href="#/tienda">
          <v-icon large>mdi-arrow-left</v-icon>
        </v-btn>

        <div class="divcol">
          <h1 class="h4-em">Mi Menú</h1>
          <h2 class="h6-em">Organiza tu menu</h2>
        </div>
      </aside>

      <aside class="contdown">
        <v-card color="transparent">
          <label
            for="foto"
            class="h7-em"
          >
            Foto del platillo
          </label>

          <v-file-input
            id="foto"
            solo
            chips
            :prepend-icon="false"
            class="input-file"
          >
            <!-- <template v-slot:prepend-inner>
              <v-icon>mdi-camera</v-icon>
            </template> -->
          </v-file-input>
        </v-card>
        <v-card color="transparent">
          <label
            for="nombre"
            class="h7-em"
          >
            Nombre del plato
          </label>

          <v-text-field
            id="telefono"
            solo
          ></v-text-field>
        </v-card>
        <v-card color="transparent">
          <aside>
            <label
              for="categoria"
              class="h7-em"
            >
              Categoria
            </label>
          </aside>
          <v-select
            id="categoria"
            solo
          >
          </v-select>
        </v-card>
        <v-card color="transparent">
          <label
            for="descripcion"
            class="h7-em"
          >
            Descripción
          </label>

          <v-text-field
            id="descripcion"
            solo
          ></v-text-field>
        </v-card>
        <v-card color="transparent" style="display:flex" class="acenter gap contprecio">
          <aside>
            <label
              for="precio"
              class="h7-em"
            >
              Precio
            </label>

            <v-text-field
              id="precio"
              solo
            ></v-text-field>
          </aside>
          <v-btn @click="SaveProfile(perfil)">
            <span class="h7-em">Agregar</span>
          </v-btn>
        </v-card>
      </aside>

      <aside class="contSlide divcol">
        <v-card v-for="(item, i) in dataSlideMenu" :key="i"
          color="transparent" class="space fill-w gap">
          <aside class="firstcont space">
            <div class="child1 space">
              <img class="foto" :src="item.img" alt="Menu Image">
              <label class="h5-em">{{ item.nombre }}</label>
            </div>

            <div class="child2 space">
              <span class="h6-em bold">{{ item.categoria }}</span>
              <span class="h6-em bold">{{ item.precio }}$</span>
            </div>
          </aside>

          <aside class="contdesc">
            <p class="h7-em semibold">{{ item.desc }}</p>
          </aside>

          <aside class="controls space" style="gap:clamp(0.2em, 0.5vw, 0.5em)">
            <v-tooltip bottom color="var(--clr-btn)">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="add" icon v-bind="attrs" v-on="on">
                  <img src="@/assets/icons/pencil.png" alt="Add Menu">
                </v-btn>
              </template>
              <span class="clr-text-btn">Editar</span>
            </v-tooltip>

            <v-tooltip bottom color="#ff4081">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <img src="@/assets/icons/eliminar.png" alt="Add Menu">
                </v-btn>
              </template>
              <span style="color: #FFFFFF !important">Eliminar</span>
            </v-tooltip>
          </aside>
        </v-card>
      </aside>
    </v-col>
  </section>
</template>

<script>
  import MenuForms from './MenuForms.vue'
  import { PERFIL,PROFILE } from '@/services/api.js'
  import Alerts from '@/components/Alerts/Alerts.vue'
  export default {
    name: "MiMenu",
    components: {
      MenuForms,
      Alerts
    },
    data() {
      return {
        walletid: null,
        foto: false,
        perfil: {wallet: localStorage.getItem('walletid')},
        dataSlideMenu: [
          {
            img: require("@/assets/icons/inicio.png"),
            nombre: "LUMPIAS CON QUESO",
            categoria: "CHINO",
            precio: "1000",
            desc: "rico platillo para toda la familia pues"
          },
          {
            img: require("@/assets/icons/inicio.png"),
            nombre: "HAMBURGUESAS TIRPLE CARNE",
            categoria: "FRITURA",
            precio: "1000",
            desc: "compra y lleva ahora 20% de descuenta para ¿, oferta limitada"
          },
          {
            img: require("@/assets/icons/inicio.png"),
            nombre: "HAMBURGUESAS TIRPLE CARNE",
            categoria: "FRITURA",
            precio: "1000",
            desc: "compra y lleva ahora 20% de descuenta para ¿, oferta limitada"
          },
          {
            img: require("@/assets/icons/inicio.png"),
            nombre: "HAMBURGUESAS TIRPLE CARNE",
            categoria: "FRITURA",
            precio: "1000",
            desc: "comprame prro"
          },
        ]
      }
    },
    mounted(){
      this.VerifyProfile({wallet:this.perfil.wallet})
    },
    methods: {
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
          })
        } else {
          this.axios.post(PROFILE,item).then((response) => {
            this.perfil=response.data
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

<style src="./Forms.scss" lang="scss" />
