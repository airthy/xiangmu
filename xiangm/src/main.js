// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import'../zTree_v3/css/zTreeStyle/zTreeStyle.css';
import "../zTree_v3/js/jquery-1.4.4.min.js";
import "../zTree_v3/js/jquery.ztree.core.min.js";
import "../zTree_v3/js/jquery.ztree.excheck.min.js";
import axios from 'axios'


Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
