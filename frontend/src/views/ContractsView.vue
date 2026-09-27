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

    <section class="mb-10">
      <div v-if="!wintersehnChecked" class="skeleton my-5 h-5 w-32" />
      <h3 v-else class="my-4 text-xl">Wintersehn</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <template v-for="page in CONSENT_PAGES" :key="page">
          <div v-if="!wintersehnChecked" class="skeleton h-52 w-full rounded-none" />
          <a v-else :href="`${WINTERSEHN_URL}/${page}`" :class="cardClass">
            <img v-if="illustrations[page]" class="h-24" :src="illustrations[page]" alt="" />
            <div v-else class="h-24 w-32 rounded-box bg-base-200" />
            <span class="text-base-content">{{ contracts[page].title }}</span>
            <span v-if="wintersehnInvalid" class="badge badge-soft badge-error">
              Nicht überprüfbar
            </span>
            <span v-else-if="wintersehnConsent[page]" class="badge badge-soft badge-success">
              Zugestimmt
            </span>
            <span v-else class="badge badge-soft badge-warning">Offen</span>
          </a>
        </template>
      </div>
      <p v-if="wintersehnChecked" class="mt-4 text-xs text-govex-muted">
        Diese Verträge gehören wintersehn. Du stimmst ihnen dort zu, govex zeigt nur den von
        wintersehn signierten Status.
      </p>
    </section>
  </AccountPage>
</template>

<script>
import { RouterLink } from 'vue-router'
import AccountPage from '@/components/AccountPage.vue'
import { WINTERSEHN_URL, contracts, illustrations } from '@/data/legal/index.js'
import { verifyAttestation } from '@/lib/attestation.js'
import { CONSENT_PAGES } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'ContractsView',
  components: { RouterLink, AccountPage },
  data() {
    return {
      CONSENT_PAGES,
      contracts,
      illustrations,
      cardClass:
        'flex flex-col items-center gap-4 border border-solid border-govex-border bg-base-100 p-6 text-center hover:bg-base-200',
      wintersehnChecked: false,
      wintersehnInvalid: false,
      wintersehnConsent: {},
      WINTERSEHN_URL,
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
  },
  watch: {
    'authStore.wintersehnAttestation': {
      handler: 'checkWintersehn',
      immediate: true,
    },
    'authStore.ready': 'checkWintersehn',
  },
  methods: {
    async checkWintersehn() {
      if (!this.authStore.ready) return
      const token = this.authStore.wintersehnAttestation
      const payload = token ? await verifyAttestation(token) : null
      this.wintersehnInvalid = Boolean(token) && !payload
      this.wintersehnConsent = payload?.consent ?? {}
      this.wintersehnChecked = true
    },
  },
}
</script>
