import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue'),
    meta: { title: '首页', keepAlive: false, auth: false }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue'),
    meta: { title: '其他', keepAlive: false, auth: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
