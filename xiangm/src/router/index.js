import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import docManger from '../pages/docManger'
import login from '../pages/login'
//const login = () => {import('@/pages/login')}
//const docManger = () => { import('@/pages/docManger')}
Vue.use(Router) //注册路由

export default new Router({
    routes: [
    {
    	path:'/',
    	name:'docManger',
    	component:docManger

    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    }
  ]
})
