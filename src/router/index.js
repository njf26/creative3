import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Saved from '../views/Saved.vue'
import Sort from '../views/Sort.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
