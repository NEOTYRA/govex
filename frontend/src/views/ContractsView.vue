<template>
  <AccountPage title="Verträge" :loading="!authStore.ready">
    <section class="mb-10">
      <div v-if="!authStore.ready" class="skeleton my-5 h-5 w-32" />
      <h3 v-else class="my-4 text-xl">NEOTYRA</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <template v-for="page in CONSENT_PAGES" :key="page">
          <div v-if="!authStore.ready" class="skeleton h-52 w-full rounded-none" />
          <RouterLink v-else :to="{ name: 'contract', params: { page } }" :class="cardClass">
            <img v-if="illustrations[page]" class="h-24" :src="illustrations[page]" alt="" />
            <div v-else class="h-24 w-32 rounded-box bg-base-200" />
            <span class="text-base-content">{{ contracts[page].title }}</span>
            <span v-if="authStore.hasConsented(page)" class="badge badge-soft badge-success">
              Zugestimmt
            </span>
            <span v-else class="badge badge-soft badge-warning">Offen</span>
          </RouterLink>
        </template>
      </div>
    </section>

    <section v-for="app in APPS" :key="app.key" class="mb-10">
      <div v-if="!checked" class="skeleton my-5 h-5 w-32" />
      <h3 v-else class="my-4 text-xl">{{ app.name }}</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <template v-for="page in app.pages" :key="page">
          <div v-if="!checked" class="skeleton h-52 w-full rounded-none" />
          <a v-else :href="`${app.url}/${page}`" :class="cardClass">
            <img v-if="illustrations[page]" class="h-24" :src="illustrations[page]" alt="" />
            <div v-else class="h-24 w-32 rounded-box bg-base-200" />
            <span class="text-base-content">{{ contracts[page].title }}</span>
            <span v-if="status[app.key].invalid" class="badge badge-soft badge-error">
              Nicht überprüfbar
            </span>
            <span v-else-if="status[app.key].consent[page]" class="badge badge-soft badge-success">
              Zugestimmt
            </span>
            <span v-else class="badge badge-soft badge-warning">Offen</span>
          </a>
        </template>
      </div>
      <p v-if="checked" class="mt-4 text-xs text-govex-muted">
        Diese Verträge gehören {{ app.name }}. Du stimmst ihnen dort zu, govex zeigt nur den von
        {{ app.name }} signierten Status.
      </p>
    </section>

    <p v-if="monolithLinked" class="text-[0.65rem] text-govex-muted">
      Dieses Konto ist mit Monolith verknüpft.
    </p>
  </AccountPage>
</template>

<script>
import { RouterLink } from 'vue-router'
import AccountPage from '@/components/AccountPage.vue'
import { SWISSFY_URL, WINTERSEHN_URL, contracts, illustrations } from '@/data/legal/index.js'
import { verifyAttestation } from '@/lib/attestation.js'
import { CONSENT_PAGES } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

const APPS = [
  { key: 'wintersehn', name: 'Wintersehn', url: WINTERSEHN_URL, pages: CONSENT_PAGES },
  { key: 'swissfy', name: 'swissfy', url: SWISSFY_URL, pages: ['privacy', 'terms', 'disclaimer'] },
]

function emptyStatus() {
  return Object.fromEntries(APPS.map((app) => [app.key, { invalid: false, consent: {} }]))
}

export default {
  name: 'ContractsView',
  components: { RouterLink, AccountPage },
  data() {
    return {
      CONSENT_PAGES,
      APPS,
      contracts,
      illustrations,
      cardClass:
        'flex flex-col items-center gap-4 border border-solid border-govex-border bg-base-100 p-6 text-center hover:bg-base-200',
      checked: false,
      status: emptyStatus(),
      monolithLinked: false,
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
  },
  watch: {
    'authStore.attestations': {
      handler: 'checkAttestations',
      immediate: true,
    },
    'authStore.ready': 'checkAttestations',
  },
  methods: {
    async checkAttestations() {
      if (!this.authStore.ready) return
      const status = emptyStatus()
      for (const app of APPS) {
        const token = this.authStore.attestations[app.key] ?? null
        const payload = token ? await verifyAttestation(app.key, token) : null
        status[app.key] = { invalid: Boolean(token) && !payload, consent: payload?.consent ?? {} }
        if (app.key === 'wintersehn') this.monolithLinked = payload?.monolith === true
      }
      this.status = status
      this.checked = true
    },
  },
}
</script>
