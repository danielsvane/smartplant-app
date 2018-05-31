import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Create from '@/components/Create'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ],
  mode: 'history'
})

export default router
