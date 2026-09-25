export const FLOWS = {
  authentication: 'govex-authentication',
  enrollment: 'govex-enrollment',
  profile: 'govex-profile',
  passwordChange: 'govex-password-change',
  passkeyAdd: 'govex-passkey-add',
  totpAdd: 'govex-totp-add',
  lockdown: 'govex-lockdown',
  logout: 'govex-logout',
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

async function request(url, options = {}) {
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-authentik-CSRF': getCookie('authentik_csrf') ?? '',
    },
    ...options,
  })
  const data = await response.json().catch(() => null)
  return { response, data }
}

export async function fetchCurrentUser() {
  const { response, data } = await request('/api/v3/core/users/me/')
  return response.ok ? data.user : null
}

export async function fetchPasskeys() {
  const { response, data } = await request('/api/v3/authenticators/webauthn/?ordering=created_on')
  if (!response.ok) {
    throw new Error('Passkeys konnten nicht geladen werden.')
  }
  return data.results
}

export async function fetchAuthenticators() {
  const { response, data } = await request('/api/v3/authenticators/all/')
  if (!response.ok) {
    throw new Error('Zwei-Faktor-Methoden konnten nicht geladen werden.')
  }
  return data
}

export async function renamePasskey(pk, name) {
  const { response, data } = await request(`/api/v3/authenticators/webauthn/${pk}/`, {
    method: 'PATCH',
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(data?.name?.[0] ?? 'Passkey konnte nicht umbenannt werden.')
  }
  return data
}

export class FlowRun {
  constructor(slug, query = '') {
    this.url = `/api/v3/flows/executor/${slug}/?query=${encodeURIComponent(query)}`
  }

  async start() {
    return this.#challenge(await request(this.url))
  }

  async submit(component, fields) {
    return this.#challenge(
      await request(this.url, { method: 'POST', body: JSON.stringify({ component, ...fields }) }),
    )
  }

  #challenge({ response, data }) {
    if (!data?.component) {
      throw new Error(`Unerwartete Antwort vom Server (${response.status}).`)
    }
    return data
  }
}

export function errorsByField(challenge) {
  const errors = {}
  for (const [field, list] of Object.entries(challenge?.response_errors ?? {})) {
    errors[field] = list.map((error) => error.string).join(' ')
  }
  return errors
}
