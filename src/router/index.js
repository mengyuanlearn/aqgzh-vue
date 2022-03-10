import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../App.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index')
      }
    ]
  }
]
const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes
})
export default router
