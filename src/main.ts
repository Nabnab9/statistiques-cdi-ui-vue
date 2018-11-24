import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import VueRx from 'vue-rx';

const VueApp: any = Vue;

Vue.config.productionTip = false;
VueApp.url.options.root = 'http://localhost:8082';

Vue.use(VueRx);

new VueApp({
  router,
  store,
  render: (h: any) => h(App),

}).$mount('#app');
