// Public key of wintersehn's consent signing key (accounts/consent.py there),
// the same as GOVEX_WINTERSEHN_CONSENT_KEY for authentik. A status it doesn't
// verify was changed after wintersehn signed it. Dev has its own key pair.
const DEV_KEY =
  '-----BEGIN PUBLIC KEY-----\n' +
  'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAENxmoshNKpLzwHguCn1ws/W93dQ2p\n' +
  'EPm4ppwG7MIsab6MSgAhTfDNgzo8AwycUhHdju4ShCzPfERtoWR2eBO3Tw==\n' +
  '-----END PUBLIC KEY-----\n'

const PRODUCTION_KEY =
  '-----BEGIN PUBLIC KEY-----\n' +
  'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEMfD1W+zp07A8ZzRkue/02ki8lU0l\n' +
  'p9OhyzgLefKcNB93r2ghdvvoXnxCJIKZqAQbU3NO9GoplRoBlYK50vjy7w==\n' +
  '-----END PUBLIC KEY-----\n'

const WINTERSEHN_KEYS = [import.meta.env.DEV ? DEV_KEY : PRODUCTION_KEY].filter(Boolean)

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

export async function verifyAttestation(token) {
  const [header, body, signature] = (token ?? '').split('.')
  if (!header || !body || !signature) return null
  const message = new TextEncoder().encode(`${header}.${body}`)
  for (const pem of WINTERSEHN_KEYS) {
    const key = await importKey(pem)
    const algorithm = { name: 'ECDSA', hash: 'SHA-256' }
    if (await crypto.subtle.verify(algorithm, key, decode(signature), message)) {
      return JSON.parse(new TextDecoder().decode(decode(body)))
    }
  }
  return null
}
