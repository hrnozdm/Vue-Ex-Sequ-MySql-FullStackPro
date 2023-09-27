import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComp from './components/HomeComp.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', component: HomeComp },
    // Diğer rotaları burada tanımlayabilirsiniz.
  ],
});