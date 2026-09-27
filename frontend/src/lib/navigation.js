import { useAuthStore } from '@/stores/auth.js'

export function flowQuery() {
  return window.location.search.replace(/^\?/, '')
}

export function finishFlow(to) {
  const target = new URL(to || '/', window.location.origin)
  window.location.href = target.origin === window.location.origin ? target.href : '/'
}

export async function finishLogin(router, to) {
  const auth = useAuthStore()
  await auth.fetchMe()
  if (auth.missingConsent) {
    router.push({
      name: 'contract',
      params: { page: auth.missingConsent },
      query: { next: to || '/' },
    })
    return
  }
  finishFlow(to)
}
