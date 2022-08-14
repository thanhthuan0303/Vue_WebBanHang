import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import DetailProduct from '../components/DetailProduct.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About'),
    },
    {
        path: '/info',
        name: 'Infor',
        component: () => import('../components/Infor'),
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/detail-product/:id',
        name: 'DetailProduct',
        component: DetailProduct,
    },
]
// tạo đối tượng router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
