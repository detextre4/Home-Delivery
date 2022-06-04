<template>
  <section id="alerts">
    <v-snackbar
      v-for="(item, index) in dataAlerts" :key="index"
      v-model="item.model"
      centered
      right
      transition="slide-x-reverse-transition"
      color="var(--clr-btn)"
    >
      <template v-slot:action="{ attrs }">
        <v-btn class="h10_em semibolbold" color="red" text rounded v-bind="attrs" @click="Close(item)">
          {{$t('cerrar')}}
        </v-btn>
      </template>

      <aside class="alert-content divcol">
        <div class="divrow acenter">
          <v-icon :style="`color: ${item.color} !important`" size="2.5rem">{{ item.icon }}</v-icon>
          <h3 class="h8_em p bold" :style="`color: ${item.color} !important`">{{ $t(item.title) }}</h3>
        </div>

        <span class="h11_em semibold">
          {{ $t(item.desc) }}
        </span>
      </aside>
    </v-snackbar>
  </section>
</template>

<script>
export default {
  name: "alerts",
  i18n: require("./i18n"),
  data() {
    return {
      alert: true,
      dataAlerts: [
        {
          key: "success",
          model: false,
          icon: "mdi-check-circle",
          title: "aprobado",
          color: "#A4FDDF",
          desc: "textAprobado"
        },
        {
          key: "cancel",
          model: false,
          icon: "mdi-close-circle",
          title: "denegado",
          color: "rgb(200, 0, 0)",
          desc: "textDenegado"
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
