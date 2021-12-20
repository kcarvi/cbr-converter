import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../components/List.vue'
import Converter from '../components/Converter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List
  },
  {
    path: '/converter',
    name: 'Converter',
    component: Converter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
