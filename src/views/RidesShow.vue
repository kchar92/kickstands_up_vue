<template>
    <section id="banner">

      <div class="content">
        <section>
          <header>
            <h3>{{ ride.name }}</h3>
          </header>
          <div class="container">
            <div id="map">
              <GmapMap ref="map"
                :center="center"
                :zoom="10"
                style="width:100%;  height: 500px;">
            
                <GmapMarker :key="index.id" v-for="(m, index) in gasMarkers" :position="m.position" @click="center=m.position" :clickable="true" :icon="gasMarker">  
                </GmapMarker>


                <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position" :icon="markerOptions">   
                </GmapMarker>

                <GmapMarker :key="index.id" v-for="(m, index) in endMarkers" :position="m.position" @click="center=m.position" :icon="endMarkerOptions">
                </GmapMarker>
              </GmapMap>

              <button v-on:click="getRoute()">Avoid Highways</button>
            </div>
              <p>Date & Time: {{ ride.date_time }}</p>
              <p>Starting: {{ ride.starting_point }}</p>
              <p>Ending: {{ ride.end_point }}</p>
              <p>Bike Type: {{ ride.bike_type }}</p>

          </div>
        </section>
      </div>

      </section>
  
</template>

<style>
</style>

<script>
import * as VueGoogleMaps from "vue2-google-maps";
import {gmapApi} from 'vue2-google-maps';
import axios from "axios";
const gasMarker = ('http://maps.google.com/mapfiles/kml/shapes/gas_stations.png');
const startMarker = ('http://maps.google.com/mapfiles/kml/shapes/motorcycling.png');
const endMarker = ('http://maps.google.com/mapfiles/kml/shapes/flag.png');

export default {
  computed: {
    google: gmapApi
  },
  data: function() {
    return {
      ride: {},
      center: {lat: 39.1976, lng: -120.2354},
      gasMarkers: [],
      markers: [],
      endMarkers: [],
      infoWindows: [],
      avoidHighways: false,
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
        size: {width: 25, height: 25, f: 'px', b: 'px',},
        scaledSize: {width: 25, height: 25, f: 'px', b: 'px',}
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
      

      // axios.get(`/api/route?starting_location=${start["lat"]},${start["lng"]}&end_location=${end["lat"]},${end["lng"]}`).then(response => {
      //   console.log(response);
      // });

      this.markers.push({position: start});
      this.endMarkers.push({position: end});
      this.center = start;

      this.markers.map(marker => {
        this.$set(this.gasMarkers, 'open', true);
        return this.gasMarkers;
      });
    }).then(()=> {
      setTimeout(() => {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer(({ suppressMarkers: true }));
        this.directionsDisplay.setMap(this.$refs.map.$mapObject);
        var vm = this;
        vm.directionsService.route({
          origin: `${this.ride.starting_point_lat},${this.ride.starting_point_long}`, // Can be coord or also a search query
          destination: `${this.ride.end_point_lat},${this.ride.end_point_long}`,
          travelMode: 'DRIVING',
          avoidHighways: this.avoidHighways,
        }, function(response, status) {
          if (status === 'OK') {
            vm.directionsDisplay.setDirections(response); // draws the polygon to the map
          } else {
            console.log('Directions request failed due to ' + status);
          }
        });
      }, 1000);
      
    }); 
  },
  methods: {
    getRoute: function() {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsDisplay = new google.maps.DirectionsRenderer(({ suppressMarkers: true }));
      this.directionsDisplay.setMap(this.$refs.map.$mapObject);
      var vm = this;
      vm.directionsService.route({
        origin: `${this.ride.starting_point_lat},${this.ride.starting_point_long}`, // Can be coord or also a search query
        destination: `${this.ride.end_point_lat},${this.ride.end_point_long}`,
        travelMode: 'DRIVING',
        avoidHighways: this.avoidHighways = true,
      }, function(response, status) {
        if (status === 'OK') {
          vm.directionsDisplay.setDirections(response); // draws the polygon to the map
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    }
  }
};
</script>