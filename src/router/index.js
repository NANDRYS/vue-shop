import { createRouter, createWebHistory } from 'vue-router'
import home from './routes/home'
import cart from './routes/cart'
import favourites from './routes/favourites'
import product from './routes/product'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...favourites,
    ...cart,
    ...product,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/notFound/NotFoundView.vue')
    }
  ]
})

export default router
