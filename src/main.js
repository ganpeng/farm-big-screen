import Vue from 'vue';
import dataV from '@jiaminghi/data-view';

import App from './App.vue';
// 路由
import router from '@/router';
// 初始化svg组件
import './icons';
// 样式
import '@/assets/scss/index.scss';
// 工具方法
import util from '@/util';

// use
Vue.use(dataV);

Vue.config.productionTip = false;
Vue.prototype.$util = util;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
