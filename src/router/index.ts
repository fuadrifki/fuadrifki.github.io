import { createRouter, createWebHashHistory } from 'vue-router'

// Layout
const Layout = () => import('/@/components/layout/index.vue')

// pages
const Home = () => import('/@/pages/home/index.vue')
const Blog = () => import('/@/pages/blog/index.vue')
const BlogDetail = () => import('/@/pages/blog/components/detail.vue')
const MyShop = () => import('/@/pages/my-shop/index.vue')
const NotFound = () => import('/@/pages/not-found/index.vue')

const history = createWebHashHistory()

export const routes = [
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
  // blog
  {
    path: '/blog',
    name: 'Blog',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Blog',
        component: Blog
      }
    ]
  },
  {
    path: '/blog',
    name: 'Blog Detail',
    component: Layout,
    children: [
      {
        path: ':title',
        name: 'Blog Detail',
        component: BlogDetail
      }
    ]
  },
  // my shop
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
  },
  // not found
  {
    path: '/:pathMatch(.*)',
    name: 'Not Found',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Not Found',
        component: NotFound
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
