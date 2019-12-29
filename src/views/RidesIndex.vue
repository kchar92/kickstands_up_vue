<template>
  <div class="rides-index">
    <!-- <button v-on:click="otherRides()">See other rides</button> -->
    <h1>{{ message }}</h1>
    <div v-for="ride in rides">
      <p>Name: {{ ride.ride }}</p>
      <p>Date & Time: {{ ride.date_time }}</p>
      <router-link v-bind:to="`/rides/${ride.id}`">More details</router-link>
      <br>
      <button v-if="attending" v-on:click="addRide(ride)">Add to my rides</button>
      <button v-if="!attending" v-on:click="removeRide(ride)">Remove ride</button>
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
      rides: [],
      attending: this.$route.query.attending !== "true"
    };
  },
  created: function() {
    console.log(this.attending);
    axios.get("/api/rides?attending=" + this.$route.query.attending).then(response => {
      console.log(response.data);
      this.rides = response.data;
    });
  },
  methods: {
    addRide: function(ride) {
      console.log('adding ride');
      var params = {
        ride_id: ride.id
      };
      axios.post("/api/ride_users", params).then(response => {
        this.rides.splice(ride, 1);
      });
    },
    removeRide: function(ride) {
      console.log("deleting ride");
      // var rideUser = {
      //   ride_id: ride.id
      // };
      // axios.delete("/api/ride_users/" + rideUser.id).then(response => {
      //   this.$router.push("/rides?attending=true");
      // });
    }
  },
  watch: {
    "$route": function() {
      window.location.reload();
    }
  }
};
</script>
