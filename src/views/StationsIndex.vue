<template>
  <div class="stations">
    <h1>{{ message }}</h1>

    <div id="map">
      <gmap-map
        :center="center"
        :zoom="5"
        style="width:100%;  height: 500px;">

        <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position" :icon="markerOptions">
          
        </gmap-marker>
      </gmap-map>

      
    </div>

    <div v-for="station in stations">
      <p>Name: {{ station.name }}</p>
      <p>Address: {{ station.address }},
      {{ station.city }} {{ station.state }}</p>
      <p>Brand: {{ station.brand }}</p>
      <p>Octane: {{ station.octane }}</p>
      <p>Phone Number: {{ station.phone_number }}</p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
const startMarker = ('http://maps.google.com/mapfiles/kml/shapes/gas_stations.png');
export default {
  data: function() {
    return {
      message: "Station index",
      stations: [],
      center: { lat: 36.7783, lng: -119.4179 },
      markers: [],
      coordinates: [],
      markerOptions: {
        url: startMarker,
        size: {width: 50, height: 50, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 30, f: 'px', b: 'px',}
      }
    };
  },
  created: function() {
    axios.get("/api/stations").then(response => {
      console.log(response.data);
      this.stations = response.data;
      var i = 0;
      while (i < this.stations.length) {
        var coordinates = {
          lat: this.stations[i]["latitude"],
          lng: this.stations[i]["longitude"]
        };
        this.markers.push({position: coordinates});

        i++;
      }

      
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
