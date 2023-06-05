import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/kontakt',
        name: 'kontakt',
        component: () => import('../views/Contact.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../views/Detail.vue')
      },
      {
        path: '/neu',
        name: 'neu',
        component: () => import('../views/New.vue')
      },
      {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../views/Edit.vue')
      },
    ]
  })

export default router