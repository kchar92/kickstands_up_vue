<template>
  <div class="container">
    <p>Name: {{ ride.name }}</p>
    <p>Date & Time: {{ ride.date_time }}</p>
    <p>Starting: {{ ride.starting_point }}</p>
    <p>Ending: {{ ride.end_point }}</p>
    <p>Distance: {{ ride.distance }}</p>
    <p>Bike Type: {{ ride.bike_type }}</p>
    <router-link to="/rides">Back to all rides</router-link>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      ride: {}
    };
  },
  created: function() {
    axios.get("/api/rides/" + this.$route.params.id).then(response => {
      this.ride = response.data;
    });
  },
  methods: {}
};
</script>