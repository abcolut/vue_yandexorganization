 import Vue from 'vue'
import Router from 'vue-router'
//import Home from './pages/Home.vue'
import Viewer from './pages/Viewer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //{ path: '/', name: 'home', component: Home },
    { path: '/', name: 'home', component: Viewer },
    {
      path: '/yandex', name: 'yandex', component: () => import('./pages/Viewer.vue'),
    },
    {
      path: '/about', name: 'about', component: () => import('./pages/About.vue'),
    },
    {
      path: '/orglist', name: 'orgList', component: () => import('./pages/orgList.vue'),
    }
  ]
})
