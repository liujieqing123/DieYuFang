// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/animate.css/animate.css'

import Axios from 'axios'

//自研ui组件
//import BackTop from '../mz-ui'
//Vue.use(BackTop)
//引入vuex
import store from './store/index.js'
//请求拦截
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(1111)
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

//document.querySelectorAll()

//挂载axios，便于组件使用
Vue.prototype.$axios=Axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
