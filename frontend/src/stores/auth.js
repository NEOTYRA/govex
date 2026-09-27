import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CONSENT_PAGES, FLOWS, FlowRun, fetchCurrentUser } from '@/lib/authentik.js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const ready = ref(false)
  const isAuthenticated = computed(() => user.value !== null)
  const displayName = computed(() => {
    const meta = user.value?.settings?.meta ?? {}
    return [meta.first_name, meta.last_name].filter(Boolean).join(' ') || user.value?.username
  })
  const consent = computed(() => user.value?.settings?.consent?.neotyra ?? {})
  const missingConsent = computed(() => {
    if (!user.value) return null
    return CONSENT_PAGES.find((page) => !consent.value[page]) ?? null
  })
  const wintersehnAttestation = computed(
    () => user.value?.settings?.attestations?.wintersehn ?? null,
  )

  function hasConsented(page) {
    return Boolean(consent.value[page])
  }

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

  async function acceptConsent(page) {
    const run = new FlowRun(FLOWS.consent)
    const challenge = await run.start()
    const values = Object.fromEntries(
      CONSENT_PAGES.map((field) => [
        `attributes.settings.consent.neotyra.${field}`,
        field === page || hasConsented(field),
      ]),
    )
    const result = await run.submit(challenge.component, values)
    if (result.component !== 'xak-flow-redirect') {
      throw new Error('Zustimmung fehlgeschlagen.')
    }
    await fetchMe()
  }

  return {
    user,
    ready,
    isAuthenticated,
    displayName,
    missingConsent,
    wintersehnAttestation,
    hasConsented,
    fetchMe,
    logout,
    acceptConsent,
  }
})
