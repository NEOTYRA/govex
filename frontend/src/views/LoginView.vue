<template>
  <BaseCard title="Anmelden">
    <FlowExecutor
      :slug="FLOWS.authentication"
      :query="query"
      submit-label="Anmelden"
      :submit-icon="enterIcon"
      @done="finishLogin($router, $event)"
    />
    <p class="text-sm mt-4 text-center text-govex-muted">
      Noch kein Konto?
      <RouterLink :to="{ name: 'signup', query: $route.query }" class="link link-primary">
        Registrieren
      </RouterLink>
    </p>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import FlowExecutor from '@/components/FlowExecutor.vue'
import enterIcon from '@/assets/icons/enter.svg'
import { RouterLink } from 'vue-router'
import { FLOWS } from '@/lib/authentik.js'
import { finishLogin, flowQuery } from '@/lib/navigation.js'

export default {
  name: 'LoginView',
  components: { BaseCard, FlowExecutor, RouterLink },
  data() {
    return {
      enterIcon,
      FLOWS,
      query: flowQuery(),
    }
  },
  methods: {
    finishLogin,
  },
}
</script>
