import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/Product/ProductListView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/Product/ProductView.vue"),
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("../views/WishlistView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
  ],
});

 router.beforeEach(async (to) => {
  // Check if the user is logged in
  const isLoggedIn = !!localStorage.getItem('token')

  if (to.meta.requiresAuth && !isLoggedIn) {
    // If not logged in and trying to access a protected route
    return { name: 'login' }
  }

  if ((to.name === 'login' || to.name === 'register') && isLoggedIn) {
    // If logged in and trying to access login/register page
    return { name: 'home' }
  }

  return true

 })

export default router
