import Vue from 'vue'
import VueRouter from 'vue-router'
import routerGuard from './routerguard.js'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: () => import('./pages/home.vue'), name: 'home', beforeEnter: routerGuard},
	{ path: '/register', component: () => import('./pages/register.vue'), name: 'register'},
	{ path: '/login', component: () => import('./pages/login.vue'), name: 'login'},
	{ path: '/add-new-post', component: () => import('./pages/addNewPost.vue'), name: 'addNewPost'},
	{ path: '/orders', component: () => import('./pages/Orders.vue'), name: 'orders'}
]

export default new VueRouter({
	mode: 'history',
	routes,
	linkExactActiveClass: 'active'
});