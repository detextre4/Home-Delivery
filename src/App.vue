<template>
  <router-view />
</template>

<script>
  import { PERFIL,PROFILE } from '@/services/api.js'
  import * as nearAPI from "near-api-js";
  import { CONFIG } from "@/services/api";
  const { connect, keyStores, WalletConnection } = nearAPI;

  export default {
    name: 'App',
    data(){
      return {
        user: null,
      }
    },
    mounted(){
      this.isSigned()
    },
    methods: {
      async isSigned() {
        // Connect to NEAR
        const near = await connect(
          CONFIG(new keyStores.BrowserLocalStorageKeyStore())
        );
        // Create wallet connection
        const wallet = new WalletConnection(near);
        if (wallet.isSignedIn()) {
          // Returns account Id as string
          const walletAccountId = wallet.getAccountId();
          this.user = walletAccountId;
        }
        this.VerifyProfile(this.user)
        localStorage.setItem('walletid' ,this.user)
      },
      // Check if the user has an associated profile by: Dinoir
      VerifyProfile(user) {
        this.axios.post(PERFIL,{'wallet':user}).then((response) => {
          if (response.data.id) {

            if (response.data.vendedor) {
              this.$router.addRoute('Layout', { path: '/tienda', name: 'Tienda', component: () => import('@/pages/Tienda/Tienda') })
            }
            // if (response.data.delivery) {
            //   this.$router.addRoute('Layout', { path: '/tienda', name: 'Tienda', component: () => import('@/pages/Tienda/Tienda') })
            // }
            // Set profile.id as localStorage item
            localStorage.setItem('profileid',response.data.id)
          }
        }).catch((e) => {
          console.log(e) // **
        })
      }
    },
  };
</script>

<style src="./styles/app.scss" lang="scss"/>
