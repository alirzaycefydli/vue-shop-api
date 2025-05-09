import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }, 
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductView.vue'),
      },
      {
          path: '/category',
          name: 'category',
          component: () => import('../views/CategoryView.vue'),
        },
      {
          path: '/cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
        },{
          path: '/wishlist',
          name: 'wishlist',
          component: () => import('../views/WishlistView.vue'),
        },
      {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
          },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
