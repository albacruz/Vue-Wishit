import Vue from 'vue';
import router from '../routers/index';
import App from '../App';

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app'); 