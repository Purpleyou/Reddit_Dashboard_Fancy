import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        noCache: true
      }
    }]
  }

]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
  path: '/charts',
  component: Layout,
  redirect: 'noredirect',
  name: 'charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [{
    path: 'keyboard',
    component: _import('charts/keyboard'),
    name: 'keyboardChart',
    meta: {
      title: 'keyboardChart',
      noCache: true
    }
  },
  {
    path: 'line',
    component: _import('charts/line'),
    name: 'lineChart',
    meta: {
      title: 'lineChart',
      noCache: true
    }
  },
  {
    path: 'mixchart',
    component: _import('charts/mixChart'),
    name: 'mixChart',
    meta: {
      title: 'mixChart',
      noCache: true
    }
  },
  {
    path: 'authorKOIchart',
    component: _import('charts/authorKOIChart'),
    name: 'AuthorKOIChart',
    meta: {
      title: 'Author KOL Chart',
      noCache: true
    }
  },
  {
    path: 'authorKOI_Futurology',
    component: _import('charts/authorKOI_Futurology'),
    name: 'authorKOI_Futurology',
    meta: {
      title: 'Futurology Author KOL ',
      noCache: true
    }
  },
  {
    path: 'authorKOI_Monero',
    component: _import('charts/authorKOI_Monero'),
    name: 'authorKOI_Monero',
    meta: {
      title: 'Monero Author KOL ',
      noCache: true
    }
  },
  {
    path: 'linkRank',
    component: _import('charts/linkRank'),
    name: 'linkRank',
    meta: {
      title: 'Link Rank by Score',
      noCache: true
    }
  }
  ]
}]
