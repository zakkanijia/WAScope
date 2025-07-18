import {createRouter, createWebHashHistory} from 'vue-router'
import lmadRouter from './lmad.js'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    ...lmadRouter
]


const router = createRouter({
    history: createWebHashHistory(import.meta.env.NODE_ENV === 'production' ? import.meta.env.VUE_APP_PACKAGE : import.meta.env.BASE_URL),
    routes
})

export default router
