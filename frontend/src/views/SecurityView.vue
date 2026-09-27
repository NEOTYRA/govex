<template>
  <AccountPage title="Sicherheit" :loading="!authStore.ready">
    <FlowCard
      title="Passwort"
      :flow="FLOWS.passwordChange"
      action="Ändern"
      :icon="pencilIcon"
      saved-message="Passwort geändert."
      :loading="!authStore.ready"
    >
      <p>Mindestens 15 Zeichen. Bekannte, geleakte Passwörter werden abgelehnt.</p>
    </FlowCard>

    <FlowCard
      title="Passkeys"
      :flow="FLOWS.passkeyAdd"
      action="Hinzufügen"
      :icon="plusIcon"
      saved-message="Passkey hinzugefügt."
      :loading="passkeysLoading"
      @done="loadPasskeys"
    >
      <p>Füge einen weiteren Passkey hinzu, z.B. für ein zweites Gerät.</p>
      <template #details>
        <ul v-if="passkeysLoading" class="mt-4 flex flex-col gap-2">
          <li v-for="row in 2" :key="row" class="skeleton h-14 w-full rounded-field" />
        </ul>
        <ul v-else class="mt-4 flex flex-col gap-2">
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
                <BaseButton size="sm" @click="renaming = null">
                  <MaskIcon :src="crossIcon" class="size-3" />
                  Abbrechen
                </BaseButton>
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
                <MaskIcon :src="pencilIcon" class="size-3" />
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
      title="Authenticator-App"
      :flow="FLOWS.totpAdd"
      action="Einrichten"
      :icon="workflowIcon"
      saved-message="Authenticator-App eingerichtet."
      :loading="authenticatorsLoading"
      @done="loadAuthenticators"
    >
      <p v-if="totpDevices.length">
        Eingerichtet seit {{ formatDate(totpDevices[0].created) }}. Du kannst dich mit den Codes aus
        deiner App anmelden.
      </p>
      <p v-else>
        Codes aus einer App wie Google Authenticator, Microsoft Authenticator oder 1Password.
      </p>
    </FlowCard>

    <FlowCard
      title="Konto sperren"
      :flow="FLOWS.lockdown"
      action="Sperren"
      :icon="banIcon"
      submit-label="Konto jetzt sperren"
      saved-message=""
      button-variant="error"
      button-outline
      :error="lockdownError"
      :loading="!authStore.ready"
      @open="lockdownError = ''"
      @done="onLockedDown"
    >
      <p>
        Für den Notfall, z.B. wenn dein Passwort geleakt ist oder du ein Gerät mit deinem Passkey
        verloren hast: Sperrt dein Konto sofort und meldet dich überall ab.
      </p>
    </FlowCard>

    <FlowCard
      title="Konto löschen"
      :flow="FLOWS.accountDelete"
      action="Löschen"
      :icon="trashIcon"
      submit-label="Konto endgültig löschen"
      saved-message=""
      button-variant="error"
      :error="deleteError"
      :loading="!authStore.ready"
      @open="deleteError = ''"
      @done="onDeleted"
    >
      <p>
        Löscht dein govex-Konto endgültig, zusammen mit deinen Konten in allen angeschlossenen Apps
        wie wintersehn.
      </p>
    </FlowCard>
  </AccountPage>
</template>

<script>
import AccountPage from '@/components/AccountPage.vue'
import BaseButton from '@/components/BaseButton.vue'
import FlowCard from '@/components/FlowCard.vue'
import MaskIcon from '@/components/MaskIcon.vue'
import banIcon from '@/assets/icons/ban.svg'
import crossIcon from '@/assets/icons/cross.svg'
import pencilIcon from '@/assets/icons/pencil.svg'
import plusIcon from '@/assets/icons/plus.svg'
import trashIcon from '@/assets/icons/trash.svg'
import workflowIcon from '@/assets/icons/workflow-alt.svg'
import { FLOWS, fetchAuthenticators, fetchPasskeys, renamePasskey } from '@/lib/authentik.js'
import { useAuthStore } from '@/stores/auth.js'

export default {
  name: 'SecurityView',
  components: { AccountPage, BaseButton, FlowCard, MaskIcon },
  data() {
    return {
      FLOWS,
      banIcon,
      crossIcon,
      pencilIcon,
      plusIcon,
      trashIcon,
      workflowIcon,
      passkeys: [],
      passkeysLoading: true,
      passkeysError: '',
      authenticators: [],
      authenticatorsLoading: true,
      renaming: null,
      newName: '',
      renameError: '',
      saving: false,
      lockdownError: '',
      deleteError: '',
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
    totpDevices() {
      return this.authenticators.filter((a) => a.type.toLowerCase().endsWith('.totpdevice'))
    },
  },
  mounted() {
    this.loadPasskeys()
    this.loadAuthenticators()
  },
  methods: {
    async loadPasskeys() {
      try {
        this.passkeys = await fetchPasskeys()
        this.passkeysError = ''
      } catch (err) {
        this.passkeysError = err.message
      } finally {
        this.passkeysLoading = false
      }
    },
    async loadAuthenticators() {
      try {
        this.authenticators = await fetchAuthenticators()
      } catch (err) {
        this.passkeysError = err.message
      } finally {
        this.authenticatorsLoading = false
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
    async onDeleted() {
      await this.authStore.fetchMe()
      if (this.authStore.isAuthenticated) {
        this.deleteError = 'Das Konto konnte nicht gelöscht werden. Bitte versuche es erneut.'
        return
      }
      this.$router.push({ name: 'home', query: { deleted: '1' } })
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
