import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
//import Moment from 'moment';
import routes from './router';
import curlPlugin from '$common/utils/vue-plugin/curl/curl';
import datePlugin from '$common/utils/vue-plugin/date/date';
import 'element-ui/lib/theme-default/index.css';
import App from './app.vue';


// 使用 vue-router 做spa路由
Vue.use(VueRouter);
// 完整引入 element ui
Vue.use(ElementUI);
// use curlPlugin
Vue.use(curlPlugin);
// use datePlugin
Vue.use(datePlugin);
// 初始化路由
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  mode: 'history',
});

new Vue({
  template: '<App />',
  el: '#root',   // 这里的 #root 和 template.tpl 里的根元素 id 对应
  components: { App },
  router,
});
