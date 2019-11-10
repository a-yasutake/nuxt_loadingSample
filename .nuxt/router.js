import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f59b6016 = () => interopDefault(import('..\\pages\\Sample1.vue' /* webpackChunkName: "pages_Sample1" */))
const _f57f3114 = () => interopDefault(import('..\\pages\\Sample2.vue' /* webpackChunkName: "pages_Sample2" */))
const _9d9c2dc0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Sample1",
    component: _f59b6016,
    name: "Sample1"
  }, {
    path: "/Sample2",
    component: _f57f3114,
    name: "Sample2"
  }, {
    path: "/",
    component: _9d9c2dc0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
