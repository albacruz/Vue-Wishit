import Vue from 'vue';
import VueRouter from 'vue-router';
import RegistroContainer from "../components/RegistroContainer";
import LoginContainer from "../components/LoginContainer";

const routes = [
  { path: '/', component: RegistroContainer, redirect: '/register' },
  { path: '/register', component: RegistroContainer },
  { path: '/login', component: LoginContainer }
];
Vue.use(VueRouter);

export default new VueRouter({ routes });