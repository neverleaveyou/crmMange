import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footer1 from '@/components/footer1'
import footer2 from '@/components/footer2'
import footer3 from '@/components/footer3'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    // name: 'footer1',
    // component: footer1
    redirect:'/footer1'
  },{
    path: '/footer1',
    name: 'footer1',
    component: footer1
  }, {
    path: '/footer2',
    name: 'footer2',
    component: footer2
  }, {
    path: '/footer3',
    name: 'footer3',
    component: footer3
  }]
})
