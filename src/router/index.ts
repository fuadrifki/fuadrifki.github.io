import { createRouter, createWebHistory } from 'vue-router'

// Layout
const Layout = () => import('/@/components/layout/index.vue')

// pages
const Home = () => import('/@/pages/home/index.vue')
const MyShop = () => import('/@/pages/my-shop/index.vue')

const history = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/my-shop',
    name: 'My Shop',
    component: Layout,
    children: [
      {
        path: '',
        name: 'My Shop',
        component: MyShop
      }
    ]
  }
]

const router = createRouter({
  history,
  routes
})

//reference : https://github.com/vuejs/vue-router/issues/914
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = 'FR'
  if (to.name != null) {
    document.title = 'FR - ' + to.name
  }
  next()
})

export default router
