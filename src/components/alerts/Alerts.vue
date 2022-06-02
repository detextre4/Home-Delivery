<template>
  <section id="alerts">
    <v-snackbar
      v-for="(item, index) in dataAlerts" :key="index"
      v-model="item.model"
      elevation="10"
      centered
      right
      transition="slide-x-reverse-transition"
      color="var(--clr-btn)"
    >
      <template v-slot:action="{ attrs }">
        <v-btn class="h10_em semibolbold" color="red" text rounded v-bind="attrs" @click="Close(item)">
          Cerrar
        </v-btn>
      </template>

      <aside class="alert-content divcol">
        <div class="divrow acenter">
          <v-icon :style="`color: ${item.color} !important`" size="2.5rem">{{ item.icon }}</v-icon>
          <h3 class="h8_em p bold" :style="`color: ${item.color} !important`">{{ item.title }}</h3>
        </div>

        <span class="h11_em semibold">
          {{ item.desc }}
        </span>
      </aside>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      alert: true,
      dataAlerts: [
        {
          key: "success",
          model: false,
          icon: "mdi-check-circle",
          title: "Aprobado",
          color: "#A4FDDF",
          desc: "Operacion completada exitosamente"
        },
        {
          key: "cancel",
          model: false,
          icon: "mdi-close-circle",
          title: "Denegado",
          color: "rgb(200, 0, 0)",
          desc: "Operacion fallida"
        }
      ]
    };
  },
  methods: {
    Alerts(key) {
      if (key == 'success') {
        this.dataAlerts[0].model = true
      }
      if (key == 'cancel') {
        this.dataAlerts[1].model = true
      }
    },
    Close(item) {
      item.model = false;
    }
  }
};
</script>

<style src="./Alerts.scss" lang="scss"></style>
