import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeInspired from '../views/BeInspired.vue'
import Share from '../views/Share.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Share',
    name: 'Share',
    component: Share
  },
  {
    path: '/BeInspired',
    name: 'BeInspired',
    component: BeInspired
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: Edit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
