import Vue from 'vue'
import Router from 'vue-router'
import VueResources from '@/pages/vue-resources/VueResources'
import Landing from '@/pages/landing/Landing'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        },
        {
            path: '/docs',
            name: 'VueResources',
            component: VueResources
        }
    ]
})
