<template>
  <section class="googleMap">
    <div class="divcol center">
      <h1>coordinates</h1>
      <div class="center gap marginbottom">
          <v-btn>latitude: {{myCoordinates.lat}}</v-btn>
          <v-btn>longitude: {{myCoordinates.lng}}</v-btn>
      </div>

      <h1>map coordinates</h1>
      <div class="center gap">
        <div class="divcol">
          <v-btn>latitude:</v-btn>
          <v-text-field
            v-model="mapCoordinates.lat"
            solo
            label="latitud"
          ></v-text-field>
        </div>

        <div class="divcol">
          <v-btn>longitude:</v-btn>
          <v-text-field
            v-model="mapCoordinates.lng"
            solo
            label="longitud"
          ></v-text-field>
        </div>
      </div>
    </div>

    <GmapMap
      ref="mapRef"
      :center="myCoordinates"
      :zoom="zoom"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUi: false,
        styles: [
          {elementType: 'geometry', stylers: [{color: 'rgb(224, 224, 224)'}]},
          {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3E2185'}]},
        ]
      }"
      @dragend="handleDrag()"
    >
      <gmap-custom-marker
        :marker="myCoordinates"
        alignment="bottomright"
        :offsetX="-10"
        :offsetY="17.5"
        @click.native="someFunction()"
      >
        <img class="localImg" src="@/assets/logos/logo.png" />
      </gmap-custom-marker>
    </GmapMap>
  </section>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker';
export default {
  name: "Categorias",
  components: {
    'gmap-custom-marker': GmapCustomMarker
  },
  data() {
    return {
      // map
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 13,
      // marker
      marker: {
        lat: 50.60229509638775,
        lng: 3.0247059387528408
      }
    }
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0
        }
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    }
  },
  created() {
    // does the user have a saved center? use it instead of the default
    // if (localStorage.center) {
    //   this.myCoordinates = JSON.parse(localStorage.center);
    // } else {
    // get user's coordinates from browser request
    this.$getLocation()
    .then(coordinates => {
      this.myCoordinates = coordinates;
    })
    .catch(error => alert(error))
    // }
    
    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
    // this.$refs.mapRef.setMapOnAll(null);
  },
  methods: {
    handleDrag() {
      // get center and zoom level, store in localstorage
      // let center = {
      //   lat: this.map.getCenter().lat(),
      //   lng: this.map.getCenter().lng()
      // };
      let zoom = this.map.getZoom();
      
      // localStorage.center = JSON.stringify(center)
      localStorage.zoom = zoom;
    }

  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
