<template>
  <v-dialog v-model="modalTienda" max-width="min(100%, 70em)" scrollable>
    <v-card id="modalTienda" class="divcol jspace gap1">
      <v-btn icon class="close" @click.stop="modalTienda = false">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>

      <section class="center tcenter">
        <h1 class="h7_em">asdasd</h1>
      </section>

      <section class="contentModal grid">
        <div class="divcol">
          <span class="h10_em bold" style="text-indent: 24px">{{
            $t("informacionPedido")
          }}</span>
          <section class="contInformacion divcol gap1">
            <ul class="divcol gap1">
              <v-card
                v-for="n in 5"
                :key="n"
                v-ripple="{ class: 'activeRipple' }"
                class="fwrap"
                :style="`--numeration: '${n + 1}-'`"
                :ripple="true"
              >
                <div class="divcol">
                  <span class="h11_em semibold tnone">
                    <span class="titulo">Producto: </span>
                    Nombre del producto
                  </span>
                  <div class="acenter" style="gap: 0.2em">
                    <span class="h11_em semibold"
                      ><span class="titulo">Precio: </span
                      >12</span
                    >
                    <img
                      src="@/assets/logos/near.svg"
                      width="14px"
                      alt="near"
                    >
                  </div>
                </div>

                <div class="divcol">
                  <span class="titulo">Comentario:</span>
                  <span class="tnone">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam, impedit culpa odit nam aliquam pariatur dolorem itaque</span>
                </div>
              </v-card>
            </ul>
          </section>
        </div>

        <aside class="contRightPanel">
          <section class="divcol">
            <span class="h10_em bold">{{ $t("precioPedido") }}</span>
            <aside class="divcol" style="gap: 0.2em">
              <span class="h11_em semibold acenter" style="gap: 0.2em">
                <span class="titulo">Precio de Delivery: </span>
                2
                <img
                  src="@/assets/logos/near.svg"
                  width="14px"
                  alt="near"
                />
              </span>
              <span class="h11_em semibold acenter" style="gap: 0.2em">
                <span class="titulo">Total del Pedido: </span>
                123123
                <img
                  src="@/assets/logos/near.svg"
                  width="14px"
                  alt="near"
                />
              </span>
            </aside>
            <v-btn @click="OrderCreate(pedido)" class="botones2 align maxsize_w margin1top">
              Aceptar
            </v-btn>
          </section>

          <section class="divcol">
            <span class="h10_em bold">{{ $t("direccionEntrega") }}</span>
            <aside class="divcol" style="gap: 0.2em">
              <GoogleMap
                :UserCoordinates="{ lat:9.988903846136667, lng:-67.6891094161248 }"
                class="map"
              >
              </GoogleMap>

              <span class="h11_em semibold tnone" style="max-width:100%">
                <span class="titulo">Dirección: </span>
                virgen de guadalupe, las rosas
              </span>
              <span class="h11_em semibold">
                <span class="titulo">Número: </span>
                0414-4137640
              </span>
            </aside>
          </section>
        </aside>
      </section>
    </v-card>
  </v-dialog>
</template>

<script>
import GoogleMap from '@/components/googleMaps/GoogleMap'
import * as nearAPI from "near-api-js";
const { utils } = nearAPI;
export default {
  name: "modalTienda",
  i18n: require("./i18n"),
  components: { GoogleMap },
  data() {
    return {
      modalTienda: false,
    }
  },
  mounted() {
  },
  methods: {
    formatPrice(price) {
      return utils.format.formatNearAmount(
        price.toLocaleString("fullwide", { useGrouping: false })
      );
    },
    yoctoNEARNEAR: function(yoctoNEAR) {
      const amountInNEAR = utils.format.parseNearAmount((this.formatPrice(yoctoNEAR)).toString())
      console.log(amountInNEAR)
    },
    OrderCreate(item) {
      console.log(item)
        this.axios.post(ORDER_CREATE,item).then((response) => {
          console.log(response)
        })
    },
  },
};
</script>

<style src="./Tienda.scss" lang="scss" />
