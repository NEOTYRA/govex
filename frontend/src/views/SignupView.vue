<template>
  <BaseCard title="Registrieren">
    <FlowExecutor
      :slug="FLOWS.enrollment"
      :query="query"
      submit-label="Registrieren"
      @done="finishLogin($router, $event)"
    />
    <p class="text-sm mt-4 text-center text-govex-muted">
      Bereits ein Konto?
      <RouterLink :to="{ name: 'login', query: $route.query }" class="link link-primary">
        Anmelden
      </RouterLink>
    </p>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import FlowExecutor from '@/components/FlowExecutor.vue'
import { RouterLink } from 'vue-router'
import { FLOWS } from '@/lib/authentik.js'
import { finishLogin, flowQuery } from '@/lib/navigation.js'

export default {
  name: 'SignupView',
  components: { BaseCard, FlowExecutor, RouterLink },
  data() {
    return {
      FLOWS,
      query: flowQuery(),
    }
  },
  methods: {
    finishLogin,
  },
}
</script>
