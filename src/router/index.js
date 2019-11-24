import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Info from '@/components/Info'
import { PRODUCTION, GH_PAGES } from '@/defines/constants'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: 'admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: 'info',
    name: 'Info',
    component: Info,
  },
].map(route => ({
  ...route,
  path: (process.env.NODE_ENV === 'production') ? GH_PAGES.REPOSITORY.concat(route.path) : route.path,
}))

console.log(routes)

console.log('---ROUTES')
console.log(process.env.NODE_ENV)

const router = new Router({
  routes,
  mode: 'history',

})

export default router
