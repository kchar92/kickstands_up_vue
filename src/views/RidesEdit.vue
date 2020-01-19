<template>
  <section id="banner">
    <div class="container">
        <form v-on:submit.prevent="editRide(ride)">
          <h1>Edit: {{ ride.name }}</h1>
          <div class="inner">
            <div class="form-group">
              <label>Name:</label> 
              <input type="text" class="form-control" v-model="ride.rideName">
            </div>
            <div class="form-group">
              <label>Date & Time:</label>
              <datetime
                type="datetime"
                format="MM/dd/yyyy HH:mm"
                v-model="ride.dateTime"
                use12-hour auto>
                  
              </datetime>
            </div>
            <div class="form-group">
              <label>Start Location:</label>
              <input type="text" class="form-control" v-model="ride.rideStart">
            </div>
            <div class="form-group">
              <label>End Location:</label>
              <input type="text" class="form-control" v-model="ride.rideEnd">
            </div>
            <div class="form-group">
              <label>Bike Type:</label>
              <input type="text" class="form-control" v-model="ride.bikeType">
            </div>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <input type="submit" class="btn btn-primary" value="Submit">
          </div>
        </form>
      </div>
    </section>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      ride: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/rides/" + this.$route.params.id).then(response => {
      this.ride = response.data;
    });
  },
  methods: {
    editRide: function(ride) {
      var params = {
        name: ride.rideName,
        date_time: ride.dateTime,
        starting_point: ride.rideStart,
        starting_point_lat: ride.start_latitude,
        start_point_long: ride.start_longitude,
        end_point: ride.rideEnd,
        end_point_lat: ride.end_latitude,
        end_point_long: ride.end_longitude,
        bike_type: ride.bikeType
      };
      axios.patch("/api/rides/" + ride.id, params).then(response => {
        this.$router.push("/rides");
      })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    } 
  }
};
</script>
