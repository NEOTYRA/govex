<template>
  <BaseCard title="Registrieren">
    <form ref="form" class="fieldset" @submit.prevent="onSubmit">
      <label class="label" for="signup-username">Benutzername</label>
      <input
        id="signup-username"
        v-model="username"
        type="text"
        autocomplete="username"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="signup-email">Email</label>
      <input
        id="signup-email"
        v-model="email"
        type="email"
        autocomplete="email"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="signup-password">Passwort</label>
      <input
        id="signup-password"
        v-model="password"
        type="password"
        autocomplete="new-password"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="signup-password-confirm">Passwort bestätigen</label>
      <input
        id="signup-password-confirm"
        v-model="passwordConfirm"
        type="password"
        autocomplete="new-password"
        class="input w-full"
        required
      />

      <altcha-widget
        class="mt-4"
        challenge="/api/auth/altcha-challenge/"
        auto="onload"
        name="altcha"
      ></altcha-widget>

      <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>

      <button type="submit" class="btn btn-primary shadow-none w-full mt-6" :disabled="saving">
        Registrieren
      </button>
    </form>
    <p class="text-sm mt-4 text-center opacity-70">
      Bereits ein Konto?
      <RouterLink :to="{ name: 'login', query: $route.query }" class="link link-primary">
        Anmelden
      </RouterLink>
    </p>
  </BaseCard>
</template>

<style scoped>
altcha-widget {
  display: block;
  --altcha-max-width: 100%;
  --altcha-color-base: var(--color-base-100);
  --altcha-border-color: color-mix(in oklab, var(--color-base-content) 20%, transparent);
  --altcha-border-width: var(--border, 1px);
  --altcha-border-radius: var(--radius-field, 0.25rem);
}
</style>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import 'altcha'
import { ref, useTemplateRef } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()
const form = useTemplateRef('form')

const username = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const error = ref('')
const saving = ref(false)

async function onSubmit() {
  error.value = ''

  if (password.value !== passwordConfirm.value) {
    error.value = 'Die Passwörter stimmen nicht überein.'
    return
  }

  const altcha = new FormData(form.value).get('altcha')
  if (!altcha) {
    error.value = 'Bitte warte, bis die Bot-Verifizierung abgeschlossen ist.'
    return
  }

  saving.value = true
  try {
    await auth.signup({
      username: username.value,
      email: email.value,
      password: password.value,
      altcha,
    })
    const next = route.query.next
    if (typeof next === 'string' && next) {
      window.location.href = next
    } else {
      router.push('/')
    }
  } catch (err) {
    error.value = err.message
  } finally {
    saving.value = false
  }
}
</script>
