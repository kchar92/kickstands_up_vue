<template>
  <div class="container">
    <div id="map">
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 500px;">

        <gmap-marker :key="index.id" v-for="(m, index) in gasMarkers" :position="m.position" @click="center=m.position" :icon="gasMarker">
          
        </gmap-marker>

        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position" :icon="markerOptions">   
        </gmap-marker>

        <gmap-marker :key="index.id" v-for="(m, index) in endMarkers" :position="m.position" @click="center=m.position" :icon="endMarkerOptions">
        </gmap-marker>

      </gmap-map>

      
    </div>

    <p>Name: {{ ride.name }}</p>
    <p>Date & Time: {{ ride.date_time }}</p>
    <p>Starting: {{ ride.starting_point }}</p>
    <p>Ending: {{ ride.end_point }}</p>
    <p>Bike Type: {{ ride.bike_type }}</p>

  </div>
</template>

<style>
</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
const gasMarker = ('http://maps.google.com/mapfiles/kml/shapes/gas_stations.png');
const startMarker = ('http://maps.google.com/mapfiles/kml/shapes/motorcycling.png');
const endMarker = ('http://maps.google.com/mapfiles/kml/shapes/flag.png');
export default {
  
  data: function() {
    return {
      ride: {},
      center: { lat: 45.508, lng: -73.587 },
      gasMarkers: [],
      markers: [],
      endMarkers: [],
      infoWindows: [],
      markerOptions: {
        url: startMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      },
      endMarkerOptions: {
        url: endMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      },
      gasMarker: {
        url: gasMarker,
        size: {width: 30, height: 30, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      }
      
    };
  },
  created: function() {
    axios.get("/api/stations").then(response => {
      console.log(response.data);
      this.gasMarkers = response.data;    
    });

    axios.get("/api/rides/" + this.$route.params.id).then(response => {
      this.ride = response.data;

      var start = {
        lat: this.ride.starting_point_lat,
        lng: this.ride.starting_point_long
      };
      var end = {
        lat: this.ride.end_point_lat,
        lng: this.ride.end_point_long
      };
      

      this.markers.push({position: start});
      this.endMarkers.push({position: end});
      this.center = start;
    }); 
  },
 
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>