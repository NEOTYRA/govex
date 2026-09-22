<template>
  <BaseCard title="Konto">
    <form class="fieldset" @submit.prevent="onSaveAccount">
      <label class="label" for="account-username">Benutzername</label>
      <input
        id="account-username"
        v-model="username"
        type="text"
        autocomplete="username"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="account-email">Email</label>
      <input
        id="account-email"
        v-model="email"
        type="email"
        autocomplete="email"
        class="input w-full"
        required
      />

      <p v-if="accountError" class="text-error text-sm mt-3">{{ accountError }}</p>
      <p v-if="accountSaved" class="text-success text-sm mt-3">Gespeichert.</p>

      <button
        type="submit"
        class="btn btn-primary shadow-none w-full mt-6"
        :disabled="savingAccount"
      >
        Speichern
      </button>
    </form>
  </BaseCard>

  <BaseCard title="Passwort ändern">
    <form class="fieldset" @submit.prevent="onChangePassword">
      <label class="label" for="current-password">Aktuelles Passwort</label>
      <input
        id="current-password"
        v-model="currentPassword"
        type="password"
        autocomplete="current-password"
        class="input w-full"
        required
      />

      <label class="label mt-2" for="new-password">Neues Passwort</label>
      <input
        id="new-password"
        v-model="newPassword"
        type="password"
        autocomplete="new-password"
        class="input w-full"
        required
      />

      <p v-if="passwordError" class="text-error text-sm mt-3">{{ passwordError }}</p>
      <p v-if="passwordSaved" class="text-success text-sm mt-3">Passwort geändert.</p>

      <button type="submit" class="btn shadow-none w-full mt-6" :disabled="savingPassword">
        Passwort ändern
      </button>
    </form>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()

const username = ref(auth.user?.username ?? '')
const email = ref(auth.user?.email ?? '')
const accountError = ref('')
const accountSaved = ref(false)
const savingAccount = ref(false)

async function onSaveAccount() {
  accountError.value = ''
  accountSaved.value = false
  savingAccount.value = true
  try {
    await auth.updateAccount({ username: username.value, email: email.value })
    accountSaved.value = true
  } catch (err) {
    accountError.value = err.message
  } finally {
    savingAccount.value = false
  }
}

const currentPassword = ref('')
const newPassword = ref('')
const passwordError = ref('')
const passwordSaved = ref(false)
const savingPassword = ref(false)

async function onChangePassword() {
  passwordError.value = ''
  passwordSaved.value = false
  savingPassword.value = true
  try {
    await auth.changePassword(currentPassword.value, newPassword.value)
    currentPassword.value = ''
    newPassword.value = ''
    passwordSaved.value = true
  } catch (err) {
    passwordError.value = err.message
  } finally {
    savingPassword.value = false
  }
}
</script>
