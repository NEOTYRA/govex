<template>
  <AccountPage title="Profil">
    <FlowCard title="Meta" :flow="FLOWS.meta" action="Bearbeiten" @done="authStore.fetchMe()">
      <div class="flex items-center gap-4">
        <img
          class="size-11 shrink-0"
          :class="{ 'avatar-fallback': !hasAvatar(meta.avatar) }"
          :src="avatarSrc(meta.avatar)"
          alt=""
        />
        <div class="flex min-w-0 flex-col gap-1">
          <p class="flex min-w-0 flex-wrap gap-1">
            <span class="shrink-0">Vorname:</span>
            <span class="min-w-0 truncate text-base-content">{{ meta.first_name || '–' }}</span>
          </p>
          <p class="flex min-w-0 flex-wrap gap-1">
            <span class="shrink-0">Nachname:</span>
            <span class="min-w-0 truncate text-base-content">{{ meta.last_name || '–' }}</span>
          </p>
          <p class="flex min-w-0 flex-wrap gap-1">
            <span class="shrink-0">Geburtsdatum:</span>
            <span class="min-w-0 truncate text-base-content">{{ birthdate }}</span>
          </p>
        </div>
      </div>
    </FlowCard>

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
import { avatarSrc, hasAvatar } from '@/lib/avatars.js'
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
    meta() {
      return this.authStore.user?.settings?.meta ?? {}
    },
    birthdate() {
      if (!this.meta.birthdate) return '–'
      return new Date(`${this.meta.birthdate}T00:00:00`).toLocaleDateString('de-CH')
    },
  },
  methods: {
    avatarSrc,
    hasAvatar,
  },
}
</script>
