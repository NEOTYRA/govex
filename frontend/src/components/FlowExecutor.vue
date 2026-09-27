<template>
  <div v-if="!challenge && !error" class="flex flex-col gap-2">
    <div class="skeleton h-4 w-32" />
    <div class="skeleton h-10 w-full" />
    <div class="skeleton mt-6 h-10 w-full" />
  </div>

  <form
    v-else-if="challenge?.component === 'ak-stage-identification'"
    class="fieldset"
    @submit.prevent="submit({ uid_field: fields.uid_field, password: fields.password })"
  >
    <label class="label" for="flow-uid">Benutzername oder Email</label>
    <input
      id="flow-uid"
      v-model="fields.uid_field"
      type="text"
      autocomplete="username"
      class="input w-full"
      required
    />

    <template v-if="challenge.password_fields">
      <label class="label mt-2" for="flow-password">Passwort</label>
      <input
        id="flow-password"
        v-model="fields.password"
        type="password"
        autocomplete="current-password"
        class="input w-full"
        required
      />
    </template>

    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>

    <BaseButton type="submit" variant="primary" block class="mt-6 gap-2" :disabled="loading">
      <MaskIcon v-if="submitIcon" :src="submitIcon" class="size-4" />
      {{ submitLabel }}
    </BaseButton>
  </form>

  <form
    v-else-if="challenge?.component === 'ak-stage-prompt'"
    class="fieldset"
    @submit.prevent="submit(promptValues())"
  >
    <template v-for="(field, index) in promptFields" :key="field.field_key">
      <div
        v-if="field.type in ALERT_CLASSES"
        role="alert"
        class="alert alert-soft text-sm"
        :class="[ALERT_CLASSES[field.type], { 'mt-2': index > 0 }]"
      >
        {{ field.initial_value }}
      </div>
      <label
        v-else-if="field.type === 'checkbox'"
        class="label mt-4 cursor-pointer gap-2 whitespace-normal"
      >
        <input
          v-model="fields[field.field_key]"
          type="checkbox"
          class="checkbox checkbox-sm"
          :required="field.required"
        />
        <span>{{ field.label }}</span>
      </label>
      <template v-else-if="field.field_key === META_FIELDS.avatar">
        <label class="label" :class="{ 'mt-2': index > 0 }" for="flow-avatar">
          {{ field.label }}
        </label>
        <AvatarPicker id="flow-avatar" v-model="fields[field.field_key]" :choices="field.choices" />
      </template>
      <template v-else>
        <label class="label" :class="{ 'mt-2': index > 0 }" :for="`flow-${field.field_key}`">
          {{ field.label }}
        </label>
        <input
          :id="`flow-${field.field_key}`"
          v-model="fields[field.field_key]"
          :type="inputType(field)"
          :autocomplete="autocomplete(field)"
          :placeholder="field.placeholder"
          :required="field.required"
          class="input w-full"
        />
      </template>
      <p v-if="field.sub_text" class="text-xs text-govex-muted mt-1">{{ field.sub_text }}</p>
      <p v-if="fieldErrors[field.field_key]" class="text-error text-sm mt-1">
        {{ fieldErrors[field.field_key] }}
      </p>
    </template>

    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>

    <BaseButton type="submit" variant="primary" block class="mt-6 gap-2" :disabled="loading">
      <MaskIcon v-if="submitIcon" :src="submitIcon" class="size-4" />
      {{ submitLabel }}
    </BaseButton>
  </form>

  <div v-else-if="challenge?.component === 'ak-stage-captcha'">
    <p class="text-sm">Bitte bestätige kurz, dass du kein Bot bist.</p>
    <div ref="captcha" class="mt-4"></div>
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
  </div>

  <div
    v-else-if="
      challenge?.component === 'ak-stage-authenticator-validate' &&
      !challenge.device_challenges.length
    "
  >
    <p class="text-sm">
      Richte einen zweiten Faktor ein. Du brauchst ihn bei jeder Anmeldung zusätzlich zum Passwort.
    </p>
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
    <div class="mt-6 flex flex-col gap-2">
      <BaseButton
        v-for="stage in configurationStages"
        :key="stage.pk"
        block
        :disabled="loading"
        @click="submit({ selected_stage: stage.pk })"
      >
        {{ methodLabel(stage.meta_model_name) }}
      </BaseButton>
    </div>
  </div>

  <div v-else-if="challenge?.component === 'ak-stage-authenticator-validate'">
    <div v-if="deviceClasses.length > 1" class="mb-4 flex flex-wrap gap-2">
      <BaseButton
        v-for="deviceClass in deviceClasses"
        :key="deviceClass"
        size="sm"
        :variant="method === deviceClass ? 'primary' : 'neutral'"
        @click="method = deviceClass"
      >
        {{ METHOD_LABELS[deviceClass] }}
      </BaseButton>
    </div>

    <template v-if="method === 'webauthn'">
      <p class="text-sm">Bestätige mit deinem Passkey, dass du es bist.</p>
      <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
      <BaseButton
        variant="primary"
        block
        class="mt-6 gap-2"
        :disabled="loading"
        @click="onValidatePasskey"
      >
        <MaskIcon :src="keyHoleIcon" class="size-4" />
        Mit Passkey bestätigen
      </BaseButton>
    </template>

    <form v-else class="fieldset" @submit.prevent="submit({ code: fields.code })">
      <p class="text-sm">Gib den Code aus deiner Authenticator-App ein.</p>
      <label class="label mt-4" for="flow-code">Code</label>
      <input
        id="flow-code"
        v-model="fields.code"
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        class="input w-full"
        required
      />
      <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
      <BaseButton type="submit" variant="primary" block class="mt-6" :disabled="loading">
        Bestätigen
      </BaseButton>
    </form>
  </div>

  <div v-else-if="challenge?.component === 'ak-stage-authenticator-webauthn'">
    <p class="text-sm">
      Richte einen Passkey ein, zum Beispiel mit Face ID, Touch ID, Windows Hello oder einem
      Sicherheitsschlüssel. Du brauchst ihn bei jeder Anmeldung zusätzlich zum Passwort.
    </p>
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
    <BaseButton variant="primary" block class="mt-6" :disabled="loading" @click="onRegisterPasskey">
      Passkey einrichten
    </BaseButton>
  </div>

  <form
    v-else-if="challenge?.component === 'ak-stage-authenticator-totp'"
    class="fieldset"
    @submit.prevent="submit({ code: fields.code })"
  >
    <p class="text-sm">
      Scanne den QR-Code mit deiner Authenticator-App, zum Beispiel Google Authenticator, Microsoft
      Authenticator oder 1Password, und gib den angezeigten Code ein.
    </p>
    <img
      v-if="qrCode"
      :src="qrCode"
      alt="QR-Code für die Authenticator-App"
      class="mx-auto mt-4 size-48"
    />
    <p class="mt-2 text-center text-xs text-govex-muted break-all">
      Schlüssel zum Abtippen: <span class="font-mono">{{ totpSecret }}</span>
    </p>
    <label class="label mt-4" for="flow-totp-code">Code</label>
    <input
      id="flow-totp-code"
      v-model="fields.code"
      type="text"
      inputmode="numeric"
      autocomplete="one-time-code"
      class="input w-full"
      required
    />
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
    <BaseButton type="submit" variant="primary" block class="mt-6" :disabled="loading">
      Bestätigen
    </BaseButton>
  </form>

  <div v-else-if="challenge?.component === 'ak-stage-access-denied'">
    <p class="text-error text-sm">{{ challenge.error_message || 'Zugriff verweigert.' }}</p>
    <BaseButton block class="mt-6" @click="start">Erneut versuchen</BaseButton>
  </div>

  <div v-else-if="challenge">
    <p class="text-error text-sm">
      Dieser Schritt wird nicht unterstützt ({{ challenge.component }}).
    </p>
  </div>

  <p v-else-if="error" class="text-error text-sm">{{ error }}</p>
</template>

<script>
import QRCode from 'qrcode'
import AvatarPicker from '@/components/AvatarPicker.vue'
import BaseButton from '@/components/BaseButton.vue'
import MaskIcon from '@/components/MaskIcon.vue'
import keyHoleIcon from '@/assets/icons/key-hole.svg'
import { FlowRun, META_FIELDS, errorsByField } from '@/lib/authentik.js'
import { createCredential, getAssertion, isWebAuthnSupported } from '@/lib/webauthn.js'

const METHOD_LABELS = {
  webauthn: 'Passkey',
  totp: 'Authenticator-App',
}

const ALERT_CLASSES = {
  alert_info: 'alert-info',
  alert_warning: 'alert-warning',
  alert_danger: 'alert-error',
}

export default {
  name: 'FlowExecutor',
  components: { AvatarPicker, BaseButton, MaskIcon },
  props: {
    slug: { type: String, required: true },
    query: { type: String, default: '' },
    submitLabel: { type: String, default: 'Weiter' },
    submitIcon: { type: String, default: '' },
  },
  emits: ['done'],
  data() {
    return {
      keyHoleIcon,
      ALERT_CLASSES,
      META_FIELDS,
      METHOD_LABELS,
      challenge: null,
      method: null,
      qrCode: '',
      loading: false,
      error: '',
      fieldErrors: {},
      fields: {},
    }
  },
  computed: {
    deviceClasses() {
      const available = (this.challenge?.device_challenges ?? []).map((c) => c.device_class)
      return Object.keys(METHOD_LABELS).filter((deviceClass) => available.includes(deviceClass))
    },
    configurationStages() {
      const order = Object.keys(METHOD_LABELS)
      const rank = (stage) => order.findIndex((c) => stage.meta_model_name.includes(c))
      return [...(this.challenge?.configuration_stages ?? [])].sort((a, b) => rank(a) - rank(b))
    },
    totpSecret() {
      if (!this.challenge?.config_url) return ''
      return new URL(this.challenge.config_url).searchParams.get('secret') ?? ''
    },
    promptFields() {
      return [...(this.challenge?.fields ?? [])].sort((a, b) => a.order - b.order)
    },
  },
  mounted() {
    this.start()
  },
  methods: {
    methodLabel(metaModelName) {
      const deviceClass = Object.keys(METHOD_LABELS).find((c) => metaModelName.includes(c))
      return METHOD_LABELS[deviceClass] ?? metaModelName
    },
    inputType(field) {
      if (field.field_key === META_FIELDS.birthdate) return 'date'
      return ['email', 'password', 'number', 'date'].includes(field.type) ? field.type : 'text'
    },
    autocomplete(field) {
      if (field.type === 'username') return 'username'
      if (field.type === 'email') return 'email'
      if (field.type === 'password') return 'new-password'
      return 'off'
    },
    promptValues() {
      return Object.fromEntries(
        this.promptFields
          .filter((f) => !(f.type in ALERT_CLASSES))
          .map((f) => [f.field_key, this.fields[f.field_key]]),
      )
    },
    async show(next) {
      const errors = errorsByField(next)
      this.error =
        next.component === 'ak-stage-prompt'
          ? (errors.non_field_errors ?? '')
          : (errors.non_field_errors ?? Object.values(errors)[0] ?? '')
      this.fieldErrors = errors

      if (next.component === 'xak-flow-redirect') {
        this.$emit('done', next.to)
        return
      }

      if (next.component !== this.challenge?.component) {
        const fields = {}
        for (const field of next.fields ?? []) {
          fields[field.field_key] = field.type === 'checkbox' ? false : (field.initial_value ?? '')
        }
        if (next.component === 'ak-stage-identification') {
          fields.uid_field = next.pending_user_identifier ?? ''
        }
        this.fields = fields
      }
      if (next.component === 'ak-stage-authenticator-validate') {
        const available = (next.device_challenges ?? []).map((c) => c.device_class)
        if (!available.includes(this.method)) {
          this.method = Object.keys(METHOD_LABELS).find((c) => available.includes(c)) ?? null
        }
      }
      if (next.component === 'ak-stage-authenticator-totp') {
        this.qrCode = await QRCode.toDataURL(next.config_url, { margin: 1, width: 384 })
      }
      if (next.component === 'ak-stage-identification') this.fields.password = ''

      this.challenge = next
      if (next.component === 'ak-stage-captcha') {
        await this.$nextTick()
        this.renderCaptcha(next)
      }
    },
    async step(action) {
      this.loading = true
      try {
        await this.show(await action())
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    start() {
      this.challenge = null
      this.run = new FlowRun(this.slug, this.query)
      return this.step(() => this.run.start())
    },
    submit(values) {
      return this.step(() => this.run.submit(this.challenge.component, values))
    },
    async onValidatePasskey() {
      const webauthn = this.challenge.device_challenges.find((c) => c.device_class === 'webauthn')
      if (!webauthn || !isWebAuthnSupported()) {
        this.error = 'Dieser Browser unterstützt keine Passkeys.'
        return
      }
      try {
        await this.submit({ webauthn: await getAssertion(webauthn.challenge) })
      } catch (err) {
        this.error = err.message
      }
    },
    async onRegisterPasskey() {
      if (!isWebAuthnSupported()) {
        this.error = 'Dieser Browser unterstützt keine Passkeys.'
        return
      }
      try {
        await this.submit({ response: await createCredential(this.challenge.registration) })
      } catch (err) {
        this.error = err.message
      }
    },
    renderCaptcha(current) {
      const mount = () =>
        window.turnstile.render(this.$refs.captcha, {
          sitekey: current.site_key,
          callback: (token) => this.submit({ token }),
          'error-callback': () => {
            this.error = 'Bot-Verifizierung fehlgeschlagen. Bitte lade die Seite neu.'
          },
        })

      if (window.turnstile) {
        mount()
        return
      }
      const script = document.createElement('script')
      script.src = current.js_url
      script.async = true
      script.onload = mount
      document.head.appendChild(script)
    },
  },
}
</script>
