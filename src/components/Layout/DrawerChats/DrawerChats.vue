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
        <h3 class="h7-em tcenter">Pedidos Pendientes</h3>
      </section>

      <chat-window
        :current-user-id="currentUserId"
        :rooms="rooms"
        :rooms-loaded="roomsLoaded"
        :loading-rooms="loadingRooms"
        :messages="messages"
        :messages-loaded="messagesLoaded"
        @fetch-messages="onFetchMessages"
        @room-action-handler="test($event)"
        :width="'max-content'"
        responsive-breakpoint="3000"
      />
    </v-navigation-drawer>
  </section>
</template>

<script>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
export default {
  name: "Categories",
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
      rooms: [
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
  methods: {
    test(e) {
      console.log(e);
    },
    onFetchMessages() {
      this.axios.get()
      setTimeout(() => {

        this.messages = [
          {
          },
        ];
        this.messagesLoaded = true;
      });
    },
  },
};
</script>

<style src="./DrawerChats.scss" lang="scss" />
