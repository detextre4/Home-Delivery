<template>
  <section class="relative">
    <v-text-field
      solo
      hide-details
      class="inputGoogleSearch"
      prepend-icon="mdi-magnify"
      @change="findLocation()"
    ></v-text-field>
    <!-- <div class="ui segment" style="max-height:500px;overflow:scroll">
      <div class="ui divided items">
        <div class="item" v-for="place in places" :key="place.id">
          <div class="content">
            <div class="header">{{place.name}}</div>
            <div class="meta">{{place.vicinity}}</div>
          </div>
        </div>
      </div>
    </div> -->
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
        fullscreenControl: false,
        disableDefaultUi: false,
      }"
    >
      <gmap-custom-marker
        :marker="myCoordinates"
        alignment="bottomright"
        @click.native="someFunction()"
      >
        <img class="localImg" src="@/assets/logos/logo.svg" />
      </gmap-custom-marker>
    </GmapMap>
  </section>
</template>

<script>
import axios from 'axios';
import GmapCustomMarker from 'vue2-gmap-custom-marker';
export default {
  name: "GoogleMapNearbyPlace",
  components: { 'gmap-custom-marker': GmapCustomMarker },
  data() {
    return {
      // map
      map: null,
      myCoordinates: {lat: 0,lng: 0,},
      // marker
      marker: {lat: 50.60229509638775,lng: 3.0247059387528408},
      // places: [],
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
  //   },
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
