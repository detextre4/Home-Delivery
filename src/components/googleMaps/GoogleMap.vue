<template>
  <GmapMap
    ref="mapRef"
    :center="myCoordinates"
    :zoom="14"
    :options="{
      key: 'AIzaSyB8dExdQtd6WILpKT57uF2boPp8VyCIufk',
      mapId: '6840d2b70ceb1209',
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
      disableDefaultUi: false,
    }"
  >
    <gmap-custom-marker
      :marker="myCoordinates"
      alignment="bottomright"
      :offsetX="-10"
      :offsetY="17.5"
      @click.native="someFunction()"
    >
      <img class="localImg" src="@/assets/logos/logo.svg" />
    </gmap-custom-marker>
  </GmapMap>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker';
export default {
  name: "googleMap",
  components: {
    'gmap-custom-marker': GmapCustomMarker
  },
  data() {
    return {
      // map
      map: null,
      myCoordinates: {lat: 0,lng: 0,},
      // marker
      marker: {lat: 50.60229509638775,lng: 3.0247059387528408}
    }
  },
  // computed: {
  //   mapCoordinates() {
  //     if (!this.map) {
  //       return {lat: 0,lng: 0}
  //     }
  //     return {
  //       lat: this.map.getCenter().lat().toFixed(4),
  //       lng: this.map.getCenter().lng().toFixed(4)
  //     }
  //   }
  // },
  created() {
    // get user's coordinates from browser request
    this.$getLocation()
    .then(coordinates => {this.myCoordinates = coordinates})
    .catch(error => alert(error))
  },
  mounted() {
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
