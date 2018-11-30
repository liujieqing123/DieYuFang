import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/pages/Home/Home' //某一个组件

import TypeList from '../components/pages/TypeList/TypeList' //某一个组件
import Cart from '../components/pages/Cake/Cart'
import Detail from '../components/pages/Detail/Detail'
import My from '../components/pages/My/My'

import Group from '../components/pages/Footer/Group'
import Contact from '../components/pages/Footer/Contact'
import Cooperation from '../components/pages/Footer/Cooperation'
import Honor from '../components/pages/Footer/Honor'

import All from '../components/pages/TypeList/All'
import Butter from '../components/pages/TypeList/Butter'
import Cheese from '../components/pages/TypeList/Cheese'
import Chocolate from '../components/pages/TypeList/Chocolate'
import Child from '../components/pages/TypeList/Child'
import Newtol from '../components/pages/TypeList/Newtol'
import Gift from '../components/pages/TypeList/Gift'

import Login from '../components/pages/My/Login'
import Reg from '../components/pages/My/Reg'
import Info from '../components/pages/My/Info'


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/TypeList',
      name: 'TypeList',
      component: TypeList,
      children:[
           {path:'all',name:'all',component:All},
           {path:'butter',name:'butter',component:Butter},
           {path:'cheese',name:'cheese',component:Cheese},
           {path:'chocolate',name:'chocolate',component:Chocolate},
           {path:'child',name:'child',component:Child},
           {path:'newtol',name:'newtol',component:Newtol},
           {path:'gift',name:'gift',component:Gift}
      ]
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/My',
      name: 'My',
      component: My,
      children:[
           {path:'login',name:'login',component:Login},
           {path:'reg',name:'reg',component:Reg},
           {path:'info',name:'info',component:Info}
      ]
      
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/Honor',
      name: 'Honor',
      component: Honor
    }
  ]
})
