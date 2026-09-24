<template>
  <BaseCard title="Registrieren">
    <FlowExecutor
      :slug="FLOWS.enrollment"
      :query="query"
      submit-label="Registrieren"
      @done="finishFlow"
    />
    <p class="text-sm mt-4 text-center text-govex-muted">
      Bereits ein Konto?
      <RouterLink :to="{ name: 'login', query: $route.query }" class="link link-primary">
        Anmelden
      </RouterLink>
    </p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import FlowExecutor from '@/components/FlowExecutor.vue'
import { RouterLink } from 'vue-router'
import { FLOWS } from '@/lib/authentik.js'
import { finishFlow, flowQuery } from '@/lib/navigation.js'

const query = flowQuery()
</script>
