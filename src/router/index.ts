import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/ready',
    name: 'ready',
    component: () => import('../views/ready.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../views/categories.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../components/upload.vue')
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
