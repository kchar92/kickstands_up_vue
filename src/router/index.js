import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import RidesIndex from '../views/RidesIndex.vue';
import RidesNew from '../views/RidesNew.vue';
import RidesShow from '../views/RidesShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
