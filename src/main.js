import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';

import 'vuesax/dist/vuesax.css'
/*intialise root component into to element*/

Vue.use(Vuesax)

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({routes});

/**add plungins in to app**/

new Vue({
  router,
  render: h => h(App),


}).$mount('#app')
