// Public keys of the connected apps' consent signing keys (accounts/consent.py
// there), the same as GOVEX_<APP>_CONSENT_KEY for authentik. A status it
// doesn't verify was changed after the app signed it. Dev has its own key pairs.
const DEV_KEYS = {
  wintersehn:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAENxmoshNKpLzwHguCn1ws/W93dQ2p\n' +
    'EPm4ppwG7MIsab6MSgAhTfDNgzo8AwycUhHdju4ShCzPfERtoWR2eBO3Tw==\n' +
    '-----END PUBLIC KEY-----\n',
  swissfy:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEyWO92zolnelVEJbDCEIcDkfMFwoj\n' +
    'EhBKw2ZThihIbj+wRSkiWLOUL/s/MPPErgs1cbFOQaASXXNJpQQbWLld5Q==\n' +
    '-----END PUBLIC KEY-----\n',
}

const PRODUCTION_KEYS = {
  wintersehn:
    '-----BEGIN PUBLIC KEY-----\n' +
    'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEMfD1W+zp07A8ZzRkue/02ki8lU0l\n' +
    'p9OhyzgLefKcNB93r2ghdvvoXnxCJIKZqAQbU3NO9GoplRoBlYK50vjy7w==\n' +
    '-----END PUBLIC KEY-----\n',
  // TODO: swissfy's production public key (manage.py consent_signing_key there).
  swissfy: '',
}

const KEYS = import.meta.env.DEV ? DEV_KEYS : PRODUCTION_KEYS

function decode(part) {
  const base64 = part.replace(/-/g, '+').replace(/_/g, '/')
  return Uint8Array.from(atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4)), (c) =>
    c.charCodeAt(0),
  )
}

function importKey(pem) {
  const body = pem.replace(/-----[A-Z ]+-----/g, '').replace(/\s/g, '')
  return crypto.subtle.importKey(
    'spki',
    Uint8Array.from(atob(body), (c) => c.charCodeAt(0)),
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['verify'],
  )
}

export async function verifyAttestation(app, token) {
  const [header, body, signature] = (token ?? '').split('.')
  if (!header || !body || !signature || !KEYS[app]) return null
  const message = new TextEncoder().encode(`${header}.${body}`)
  const key = await importKey(KEYS[app])
  const algorithm = { name: 'ECDSA', hash: 'SHA-256' }
  if (!(await crypto.subtle.verify(algorithm, key, decode(signature), message))) return null
  const payload = JSON.parse(new TextDecoder().decode(decode(body)))
  return payload.iss === app ? payload : null
}
