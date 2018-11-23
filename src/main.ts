import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueResource from 'vue-resource';
import VueRx from 'vue-rx';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRx);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
