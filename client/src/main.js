import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router';
import Vuetify from 'vuetify'
import "bootstrap/dist/css/bootstrap.min.css";
import "vuetify/dist/vuetify.min.css";
import {sync} from 'vuex-router-sync';
import store from '@/store/store';


Vue.config.productionTip = false
Vue.use(Vuetify)
sync(store,router)

new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#app')
