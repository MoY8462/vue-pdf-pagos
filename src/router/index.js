import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import( '../views/Form.vue')
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import( '../views/Cards.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import( '../views/Order.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
