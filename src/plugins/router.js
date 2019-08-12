import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)

//import 是静态引入，编译时 ， 会事先引入
import Home from '../pages/Home.vue'
import Follow from '../pages/Follow.vue'
import Column from '../pages/Column.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '@/pages/Reg'
import Detail from '@/pages/Detail'
import Error from '@/pages/Error'

let routes = [{ name: 'home', path: '/home', component: Home },
{ name: 'follow', path: '/follow', component: Follow },
{ name: 'column', path: '/column', component: Column },
{ name: 'user', path: '/user', component: User },
{ name: 'login', path: '/login', component: Login },
{ name: 'Reg', path: '/Reg', component: Reg },
{ name: 'Detail', path: '/Detail/:id', component: Detail },
                { path: '/', redirect:'/home' },
                { path: '*', component: Error }
                ]
 
let router = new vueRouter({routes})
export default router;