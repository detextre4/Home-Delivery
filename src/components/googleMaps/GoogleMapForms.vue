<template>
  <section class="mapContainer">
    <span class="marcador bold h9_em">{{markers[0].position}}</span>
    <v-btn class="botones2" height="40px">
      <span class="h10_em">Aceptar</span>
    </v-btn>
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
      @click="mapRclicked"
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
            @click="item.ifw=!item.ifw">
            <gmap-info-window :opened="item.ifw">{{item.ifw2text}}</gmap-info-window>
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
      zoom: 13,
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
    mapCoordinates() {
      if (!this.map) {return {lat: 0,lng: 0}}
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      }
    }
  },
  created() {
    // get user's coordinates from browser request
    this.$getLocation()
    .then(coordinates => {this.myCoordinates = coordinates;})
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


    updateMapCenter(which, value) { // eslint-disable-line no-unused-vars
      this.center = _.clone(this.reportedCenter);
    },
    mapClicked(mouseArgs) {
      console.log('map clicked', mouseArgs); // eslint-disable-line no-console
    },
    mapRclicked(mouseArgs) {
      if (this.markerCount < 1) {this.addMarker()}
      const createdMarker = this.markers[this.markers.length - 1];
      createdMarker.position.lat = mouseArgs.latLng.lat();
      createdMarker.position.lng = mouseArgs.latLng.lng();
    },
    addMarker: function addMarker() {
      this.markerCount++
      this.lastId++;
      this.markers.push({
        id: this.lastId,
        position: {
          lat: 0,
          lng: 0
        },
        opacity: 1,
        draggable: true,
        enabled: true,
        ifw: true,
        ifw2text: '¿desea escoger esta localización?'
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
    resetPlPath() {
      this.plPath = this.originalPlPath;
    },
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
    updateChild(object, field, event) {
      if (field === 'position') {
        object.position = {
          lat: event.lat(),
          lng: event.lng(),
        };
      }
    },
    updatePolygonPaths(paths) { //eslint-disable-line no-unused-vars
      // TODO
    },
    updatePolylinePath(paths) { //eslint-disable-line no-unused-vars
      // TODO:
    },
    updateCircle(prop, value) {
      if (prop === 'radius') {
        this.radius = value;
      } else if (prop === 'bounds') {
        this.circleBounds = value;
      }
    },
    updateRectangle(prop, value) {
      if (prop === 'bounds') {
        this.rectangleBounds = value;
      }
    },
    updatePlace(place) {
      if (place && place.geometry && place.geometry.location) {
        var marker = this.addMarker();
        marker.position.lat = place.geometry.location.lat();
        marker.position.lng = place.geometry.location.lng();
      }
    }
  },
};
</script>

<style src="./GoogleMap.scss" lang="scss" />
