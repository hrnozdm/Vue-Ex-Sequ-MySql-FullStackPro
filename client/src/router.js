import Vue from 'vue';
import VueRouter from 'vue-router';
import RegisterComp from './components/RegisterComp.vue';
import HomeComp from './components/HomeComp.vue';
import LoginComp from './components/LoginComp.vue';
import SongsComp from './components/SongsComp.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/Register', component: RegisterComp,name:'register'},
    { path: '/', component: HomeComp,name:'home'},
    { path: '/login', component: LoginComp,name:'login'},
    {path:'/songs',component:SongsComp,name:'songs'}
  ],mode:'history',
},

);