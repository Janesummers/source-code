import Vue from 'vue'
import Router from 'vue-router'
import allMessage from '@/view/all_message'
import Contact from '@/view/contact'
import Dynamic from '@/view/dynamic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'allMessage',
      component: allMessage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    }
  ]
})
