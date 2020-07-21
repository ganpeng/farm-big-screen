import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/layout'

Vue.use(Router);

export const constantRouterMap = [{
  path: '/',
  name: 'farmStock',
  component: () => import('@/views/farm_stock/FarmStock'),
}];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
