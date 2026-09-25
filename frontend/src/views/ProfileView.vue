<template>
  <AccountPage title="Profil">
    <FlowCard title="Konto" :flow="FLOWS.profile" action="Bearbeiten" @done="authStore.fetchMe()">
      <p class="flex min-w-0 flex-wrap gap-1">
        <span class="shrink-0">Benutzername:</span>
        <span class="min-w-0 truncate text-base-content">{{ authStore.user?.username }}</span>
      </p>
      <p class="flex min-w-0 flex-wrap gap-1">
        <span class="shrink-0">E-Mail:</span>
        <span class="min-w-0 truncate text-base-content">{{ authStore.user?.email }}</span>
      </p>
    </FlowCard>
  </AccountPage>
</template>

<script>
import AccountPage from '@/components/AccountPage.vue'
import FlowCard from '@/components/FlowCard.vue'
import { FLOWS } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'ProfileView',
  components: { AccountPage, FlowCard },
  data() {
    return { FLOWS }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
  },
}
</script>
