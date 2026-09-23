<template>
  <BaseCard v-for="section in sections" :key="section.flow" :title="section.title">
    <template v-if="active === section.flow">
      <FlowExecutor :slug="section.flow" submit-label="Speichern" @done="onDone(section)" />
      <button type="button" class="btn shadow-none w-full mt-2" @click="active = null">
        Abbrechen
      </button>
    </template>
    <template v-else>
      <p v-if="section.flow === FLOWS.profile" class="text-sm">
        {{ auth.user?.username }} · {{ auth.user?.email }}
      </p>
      <p v-else class="text-sm">{{ section.description }}</p>
      <ul v-if="section.flow === FLOWS.passkeyAdd" class="mt-4 flex flex-col gap-2">
        <li
          v-for="passkey in passkeys"
          :key="passkey.pk"
          class="rounded-field border border-govex-border px-3 py-2 text-sm"
        >
          <span class="font-medium">{{ passkeyName(passkey) }}</span>
          <span class="block text-xs opacity-70">
            Hinzugefügt am {{ formatDate(passkey.created_on) }}
          </span>
        </li>
        <li v-if="passkeysError" class="text-error text-sm">{{ passkeysError }}</li>
      </ul>
      <p v-if="saved === section.flow" class="text-success text-sm mt-3">{{ section.saved }}</p>
      <button type="button" class="btn shadow-none w-full mt-6" @click="open(section)">
        {{ section.action }}
      </button>
    </template>
  </BaseCard>

  <BaseCard title="Konto sperren">
    <template v-if="active === FLOWS.lockdown">
      <FlowExecutor
        :slug="FLOWS.lockdown"
        submit-label="Konto jetzt sperren"
        @done="onLockedDown"
      />
      <button type="button" class="btn shadow-none w-full mt-2" @click="active = null">
        Abbrechen
      </button>
    </template>
    <template v-else>
      <p class="text-sm">
        Für den Notfall, z.B. wenn dein Passwort geleakt ist oder du ein Gerät mit deinem Passkey
        verloren hast: Sperrt dein Konto sofort und meldet dich überall ab.
      </p>
      <p v-if="lockdownError" class="text-error text-sm mt-3">{{ lockdownError }}</p>
      <button
        type="button"
        class="btn btn-error btn-outline shadow-none w-full mt-6"
        @click="open({ flow: FLOWS.lockdown })"
      >
        Konto sperren
      </button>
    </template>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue'
import FlowExecutor from '@/components/FlowExecutor.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { FLOWS, fetchPasskeys } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const router = useRouter()

const sections = [
  {
    flow: FLOWS.profile,
    title: 'Konto',
    action: 'Benutzername oder Email ändern',
    saved: 'Gespeichert.',
  },
  {
    flow: FLOWS.passwordChange,
    title: 'Passwort',
    description: 'Mindestens 15 Zeichen. Bekannte, geleakte Passwörter werden abgelehnt.',
    action: 'Passwort ändern',
    saved: 'Passwort geändert.',
  },
  {
    flow: FLOWS.passkeyAdd,
    title: 'Passkeys',
    description: 'Füge einen weiteren Passkey hinzu, z.B. für ein zweites Gerät.',
    action: 'Passkey hinzufügen',
    saved: 'Passkey hinzugefügt.',
  },
]

const active = ref(null)
const saved = ref(null)

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

function open(section) {
  saved.value = null
  lockdownError.value = ''
  active.value = section.flow
}

const lockdownError = ref('')

async function onLockedDown() {
  active.value = null
  await auth.fetchMe()
  if (auth.isAuthenticated) {
    lockdownError.value =
      'Das Konto konnte nicht gesperrt werden. Bitte kontaktiere sofort einen Administrator.'
    return
  }
  router.push({ name: 'home', query: { locked: '1' } })
}

async function onDone(section) {
  active.value = null
  saved.value = section.flow
  await Promise.all([auth.fetchMe(), loadPasskeys()])
}
</script>
