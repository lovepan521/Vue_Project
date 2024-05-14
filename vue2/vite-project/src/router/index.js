import { module } from './module/index'
import VueRouter from 'vue-router'
import Vue from 'vue'

// 使用VueRouter
Vue.use(VueRouter)

const routes = [
    ...module
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

export default router
