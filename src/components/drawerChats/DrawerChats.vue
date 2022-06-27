<template>
  <section id="drawerChats">
    <v-badge
      v-if="!$store.state.drawerChats"
      :content="messagesBadge"
      :value="messagesBadge"
      color="red"
      class="floatingButton"
      overlap
    >
      <v-btn icon @click="openDrawer()">
        <v-icon color="#FFFFFF !important">mdi-chat</v-icon>
      </v-btn>
    </v-badge>

    <v-navigation-drawer
      v-model="$store.state.drawerChats"
      right
      fixed
      temporary
      width="max-content"
      height="100vh"
      hide-overlay
    >
      <section class="contPedidos divcol acenter">
        <!-- caja de pedidos -->
        <h3 class="h10_em tcenter">{{$t('pedidosPendientes')}}</h3>
      </section>

      <chat-window
        ref="noir"
        :current-user-id="currentUserId"
        :rooms="rooms"
        :rooms-loaded="roomsLoaded"
        :loading-rooms="loadingRooms"
        :messages="messages"
        :messages-loaded="messagesLoaded"
        @fetch-messages="fetchMessages($event)"
        @room-action-handler="test($event)"
        :show-audio="false"
        :show-files="false"
        :width="'max-content'"
        :responsive-breakpoint="3000"
        @send-message="handleMessage"
      />
    </v-navigation-drawer>
  </section>
</template>

<script>
import ChatWindow from 'vue-advanced-chat'
import { MESSAGES, CHATS } from '@/services/api.js'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
export default {
  name: "drawerChats",
  components: { ChatWindow },
  i18n: require("./i18n"),
  data() {
    return {
      messagesBadge: 1,
      currentUserId: null,
      // Chats
      loadingRooms: false,
      roomsLoaded: true,
      rooms: [],
      esperando: false,
      esperando_msg: false,
      // Mensajes
      messagesLoaded: false,
      messages: [],
      intervalo_chats: null,
      intervalo_msges: null,
      room_id: null,
    }
  },
  mounted () {
    this.currentUserId = parseInt(localStorage.getItem('profileid'))
    this.messagesLoaded = false
    this.initChatComponent()
  },
  methods: {
    openDrawer () {
      this.$store.dispatch('DrawerChats', {key: 'open'})
      this.fetchChats(localStorage.getItem('profileid'))
    },
    initChatComponent(){
      this.fetchChats(localStorage.getItem('profileid'))
      this.intervalo_chats = setInterval(()=>{
        if (this.esperando !== true) {
          console.log(this.esperando)
          this.fetchChats(localStorage.getItem('profileid'))
        }
      },3000)
    },
    handleChats(){
      this.axios.post(CHATS).then((res) => {
        if (res.status !== 201) {
          console.log(res)
        }
      }).catch((e)=>console.log(e))
    },
    fetchChats(e) {
      this.esperando = true
      this.roomsLoaded = true
      // vue-advanced-chat component is performance oriented, hence you have to follow specific rules to make it work properly
      const habs = []; // El componente necesita igualar un array lleno con la variable de las rooms
      this.axios.get(CHATS+'?usuario='+e+'&').then((res) => {
        res.data.forEach((element) => {
          habs.push(element);
        })
        this.rooms = habs
        this.esperando = false
        this.roomsLoaded = false
      }).catch((e)=>console.log(e))
    },
    handleMessage(data){
      this.esperando = true
      var msgs = this.messages
      this.axios.post(MESSAGES,{content:data.content,replyMessage:data.replyMessage,roomId:data.roomId,usuario:localStorage.getItem('profileid')}).then((res) => {
        console.log(res)
        if (res.status !== 201) {
          console.log(res)
        } else {
          msgs.push(res.data)
          this.messages = msgs
          this.esperando = false
        }
      }).catch((e)=>console.log(e))
    },
    fetchMessages(data) {
      this.esperando_msg = true
      this.intervalo_msges = setInterval(()=>{
        if (this.esperando_msg !== true) {
          console.log(this.esperando)
          this.fetchMessages(data)
        }
      },3000)
      var msgs = []
      this.axios.get(MESSAGES+'?chat='+data.room.roomId+'&').then((res) => {
        res.data.forEach((element) => {
          msgs.push(element);
        });
        this.esperando = false
        this.messages = msgs
        this.messagesLoaded = true
        this.esperando_msg = false
      })
    },
    // onFetchMessages() {
    //   this.axios.get(MESSAGES).then((res) => {
    //     this.messages = res.data
    //     this.messagesLoaded = true;
    //   })
    // },
  },
};
</script>

<style src="./DrawerChats.scss" lang="scss" />
