import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { FLOWS, FlowRun, fetchCurrentUser } from '@/lib/authentik.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const ready = ref(false)
  const isAuthenticated = computed(() => user.value !== null)

  async function fetchMe() {
    try {
      user.value = await fetchCurrentUser()
    } finally {
      ready.value = true
    }
  }

  async function logout() {
    const result = await new FlowRun(FLOWS.logout).start()
    if (result.component !== 'xak-flow-redirect') {
      throw new Error('Abmelden fehlgeschlagen.')
    }
    user.value = null
  }

  return {
    user,
    ready,
    isAuthenticated,
    fetchMe,
    logout,
  }
})
