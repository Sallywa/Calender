import Vue from 'vue'
import Router from 'vue-router'
import Calender from '../pages/calender.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calender',
      component: Calender
    }
  ]
})
