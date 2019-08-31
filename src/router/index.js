import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/home.vue')
const City = () => import('@/pages/city/City.vue')
const Detail = () => import('@/pages/detail/Detail.vue')

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
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
