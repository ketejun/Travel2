import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import List from '@/pages/list/list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
