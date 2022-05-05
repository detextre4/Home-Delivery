<template>
  <router-view />
</template>

<script>
  import { PERFIL,PROFILE } from '@/services/api.js'
  export default {
    name: 'App',
    mounted(){
      if (localStorage.walletid && localStorage.walletid !== 'null') {
        this.VerifyProfile(localStorage.walletid)
      }
    },
    methods: {
      // Check if the user has an associated profile
      VerifyProfile(user) {
        this.axios.post(PERFIL,{'wallet':user}).then((response) => {
          if (response.data.id) {
            // Set profile.id as localStorage item
            console.log('APP')
            localStorage.setItem('profileid' ,response.data.id)
          }
        }).catch((e) => {
          console.log(e) // **
        })
      }
    },
  };
</script>

<style src="./styles/app.scss" lang="scss"/>
