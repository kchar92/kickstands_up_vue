<template>
  <div class="home">
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
    };
  },
  created: function() {
    console.log(axios.defaults.headers.common["Authorization"]);
  },
  methods: {}
};
</script>