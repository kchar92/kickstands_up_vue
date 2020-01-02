<template>
  <div class="container">
    <div id="map">
      <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 500px;">

        <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
      </gmap-map>

      
    </div>

    <p>Name: {{ ride.name }}</p>
    <p>Date & Time: {{ ride.date_time }}</p>
    <p>Starting: {{ ride.starting_point }}</p>
    <p>Ending: {{ ride.end_point }}</p>
    <p>Distance: {{ ride.distance }}</p>
    <p>Bike Type: {{ ride.bike_type }}</p>
  </div>
</template>

<style>
</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
export default {
  data: function() {
    return {
      ride: {},
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      starting_lat: Number,
      starting_long: Number
      
    };
  },
  created: function() {
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
      this.markers.push({position: end});
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