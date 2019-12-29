<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>An app for motorcycle riders...</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Kickstands Up"
    };
  },
  created: function() {
    console.log(axios.defaults.headers.common["Authorization"]);
  },
  methods: {}
};
</script>