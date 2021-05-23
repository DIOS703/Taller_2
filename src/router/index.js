import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/popularmovies',
    name: 'PopularMovies',
    component: () => import(/* webpackChunkName: "PopularMovies" */ '../views/PopularMovies.vue')
  },
  {
    path: '/topratedmovies',
    name: 'TopRatedMovies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "TopRatedMovies" */ '../views/TopRatedMovies.vue')
  },
  {
    path: '/Movie/:id',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Movie" */ '../views/Movie.vue')
  },
  {
    path: '*',
    redirect : '/popularmovies',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
