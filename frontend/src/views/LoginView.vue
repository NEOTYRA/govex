<template>
  <BaseCard title="Anmelden">
    <form class="fieldset" @submit.prevent="onSubmit">
      <label class="label" for="login-username">Benutzername</label>
      <input
        id="login-username"
        v-model="username"
        type="text"
        autocomplete="username"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="login-password">Passwort</label>
      <input
        id="login-password"
        v-model="password"
        type="password"
        autocomplete="current-password"
        class="input w-full"
        required
      />

      <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>

      <button type="submit" class="btn btn-primary shadow-none w-full mt-6" :disabled="saving">
        Anmelden
      </button>
    </form>
    <p class="text-sm mt-4 text-center opacity-70">
      Noch kein Konto?
      <RouterLink :to="{ name: 'signup', query: $route.query }" class="link link-primary">
        Registrieren
      </RouterLink>
    </p>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const route = useRoute()

const username = ref('')
const password = ref('')
const error = ref('')
const saving = ref(false)

async function onSubmit() {
  saving.value = true
  error.value = ''
  try {
    await auth.login(username.value, password.value)
    // Full-page navigation (not router.push): if we arrived here via govex's
    // own OIDC authorize redirect (?next=/o/authorize/...), the following
    // request must carry the session cookie we just received.
    const next = route.query.next
    window.location.href = typeof next === 'string' && next ? next : '/'
  } catch (err) {
    error.value = err.message
  } finally {
    saving.value = false
  }
}
</script>
