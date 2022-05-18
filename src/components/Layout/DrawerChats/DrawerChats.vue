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
      roomsLoaded: true,
      messagesLoaded: false,
      loadingRooms: false,
      messages: [],
    }
  },
  methods: {
    test(e) {
      console.log(e);
    },
    onFetchMessages() {
      setTimeout(() => {
        this.messages = [
          {
            _id: 7890,
            indexId: 12092,
            content: "Message 1",
            senderId: 1234,
            username: "John Doe",
            avatar: "assets/imgs/doe.png",
            date: "13 November",
            timestamp: "10:20",
            system: false,
            saved: true,
            distributed: true,
            seen: true,
            deleted: false,
            disableActions: false,
            disableReactions: false,
            files: [
              {
                name: "My File",
                size: 67351,
                type: "png",
                audio: true,
                duration: 14.4,
                url:
                  "https://firebasestorage.googleapis.com/v0/b/vuexfire-a9c43.appspot.com/o/files%2F6R0MijpK6M4AIrwaaCY2%2F5RM2yf2TBCVmAUpaHbCD%2Fimage.png?alt=media&token=141dc7d8-1665-438b-871e-6e8566fabd2c",
                preview:
                  "https://firebasestorage.googleapis.com/v0/b/vuexfire-a9c43.appspot.com/o/files%2F6R0MijpK6M4AIrwaaCY2%2F5RM2yf2TBCVmAUpaHbCD%2Fimage.png?alt=media&token=141dc7d8-1665-438b-871e-6e8566fabd2c",
              },
            ],
            reactions: {
              "😁": [
                1234, // USER_ID
                4321,
              ],
              "🥰": [1234],
            },
            replyMessage: {
              content: "Reply Message",
              senderId: 4321,
              files: [
                {
                  name: "My Replied File",
                  size: 67351,
                  type: "png",
                  audio: true,
                  duration: 14.4,
                  url:
                    "https://firebasestorage.googleapis.com/v0/b/vuexfire-a9c43.appspot.com/o/files%2F6R0MijpK6M4AIrwaaCY2%2F5RM2yf2TBCVmAUpaHbCD%2Fimage.png?alt=media&token=141dc7d8-1665-438b-871e-6e8566fabd2c",
                  preview:
                    "https://firebasestorage.googleapis.com/v0/b/vuexfire-a9c43.appspot.com/o/files%2F6R0MijpK6M4AIrwaaCY2%2F5RM2yf2TBCVmAUpaHbCD%2Fimage.png?alt=media&token=141dc7d8-1665-438b-871e-6e8566fabd2c",
                },
              ],
            },
          },
        ];
        this.messagesLoaded = true;
      });
    },
  },
};
</script>

<style src="./DrawerChats.scss" lang="scss" />
