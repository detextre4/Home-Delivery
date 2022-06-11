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
      :zoom="zoom"
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
      @dragend="handleDrag()"
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
// const GOOGLE_MAPS_API_KEY = 'AIzaSyCTwopQSI2qo3en7mGvYZZqL1Y8jGbx2EY'
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
      zoom: 13,
      // marker
      marker: {lat: 50.60229509638775,lng: 3.0247059387528408},
      // places: [],
    }
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {lat: 0,lng: 0}
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    },
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
    },
    findLocation() {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.myCoordinates.lat},
      ${this.myCoordinates.lng}&type=restaurant&radius=2000&key=[AIzaSyB8dExdQtd6WILpKT57uF2boPp8VyCIufk]`;
      axios
        .get(URL)
        .then(response => {
          this.places = response.data.results;
          this.addLocationsToGoogleMaps();
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    // addLocationsToGoogleMaps() {
    //   var map = new google.maps.Map(this.$refs['map'], {
    //     zoom: 15,
    //     center: new google.maps.LatLng(this.lat, this.lng),
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   });
    //   this.places.forEach((place) => {
    //     const lat = place.geometry.location.lat;
    //     const lng = place.geometry.location.lng;
    //     let marker = new google.maps.Marker({
    //       position: new google.maps.LatLng(lat, lng),
    //       map: map
    //     });
    //   });
    // }
  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
