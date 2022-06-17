<template>
  <section id="tienda" class="parent">
    <v-col class="contup astart">
      <img src="@/assets/images/tienda-title.svg" alt="Titulo tienda" />

      <v-tooltip right color="var(--clr-btn)">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="add" icon v-bind="attrs" v-on="on" href="#/mi-tienda">
            <img src="@/assets/icons/pencil.svg" alt="Add Menu" />
          </v-btn>
        </template>
        <span class="clr_text_btn">Editar datos de tienda</span>
      </v-tooltip>
    </v-col>

    <v-col class="contdown">
      <aside class="wrapper divcol">
        <div class="center">
          <h2 class="h6_em">Mi Menú</h2>

          <v-tooltip right color="var(--clr-btn)">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="add" icon v-bind="attrs" v-on="on" href="#/mi-menu">
                <img src="@/assets/icons/plus.svg" alt="add menu" />
              </v-btn>
            </template>
            <span class="clr_text_btn">Agregar nuevo menú</span>
          </v-tooltip>
        </div>

        <v-col class="divcol gap2">
          <v-card
            v-for="(item, i) in dataMenuTienda"
            :key="i"
            style="display: flex"
            class="acenter"
          >
            <aside class="divrow">
              <img class="menuImg" :src="item.img" alt="Menu Image">

              <div class="contInfo divcol jcenter">
                <label class="h7_em">{{ item.name }}</label>
                <div class="space">
                  <span class="h9_em semibold">{{ item.category }}</span>
                  <div class="acenter gap1">
                    <span class="h9_em semibol"
                    >{{ formatPrice(item.price) }}$</span
                  >
                    <span class="h10_em semibold center">({{ item.near }} 
                      <img src="@/assets/logos/near.svg" alt="near">)
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </v-card>
        </v-col>
      </aside>
    </v-col>
  </section>
</template>

<script>
import * as nearAPI from "near-api-js";
import { CONFIG } from "@/services/api";
const { connect, keyStores, WalletConnection, Contract, utils } = nearAPI;

export default {
  name: "tienda",
  data() {
    return {
      data: {},
      dataMenuTienda: [],
    };
  },
  mounted() {
    // this.VerifyStore()
    this.get_menu();
  },
  methods: {
    formatPrice(price) {
      return utils.format.formatNearAmount(
        price.toLocaleString("fullwide", { useGrouping: false })
      );
    },
    async get_menu() {
      try {
        const CONTRACT_NAME = "contract1.ccoronel7.testnet";
        // Connect to NEAR
        const near = await connect(
          CONFIG(new keyStores.BrowserLocalStorageKeyStore())
        );
        // Create wallet connection
        const wallet = new WalletConnection(near);
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ["get_menu"],
          sender: wallet.account(),
        });
        if (wallet.isSignedIn()) {
          await contract
            .get_menu({
              user_id: wallet.getAccountId(),
            })
            .then((res) => {
              console.log(res);
              this.dataMenuTienda = res.platillos;
            });
        }
      } catch (e) {
        // Router
        console.log(e);
      }
    },
    async VerifyStore() {
      try {
        const CONTRACT_NAME = "contract1.ccoronel7.testnet";
        // Connect to NEAR
        const near = await connect(
          CONFIG(new keyStores.BrowserLocalStorageKeyStore())
        );
        // Create wallet connection
        const wallet = new WalletConnection(near);
        const contract = new Contract(wallet.account(), CONTRACT_NAME, {
          viewMethods: ["get_store"],
          sender: wallet.account(),
        });
        if (wallet.isSignedIn()) {
          await contract
            .get_store({
              user_id: wallet.getAccountId(),
            })
            .then((res) => {
              this.data = res;
              console.info(this.data);
            });
        }
      } catch (e) {
        // Router
        this.$router.push({ name: "miTienda" });
      }
    },
  },
};
</script>

<style src="./Tienda.scss" lang="scss" />
