import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Home from '@/components/Home'
import homePage from '@/components/homePage'
import addClothing from '@/components/addClothing'
import myCloth from '@/components/myCloth'
import allOrders from '@/components/allOrders'
import editCloth from '@/components/editCloth'
import editOrder from '@/components/editOrder'
import refound from '@/components/refound'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      redirect:'/home/homepage',
      component: Home,
      children: [
        {
          path: '/home/homepage',
          component: homePage,
          meta: {
            pre: {name:'首页'}
          }
        },
        {
          path: '/home/addclothing',
          component: addClothing,
          meta: {
            pre: {name:'服装管理'},
            now: {name:'新增服装'}
          }
        },
        {
          path: '/home/mycloth',
          component: myCloth,
          meta: {
            pre: {name:'服装管理'},
            now: {name:'我的服装'}
          }
        },
        {
          name:'editCloth',
          path: '/home/mycloth/editcloth/:id',
          component: editCloth,
          meta: {
            pre1: {name:'服装管理'},
            pre2: {name:'我的服装',path:'/home/mycloth'},
            now: {name:'编辑服装'}
          }
        },
        {
          path: '/home/allorders',
          component: allOrders,
          meta: {
            pre: {name:'订单管理'},
            now: {name:'全部订单'}
          }
        },
        {
          name: 'editOrder',
          path: '/home/allorders/editorder/:id',
          component: editOrder,
          meta: {
            pre1: {name:'订单管理'},
            pre2: {name:'全部订单',path:'/home/allorders'},
            now: {name:'订单处理'}
          }
        },
        {
          path: '/home/refound',
          component: refound,
          meta: {
            pre: {name:'订单管理'},
            now: {name:'退款处理'}
          }
        },
      ]
    }
  ]
})
