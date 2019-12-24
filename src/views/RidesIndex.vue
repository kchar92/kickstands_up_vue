<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="ride in rides">
      <p>Name: {{ ride.ride }}</p>
      <p>Date & Time: {{ ride.date_time }}</p>
      <p>Starting: {{ ride.starting_point }}</p>
      <p>Ending: {{ ride.ending_point }}</p>
      <p>Distance: {{ ride.distance }} miles</p>
      <p>Bike Type: {{ ride.bike_type }}</p>
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
      message: "Rides index",
      rides: []
    };
  },
  created: function() {
    axios.get("/api/rides").then(response => {
      console.log(response.data);
      this.rides = response.data;
    });
  },
  methods: {}
};
</script>
