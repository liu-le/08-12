import Vue from 'vue'
import App from './App.vue'

// import "./assets/js/font"//配置字体比例---会有优化
import "./assets/css/base.css"

import router from './plugins/router'//引入路由器模块

Vue.config.productionTip = false//阻止vue在启动时产生的生产提示

// 涌入axios
import axios from './plugins/axios';

Vue.prototype.baseUrl="http://localhost:3000"//注册服务器地址

// 注册全局过滤器
// Vue.filter("过滤器名",函数)
import dat from './filters/date'
Vue.filter("dat",dat)//执行到此行才会引入，不想前面的import引入

import 'animate.css'
//引入模块化
import store from './plugins/store'

let vm=new Vue({
  data:{
    bFoot:true,
    bHead:true,
    bLoading:true
  },
  render: h => h(App),
  router,//reg router
  store
}).$mount('#app')

axios.setupInterceptors(vm);