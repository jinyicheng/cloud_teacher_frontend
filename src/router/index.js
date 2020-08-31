import Vue from 'vue'
import Router from 'vue-router'
import 'vant/lib/index.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => require(['@/components/Home'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['@/components/Login'], resolve)
    },
    {
      path: '/forget_password',
      name: 'ForgetPassword',
      component: (resolve) => require(['@/components/ForgetPassword'], resolve)
    }
  ]
})
