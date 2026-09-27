import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'
import { FLOWS } from '@/lib/authentik.js'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SecurityView from '@/views/SecurityView.vue'

const authentikPaths = [
  {
    path: `/if/flow/${FLOWS.enrollment}/`,
    redirect: (to) => ({ name: 'signup', query: to.query }),
  },
  { path: '/if/flow/:slug/', redirect: (to) => ({ name: 'login', query: to.query }) },
  { path: '/if/user/', redirect: { name: 'account' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signup', name: 'signup', component: SignupView },
    { path: '/account', name: 'account', redirect: { name: 'profile' } },
    {
      path: '/account/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true, accountNavigation: true },
    },
    {
      path: '/account/security',
      name: 'security',
      component: SecurityView,
      meta: { requiresAuth: true, accountNavigation: true },
    },
    ...authentikPaths,
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (!auth.ready) {
    return true
  }
  if (to.name === 'home' && auth.isAuthenticated) {
    return { name: 'profile' }
  }
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login', query: { next: to.fullPath } }
  }
  return true
})

export default router
