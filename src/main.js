import Vue from 'vue';
import App from './App.vue';

import yui from '@element/index.js'
// import {Row,Col} from '@element/index.js'
Vue.config.productionTip = false;

Vue.use(yui)

// Vue.use(Row)
// Vue.use(Col)
new Vue({
  render: h => h(App),
}).$mount('#app');
