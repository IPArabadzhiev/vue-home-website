import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Contacts from '@/components/pages/Contacts'
import Prices from '@/components/pages/Prices'
import Gallery from '@/components/pages/Gallery'

Vue.use(Router)

/*
    Router global configuraions
*/
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about',
            component: About
        },
        {
            path: '/contact-us',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/prices',
            name: 'prices',
            component: Prices
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery
        }
    ]
})
