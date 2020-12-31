import Vue from 'vue'
import store from './store';
import App from './App.vue'
import routerPath from './router/routerPath';
import apiPath from '@/services/apiPath';
import router from './router/router';
import axios from 'axios';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';



Vue.config.productionTip = false
Vue.prototype.$routerPath = routerPath;
Vue.prototype.$apiPath = apiPath;
Vue.prototype.$axios = axios;


window.Kakao.init("4470f3e6917b3b3f33b471bc9bed4e2a");

Vue.use(Mint);



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
