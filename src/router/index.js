import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Info from '@/components/Info'

Vue.use(Router)
const basePath = '/mechanicore.ghpages'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: basePath,
      name: 'Home',
      component: Home,
    },
    {
      path: '/mechanicore.ghpages/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/mechanicore.ghpages/info',
      name: 'Info',
      component: Info,
    },
  ],
})
