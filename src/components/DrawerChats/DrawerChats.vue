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
      <v-btn icon @click="$store.dispatch('DrawerChats', {key: 'open'})">
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
        <h3 class="h10_em tcenter">Pedidos Pendientes</h3>
      </section>

      <chat-window
        :current-user-id="currentUserId"
        :rooms="rooms"
        :rooms-loaded="roomsLoaded"
        :loading-rooms="loadingRooms"
        :messages="messages"
        :messages-loaded="messagesLoaded"
        @room-action-handler="test($event)"
        :width="'max-content'"
        :responsive-breakpoint="3000"
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
  components: {
    ChatWindow
  },
  data() {
    return {
      messagesBadge: 1,
      currentUserId: "1234",
      // Chats
      loadingRooms: false,
      roomsLoaded: true,
      rooms: [],
      rooms_b: [
        {
          roomId: 1,
          roomName: "Room 1",
          avatar: "assets/imgs/people.png",
          unreadCount: 4,
          index: 3,
          lastMessage: {
            content: "Last message received",
            senderId: 1234,
            username: "John Doe",
            timestamp: "10:20",
            saved: true,
            distributed: false,
            seen: false,
            new: true,
          },
          users: [
            {
              _id: 1234,
              username: "John Doe",
              avatar: "assets/imgs/doe.png",
              status: {
                state: "online",
                lastChanged: "today, 14:30",
              },
            },
            {
              _id: 4321,
              username: "John Snow",
              avatar: "assets/imgs/snow.png",
              status: {
                state: "offline",
                lastChanged: "14 July, 20:00",
              },
            },
          ],
          typingUsers: [4321],
        },
      ],
      // Mensajes
      messagesLoaded: false,
      messages: [],
    }
  },
  mounted () {
    this.fetchChats(localStorage.getItem('profileid'))
  },
  methods: {
    fetchChats(e) {
      this.roomsLoaded = true
      // vue-advanced-chat component is performance oriented, hence you have to follow specific rules to make it work properly
      const habs = []; // El componente necesita igualar un array lleno con la variable de las rooms
      this.axios.get(CHATS).then((res) => {
        res.data.forEach((element) => {
          habs.push(element);
          this.fetchMessages({room:1,options:''})
        });
        this.rooms = habs
        console.log(this.rooms)
        this.roomsLoaded = false
      })
    },
    fetchMessages({ room, options }) {
      this.messagesLoaded = false
      this.axios.get(MESSAGES).then((res) => {
        console.log(res.data)
        this.messages = res.data
        this.messagesLoaded = true
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
