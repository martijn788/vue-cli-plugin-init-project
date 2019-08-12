import Vue from 'vue'
import Router, { Route } from 'vue-router'
import { Position } from 'vue-router/types/router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  scrollBehavior(to: Route, from: Route, savedPosition: Position | void): Position {
    return savedPosition || { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
})

export default router
