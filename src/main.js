import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places" // necessary for places input
  }
});


axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
