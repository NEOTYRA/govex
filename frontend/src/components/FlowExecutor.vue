<template>
  <p v-if="loading && !challenge" class="text-sm text-govex-muted">Wird geladen …</p>

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

    <BaseButton type="submit" variant="primary" block class="mt-6" :disabled="loading">
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
      <template v-else>
        <label class="label" :class="{ 'mt-2': index > 0 }" :for="`flow-${field.field_key}`">
          {{ field.label }}
        </label>
        <input
          :id="`flow-${field.field_key}`"
          v-model="fields[field.field_key]"
          :type="inputType(field.type)"
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

    <BaseButton type="submit" variant="primary" block class="mt-6" :disabled="loading">
      {{ submitLabel }}
    </BaseButton>
  </form>

  <div v-else-if="challenge?.component === 'ak-stage-captcha'">
    <p class="text-sm">Bitte bestätige kurz, dass du kein Bot bist.</p>
    <div ref="captcha" class="mt-4"></div>
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
  </div>

  <div v-else-if="challenge?.component === 'ak-stage-authenticator-validate'">
    <p class="text-sm">Bestätige mit deinem Passkey, dass du es bist.</p>
    <p v-if="error" class="text-error text-sm mt-3">{{ error }}</p>
    <BaseButton variant="primary" block class="mt-6" :disabled="loading" @click="onValidatePasskey">
      Mit Passkey bestätigen
    </BaseButton>
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
import BaseButton from '@/components/BaseButton.vue'
import { FlowRun, errorsByField } from '@/lib/authentik.js'
import { createCredential, getAssertion, isWebAuthnSupported } from '@/lib/webauthn.js'

const ALERT_CLASSES = {
  alert_info: 'alert-info',
  alert_warning: 'alert-warning',
  alert_danger: 'alert-error',
}

export default {
  name: 'FlowExecutor',
  components: { BaseButton },
  props: {
    slug: { type: String, required: true },
    query: { type: String, default: '' },
    submitLabel: { type: String, default: 'Weiter' },
  },
  emits: ['done'],
  data() {
    return {
      ALERT_CLASSES,
      challenge: null,
      loading: false,
      error: '',
      fieldErrors: {},
      fields: {},
    }
  },
  computed: {
    promptFields() {
      return [...(this.challenge?.fields ?? [])].sort((a, b) => a.order - b.order)
    },
  },
  mounted() {
    this.start()
  },
  methods: {
    inputType(type) {
      if (type === 'username') return 'text'
      return ['email', 'password', 'number', 'date'].includes(type) ? type : 'text'
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
      this.error = errors.non_field_errors ?? ''
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
