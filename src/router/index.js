import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import fileUpload from '../views/fileUpload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/fileupload',
    name: 'fileUpload',
    component: fileUpload
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
