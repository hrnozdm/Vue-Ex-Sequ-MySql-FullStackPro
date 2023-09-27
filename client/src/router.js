import Vue from 'vue';
import VueRouter from 'vue-router';
import RegisterComp from './components/RegisterComp.vue';
import HomeComp from './components/HomeComp.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/Register', component: RegisterComp,name:'register'},
    { path: '/', component: HomeComp,name:'home'},
  
  ],mode:'history',
},

);