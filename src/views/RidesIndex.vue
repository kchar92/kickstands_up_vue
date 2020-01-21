<template>
  <section id="banner">

    <header class="major">
      <h2>Rides</h2>
    </header>
      <div class="inner">
        <div v-for="ride in rides">
        <section>
          <header>
            <h3>{{ ride.ride }}</h3>
          </header>
          <p>Date & Time: {{ ride.date_time | moment("dddd, MMMM Do YYYY, h:mm a") }}</p>
          <router-link v-bind:to="`/rides/${ride.id}`">More details</router-link>
          <br>
          <button id="add" v-if="attending" v-on:click="addRide(ride)">Add to my rides</button>
          <br>
          <!-- <button id="add" v-if="!attending" v-on:click="removeRide(ride)">Remove ride</button> -->
          <br>
        </section>
      </div>
    </div>

  </section>

</template>

<style>
</style>

<script>
import axios from "axios";
var moment = require('moment');
export default {
  data: function() {
    return {
      message: "Rides",
      rides: [],
      attending: this.$route.query.attending !== "true",
    };
  },
  created: function() {
    console.log(this.attending);
    axios.get("/api/rides?attending=" + this.$route.query.attending).then(response => {
      this.rides = response.data;
    });
  },
  methods: {
    addRide: function(ride) {
      var params = {
        ride_id: ride.id
      };
      var index = this.rides.indexOf(ride);
      axios.post("/api/ride_users", params).then(response => {
        this.rides.splice(index, 1);
      });
    },
    // removeRide: function(ride) {
    //   var params = {
    //     user_id: 7,
    //     ride_id: ride.id
    //   };
    //   var index = this.rides.indexOf(ride);
    //   console.log(params);
    //   axios.delete("/api/ride_users/" + 60).then(response => {
    //     this.rides.splice(index, 1);
    //   });
    // }
  },
  watch: {
    "$route": function() {
      window.location.reload();
    }
  }
};
</script>
