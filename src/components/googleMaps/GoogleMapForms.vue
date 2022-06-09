<template>
  <section class="mapContainer">
    <span class="marcador bold h9_em">{{mapCoordinates}}</span>
    <v-btn class="botones2" height="40px">
      <span class="h10_em">Aceptar</span>
    </v-btn>
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
        fullscreenControl: false,
        disableDefaultUi: false,
        styles: [
          {elementType: 'geometry', stylers: [{color: 'rgb(224, 224, 224)'}]},
          {featureType: 'road.highway', elementType: 'geometry', stylers: [{color: '#3E2185'}]},
        ]
      }"
      @dragend="handleDrag()"
    ></GmapMap>
  </section>
</template>

<script>
export default {
  name: "googleMapForms",
  data() {
    return {
      // map
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 13,
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
    // get user's coordinates from browser request
    this.$getLocation()
    .then(coordinates => {
      this.myCoordinates = coordinates;
    })
    .catch(error => alert(error))

    // does the user have a saved zoom? use it instead of the default
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
    handleDrag() {
      // get zoom level, store in localstorage
      let zoom = this.map.getZoom();
      localStorage.zoom = zoom;
    }
  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
