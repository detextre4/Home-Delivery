<template>
  <section id="miMenu" class="parentForm section">
    <Alerts ref="alerts"></Alerts>
    <MenuForms ref="menu"></MenuForms>
    <v-col class="contmimenu divcol gap">
      <aside class="contup divrow">
        <v-btn class="back" icon href="#/tienda">
          <v-icon size="clamp(1.5em, 2.5vw, 2.5em)">mdi-arrow-left</v-icon>
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
            v-model="menu.image"
            id="foto"
            solo
            prepend-icon=""
            class="input-file"
            @change="ImagePreview()"
          >
            <template v-slot:selection>
              <img :src="url" alt="Image selected">
            </template>
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
            v-model="menu.name"
            id="name"
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
            v-model="menu.categoria"
            :items="listCategoria"
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
        <v-card color="transparent" style="display:flex" class="space contprecio">
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
          <v-btn @click="SaveProfile(perfil)" class="h8-em">
            Agregar
          </v-btn>
        </v-card>
      </aside>

      <aside class="contSlide divcol">
        <v-card v-for="(item, i) in dataSlideMenu" :key="i"
          color="transparent" class="space fill-w" style="display:flex">
          <aside class="firstcont divrow">
            <img class="foto" :src="item.img" alt="Menu Image">
            <div class="child1 divcol jcenter">
              <label class="h6-em">{{ item.nombre }}</label>
              <div class="child2 space">
                <span class="h6-em bold">{{ item.categoria }}</span>
                <span class="h6-em bold">{{ item.precio }}$</span>
              </div>
            </div>
          </aside>

          <aside class="contdesc">
            <p class="h7-em semibold p">{{ item.desc }}</p>
          </aside>

          <aside class="controls acenter spacee" style="gap:0.5em">
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
      categoria: "",
      listCategoria: ["uno", "dos", "tres"],
      url: null,
      image: null,
      walletid: null,
      foto: false,
      menu: {},
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
      ]
    }
  },
  mounted(){
    this.VerifyProfile({wallet:this.perfil.wallet})
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
