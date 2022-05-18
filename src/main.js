import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import {i18n} from '@/plugins/i18n'
import VueAnimateOnScroll from 'vue-animate-onscroll';
import VueApexCharts from 'vue-apexcharts'
import router from './Routes'
import store from './store/index'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// google maps
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8dExdQtd6WILpKT57uF2boPp8VyCIufk',
  },
})
// geolocation
import VueGeolocation from 'vue-browser-geolocation';
Vue.use(VueGeolocation);


Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(VueAnimateOnScroll);

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Toast);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
  },
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App), store
}).$mount('#app')
