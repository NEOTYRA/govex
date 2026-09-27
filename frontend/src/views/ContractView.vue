<template>
  <LegalPage :title="contract.title">
    <LegalSection
      v-for="section in contract.sections"
      :key="section.title"
      :title="section.title"
      :text="section.text"
      :items="section.items"
    >
      <p v-for="line in section.lines" :key="line" class="font-light">{{ line }}</p>
    </LegalSection>
    <div v-if="illustrations[contract.illustration]" class="my-8 flex justify-center">
      <img class="max-h-64" :src="illustrations[contract.illustration]" :alt="contract.title" />
    </div>
    <p v-if="error" class="mt-6 text-sm text-error">{{ error }}</p>
    <div v-if="pending" class="mt-6 flex gap-4">
      <BaseButton class="flex-1" :disabled="accepting" @click="onCancel">Abbrechen</BaseButton>
      <BaseButton variant="primary" class="flex-1" :disabled="accepting" @click="onAccept">
        Zustimmen
      </BaseButton>
    </div>
  </LegalPage>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import LegalPage from '@/components/legal/LegalPage.vue'
import LegalSection from '@/components/legal/LegalSection.vue'
import { contracts, illustrations } from '@/data/legal/index.js'
import { finishFlow } from '@/lib/navigation.js'
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'ContractView',
  components: { BaseButton, LegalPage, LegalSection },
  props: {
    page: { type: String, required: true },
  },
  data() {
    return { illustrations, accepting: false, error: '' }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
    contract() {
      return contracts[this.page]
    },
    pending() {
      return this.authStore.isAuthenticated && !this.authStore.hasConsented(this.page)
    },
  },
  methods: {
    async onAccept() {
      this.accepting = true
      this.error = ''
      try {
        await this.authStore.acceptConsent(this.page)
        const next = this.$route.query.next
        if (this.authStore.missingConsent) {
          this.$router.push({
            name: 'contract',
            params: { page: this.authStore.missingConsent },
            query: { next },
          })
          return
        }
        if (next) {
          finishFlow(next)
          return
        }
        this.$router.push({ name: 'contracts' })
      } catch (err) {
        this.error = err.message
      } finally {
        this.accepting = false
      }
    },
    async onCancel() {
      await this.authStore.logout()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
