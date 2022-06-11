<template>
  <section class="mapContainer">
    <v-btn icon class="close"
      @click.stop="map.setCenter(myCoordinates); $emit('closeModal'); ClearMarker()">
      <v-icon>mdi-close-circle-outline</v-icon>
    </v-btn>
    <!-- <span class="marcador bold h9_em">{{markers[0].position}}</span> -->
    <v-btn v-if="markers[0]" class="botones2 anim_movedown" height="40px"
      @click="$emit('getDirection',markers[0]); map.setCenter(myCoordinates); 
      $emit('closeModal'); ClearMarker()">
      <span class="h10_em">Aceptar</span>
    </v-btn>

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
      @click="mapClicked"
      @zoom_changed="update('zoom', $event)"
      @center_changed="update('reportedCenter', $event)"
      @maptypeid_changed="update('mapType', $event)"
      @bounds_changed="update('bounds', $event)"
    >
      <gmap-cluster :grid-size="gridSize" v-if="clustering">
        <template v-for="item in activeMarkers">
          <gmap-marker
            :key="item.id"
            v-if="item.enabled"
            :position="item.position"
            :opacity="item.opacity"
            :draggable="item.draggable"
            @click="item.ifw=!item.ifw"
            @dragend="mapClicked">
            <gmap-info-window :opened="item.ifw">
              <v-card class="grid" style="grid-template-columns:repeat(2,1fr); gap:0 1em">
                <h4>latitud</h4>
                <h4>Longitud</h4>
                <span>{{item.ifw2latText}}</span>
                <span>{{item.ifw2lngText}}</span>
              </v-card>
            </gmap-info-window>
          </gmap-marker>
        </template>
      </gmap-cluster>
    </GmapMap>
  </section>
</template>

<script>
export default {
  name: "googleMapForms",
  data() {
    return {
      // map
      map: null,
      myCoordinates: {lat: 0,lng: 0,},
      // zoom: 13,
      //testing
      markers: [],
      lastId: 1,
      clustering: true,
      gridSize: 50,
      markerCount: 0,
    }
  },
  computed: {
    activeMarkers() {
      if (this.markersEven) {return this.markers.filter((v, k) => k % 2 == 0);}
      else {return this.markers;}
    },
  },
  created() {
    // get user's coordinates from browser request
    this.$getLocation()
    .then(coordinates => {this.myCoordinates = coordinates})
    .catch(error => alert(error));
  },
  mounted() {
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
    ClearMarker() {setTimeout(() => {this.markers.splice(0,1);this.markerCount=0;},500);},
    mapClicked(mouseArgs) {
      if (this.markerCount < 1) {this.addMarker(mouseArgs)}
      const createdMarker = this.markers[this.markers.length - 1];
      createdMarker.position.lat = mouseArgs.latLng.lat();
      createdMarker.position.lng = mouseArgs.latLng.lng();
      createdMarker.ifw2latText = mouseArgs.latLng.lat();
      createdMarker.ifw2lngText = mouseArgs.latLng.lng();
    },
    addMarker: function addMarker(mouseArgs) {
      this.markerCount++
      this.lastId++;
      this.markers.push({
        id: this.lastId,
        position: {lat: 0,lng: 0},
        opacity: 1,
        draggable: true,
        enabled: true,
        ifw: true,
        ifw2latText: mouseArgs.latLng.lat(),
        ifw2lngText: mouseArgs.latLng.lng(),
        direccion: "direccion creada al azar"
      });
    },
    //   if (this.markerCount < 1) {
    //     const createdMarker = this.addMarker();
    //     createdMarker.position.lat = mouseArgs.latLng.lat();
    //     createdMarker.position.lng = mouseArgs.latLng.lng();
    //   }
    // },
    // addMarker: function addMarker() {
    //   this.markerCount++
    //   this.lastId++;
    //   this.markers.push({
    //     id: this.lastId,
    //     position: {
    //       lat: 0,
    //       lng: 0
    //     },
    //     opacity: 1,
    //     draggable: true,
    //     enabled: true,
    //     ifw: true,
    //     ifw2text: 'This text is bad please change me :('
    //   });
    //   return this.markers[this.markers.length - 1];
    // },
    update(field, event) {
      if (field === 'reportedCenter') {
        // N.B. It is dangerous to update this.center
        // Because the center reported by Google Maps is not exactly
        // the same as the center you pass it.
        // Instead we update this.center only when the input field is changed.
        this.reportedCenter = {
          lat: event.lat(),
          lng: event.lng(),
        };
        // If you wish to test the problem out for yourself, uncomment the following
        // and see how your browser begins to hang:
        // this.center = _.clone(this.reportedCenter)
      } else if (field === 'bounds') {
        this.mapBounds = event;
      } else {
        this.$set(this, field, event);
      }
    },
  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
