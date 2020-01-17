<template>
  <section id="banner">

          <!--
            ".inner" is set up as an inline-block so it automatically expands
            in both directions to fit whatever's inside it. This means it won't
            automatically wrap lines, so be sure to use line breaks where
            appropriate (<br />).
          -->
          <div class="inner">

            <header>
              <h2>KickstandsUp</h2>
            </header>
            <p>For motorcycle riders</p>

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
    };
  },
  created: function() {
    console.log(axios.defaults.headers.common["Authorization"]);
  },
  methods: {}
};
</script>