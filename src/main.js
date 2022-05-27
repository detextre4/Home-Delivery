import * as VueGoogleMaps from 'vue2-google-maps';
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import {i18n} from '@/plugins/i18n'
import VueApexCharts from 'vue-apexcharts'
import router from './Routes'
import store from './store/index'
import Vue from 'vue'
import VueGeolocation from 'vue-browser-geolocation';
import App from './App.vue'
import vuetify from './plugins/vuetify'

// google maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8dExdQtd6WILpKT57uF2boPp8VyCIufk',
  },
})
// geolocation
Vue.use(VueGeolocation);
// apex charts
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// toast
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')
