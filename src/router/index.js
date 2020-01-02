import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import RidesIndex from '../views/RidesIndex.vue';
import RidesNew from '../views/RidesNew.vue';
import RidesShow from '../views/RidesShow.vue';
import StationsIndex from '../views/StationsIndex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/rides',
    name: 'rides',
    component: RidesIndex
  },
  {
    path: '/rides/new',
    name: 'rides-new',
    component: RidesNew
  },
  {
    path: '/rides/:id',
    name: 'rides-show',
    component: RidesShow
  },
  {
    path: '/stations',
    name: 'stations',
    component: StationsIndex
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
