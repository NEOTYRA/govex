<template>
  <BaseCard title="govex">
    <p class="text-sm">
      Dein zentrales Konto für alle angeschlossenen Apps. govex verwaltet nur deinen Benutzernamen,
      deine Email und dein Passwort — sonst nichts.
    </p>
    <div class="mt-6" v-if="auth.ready">
      <RouterLink
        v-if="!auth.isAuthenticated"
        to="/login"
        class="btn btn-primary shadow-none w-full"
      >
        Anmelden
      </RouterLink>
      <template v-else>
        <RouterLink to="/account" class="btn btn-primary shadow-none w-full">Mein Konto</RouterLink>
        <button class="btn shadow-none w-full mt-2" @click="handleLogout">Abmelden</button>
      </template>
    </div>
  </BaseCard>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import BaseCard from '@/components/BaseCard.vue'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()

async function handleLogout() {
  await auth.logout()
  router.push('/')
}
</script>
