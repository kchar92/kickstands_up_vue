<template>
  <div class="home">
    <button v-on:click="myRides()">My rides</button>
    <button v-on:click="otherRides()">See other rides</button>
    <h1>{{ message }}</h1>
    <div v-for="ride in rides">
      <p>Name: {{ ride.ride }}</p>
      <p>Date & Time: {{ ride.date_time }}</p>
      <router-link v-bind:to="`/rides/${ride.id}`">More details</router-link>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Rides",
      rides: []
    };
  },
  created: function() {
    axios.get("/api/rides").then(response => {
      this.rides = response.data;
    });
  },
  methods: {
    myRides: function() {
      axios.get("/api/rides?attending=true").then(response => {
        this.rides = response.data;
      });
      
    },
    otherRides: function() {
      axios.get("/api/rides").then(response => {
        this.rides = response.data;
      });
    }
  }
};
</script>
