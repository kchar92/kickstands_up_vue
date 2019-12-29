<template>
  <div class="stations">
    <h1>{{ message }}</h1>
    <div v-for="station in stations">
      <p>Name: {{ station.name }}</p>
      <p>Address: {{ station.address }},
      {{ station.city }}</p>
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
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Station index",
      stations: []
    };
  },
  created: function() {
    axios.get("/api/stations").then(response => {
      console.log(response.data);
      this.stations = response.data;
    });
  },
  methods: {}
};
</script>
