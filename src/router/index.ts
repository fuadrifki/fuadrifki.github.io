import { createRouter, createWebHistory } from 'vue-router'

// Layout
import Layout from '/@/components/layout/index.vue'

export const routerHistory = createWebHistory()

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout
    }
  ]
})
