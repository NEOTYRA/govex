<template>
  <AccountPage title="Sicherheit">
    <FlowCard
      title="Passwort"
      :flow="FLOWS.passwordChange"
      action="Ändern"
      saved-message="Passwort geändert."
    >
      <p>Mindestens 15 Zeichen. Bekannte, geleakte Passwörter werden abgelehnt.</p>
    </FlowCard>

    <FlowCard
      title="Passkeys"
      :flow="FLOWS.passkeyAdd"
      action="Hinzufügen"
      saved-message="Passkey hinzugefügt."
      @done="loadPasskeys"
    >
      <p>Füge einen weiteren Passkey hinzu, z.B. für ein zweites Gerät.</p>
      <template #details>
        <ul class="mt-4 flex flex-col gap-2">
          <li
            v-for="passkey in passkeys"
            :key="passkey.pk"
            class="rounded-field border border-govex-border px-3 py-2 text-sm"
          >
            <span class="font-medium text-base-content">{{ passkeyName(passkey) }}</span>
            <span class="block text-xs text-govex-muted">
              Hinzugefügt am {{ formatDate(passkey.created_on) }}
            </span>
          </li>
          <li v-if="passkeysError" class="text-error text-sm">{{ passkeysError }}</li>
        </ul>
      </template>
    </FlowCard>

    <FlowCard
      title="Konto sperren"
      :flow="FLOWS.lockdown"
      action="Sperren"
      submit-label="Konto jetzt sperren"
      saved-message=""
      button-variant="error"
      button-outline
      :error="lockdownError"
      @open="lockdownError = ''"
      @done="onLockedDown"
    >
      <p>
        Für den Notfall, z.B. wenn dein Passwort geleakt ist oder du ein Gerät mit deinem Passkey
        verloren hast: Sperrt dein Konto sofort und meldet dich überall ab.
      </p>
    </FlowCard>
  </AccountPage>
</template>

<script setup>
import AccountPage from '@/components/AccountPage.vue'
import FlowCard from '@/components/FlowCard.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FLOWS, fetchPasskeys } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()

const passkeys = ref([])
const passkeysError = ref('')

async function loadPasskeys() {
  try {
    passkeys.value = await fetchPasskeys()
    passkeysError.value = ''
  } catch (err) {
    passkeysError.value = err.message
  }
}

function passkeyName(passkey) {
  if (passkey.device_type?.description) return passkey.device_type.description
  return passkey.name === 'WebAuthn Device' ? 'Passkey' : passkey.name
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('de-CH', { dateStyle: 'long' })
}

onMounted(loadPasskeys)

const lockdownError = ref('')

async function onLockedDown() {
  await auth.fetchMe()
  if (auth.isAuthenticated) {
    lockdownError.value =
      'Das Konto konnte nicht gesperrt werden. Bitte kontaktiere sofort einen Administrator.'
    return
  }
  router.push({ name: 'home', query: { locked: '1' } })
}
</script>
