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
            <form
              v-if="renaming === passkey.pk"
              class="flex flex-col gap-2 sm:flex-row sm:items-center"
              @submit.prevent="onRename(passkey)"
            >
              <input
                v-model="newName"
                type="text"
                maxlength="200"
                required
                aria-label="Name des Passkeys"
                class="input input-sm w-full"
              />
              <div class="flex shrink-0 gap-2">
                <BaseButton type="submit" variant="primary" size="sm" :disabled="saving">
                  Speichern
                </BaseButton>
                <BaseButton size="sm" @click="renaming = null">Abbrechen</BaseButton>
              </div>
            </form>
            <div v-else class="flex items-center justify-between gap-4">
              <div class="min-w-0">
                <span class="block truncate font-medium text-base-content">
                  {{ passkeyName(passkey) }}
                </span>
                <span class="block text-xs text-govex-muted">
                  <template v-if="passkeyType(passkey)">{{ passkeyType(passkey) }} · </template>
                  Hinzugefügt am {{ formatDate(passkey.created_on) }}
                </span>
              </div>
              <BaseButton variant="ghost" size="sm" class="shrink-0" @click="startRename(passkey)">
                Umbenennen
              </BaseButton>
            </div>
            <p v-if="renameError && renaming === passkey.pk" class="text-error text-xs mt-1">
              {{ renameError }}
            </p>
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

<script>
import AccountPage from '@/components/AccountPage.vue'
import BaseButton from '@/components/BaseButton.vue'
import FlowCard from '@/components/FlowCard.vue'
import { FLOWS, fetchPasskeys, renamePasskey } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'SecurityView',
  components: { AccountPage, BaseButton, FlowCard },
  data() {
    return {
      FLOWS,
      passkeys: [],
      passkeysError: '',
      renaming: null,
      newName: '',
      renameError: '',
      saving: false,
      lockdownError: '',
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
  },
  mounted() {
    this.loadPasskeys()
  },
  methods: {
    async loadPasskeys() {
      try {
        this.passkeys = await fetchPasskeys()
        this.passkeysError = ''
      } catch (err) {
        this.passkeysError = err.message
      }
    },
    passkeyName(passkey) {
      return passkey.name === 'WebAuthn Device' ? 'Passkey' : passkey.name
    },
    passkeyType(passkey) {
      const type = passkey.device_type?.description
      return type && type !== passkey.name ? type : null
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString('de-CH', { dateStyle: 'long' })
    },
    startRename(passkey) {
      this.renaming = passkey.pk
      this.newName = this.passkeyName(passkey)
      this.renameError = ''
    },
    async onRename(passkey) {
      const name = this.newName.trim()
      if (!name) {
        this.renameError = 'Der Name darf nicht leer sein.'
        return
      }
      this.saving = true
      try {
        const updated = await renamePasskey(passkey.pk, name)
        this.passkeys = this.passkeys.map((p) => (p.pk === updated.pk ? updated : p))
        this.renaming = null
      } catch (err) {
        this.renameError = err.message
      } finally {
        this.saving = false
      }
    },
    async onLockedDown() {
      await this.authStore.fetchMe()
      if (this.authStore.isAuthenticated) {
        this.lockdownError =
          'Das Konto konnte nicht gesperrt werden. Bitte kontaktiere sofort einen Administrator.'
        return
      }
      this.$router.push({ name: 'home', query: { locked: '1' } })
    },
  },
}
</script>
