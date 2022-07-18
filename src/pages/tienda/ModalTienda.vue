<template>
  <v-dialog v-model="modalTienda" max-width="min(100%, 70em)">
    <v-card id="modalTienda" class="divcol jspace gap1">
      <v-btn icon class="close" @click.stop="modalTienda = false">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>

      <section class="center tcenter">
        <h1 class="h7_em">Numero de orden {{order.id}}</h1>
      </section>

      <section class="contentModal grid">
        <div class="divcol">
          <span class="h10_em bold" style="text-indent: 24px"> Información del pedido</span>
          <section class="contInformacion divcol gap1">
            <ul class="divcol gap1">
              <v-card
                v-for="n in order_detail"
                :key="n"
                v-ripple="{ class: 'activeRipple' }"
                class="fwrap"
                :ripple="true"
              >
                <div class="divcol">
                  <span class="h11_em semibold tnone">
                    <span class="titulo">Producto: </span>
                    {{n.name}}
                  </span>
                  <div class="acenter" style="gap: 0.2em">
                    <span class="h11_em semibold"
                      ><span class="titulo">Precio: </span
                      >{{formatPrice(n.price)}}</span
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
                  <span class="tnone">{{n.comment}}</span>
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
                {{formatPrice(order.total_price)}}
                <img
                  src="@/assets/logos/near.svg"
                  width="14px"
                  alt="near"
                />
              </span>
            </aside>
            <v-btn @click="OrderUpdate(pedido)" class="botones2 align maxsize_w margin1top">
              Aceptar
            </v-btn>
          </section>

          <section class="divcol">
            <span class="h10_em bold">{{ $t("direccionEntrega") }}</span>
            <aside class="divcol" style="gap: 0.2em">
              <GoogleMap
                :UserCoordinates="order.client_location"
                class="map"
              >
              </GoogleMap>
              <span class="h11_em semibold">
                <span class="titulo">Número: </span>
                {{ order.client_number }}
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
import { ORDER, CONFIG, ORDERD} from "@/services/api";
export default {
  name: "modalTienda",
  i18n: require("./i18n"),
  components: { GoogleMap },
  data() {
    return {
      modalTienda: false,
      order:{},
      order_detail:[],
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
    get_orders(id) {
        this.axios.get(ORDER+"/?id=" + id).then((response) => {
          console.log(response.data[0])
          this.order = response.data[0]
        })
    },
    get_orders_details(id) {
        this.axios.get(ORDERD+"/?order=" + id).then((response) => {
          console.log(response.data)
          this.order_detail = response.data
        })
    },
    yoctoNEARNEAR: function(yoctoNEAR) {
      const amountInNEAR = utils.format.parseNearAmount((this.formatPrice(yoctoNEAR)).toString())
      console.log(amountInNEAR)
    },
    OrderUpdate(item) {
      var objeto = {id: item.id, statu: 'N'}
      this.axios.put(ORDER_STATU,objeto).then(() => {
        // console.log(response)
      })
    },
  },
};
</script>

<style src="./Tienda.scss" lang="scss" />
