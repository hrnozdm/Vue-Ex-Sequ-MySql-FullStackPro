import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router';
import Vuetify from 'vuetify'
import "bootstrap/dist/css/bootstrap.min.css";
import "vuetify/dist/vuetify.min.css";


Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
