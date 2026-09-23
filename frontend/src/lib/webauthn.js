function base64urlToBuffer(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=')
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes.buffer
}

function bufferToBase64url(buffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function decodeDescriptors(descriptors = []) {
  return descriptors.map((descriptor) => ({ ...descriptor, id: base64urlToBuffer(descriptor.id) }))
}

function toUserError(err) {
  if (err?.name === 'NotAllowedError') {
    return new Error('Passkey-Vorgang abgebrochen oder abgelaufen. Bitte versuche es erneut.')
  }
  if (err?.name === 'InvalidStateError') {
    return new Error('Dieser Passkey ist bereits registriert.')
  }
  return new Error('Passkey konnte nicht verwendet werden.')
}

export function isWebAuthnSupported() {
  return typeof window.PublicKeyCredential !== 'undefined'
}

export async function createCredential(options) {
  const publicKey = {
    ...options,
    challenge: base64urlToBuffer(options.challenge),
    user: { ...options.user, id: base64urlToBuffer(options.user.id) },
    excludeCredentials: decodeDescriptors(options.excludeCredentials),
  }

  let credential
  try {
    credential = await navigator.credentials.create({ publicKey })
  } catch (err) {
    throw toUserError(err)
  }

  return {
    id: credential.id,
    rawId: bufferToBase64url(credential.rawId),
    type: credential.type,
    clientExtensionResults: credential.getClientExtensionResults(),
    authenticatorAttachment: credential.authenticatorAttachment ?? undefined,
    response: {
      clientDataJSON: bufferToBase64url(credential.response.clientDataJSON),
      attestationObject: bufferToBase64url(credential.response.attestationObject),
      transports: credential.response.getTransports?.() ?? [],
    },
  }
}

export async function getAssertion(options) {
  const publicKey = {
    ...options,
    challenge: base64urlToBuffer(options.challenge),
    allowCredentials: decodeDescriptors(options.allowCredentials),
  }

  let credential
  try {
    credential = await navigator.credentials.get({ publicKey })
  } catch (err) {
    throw toUserError(err)
  }

  const { response } = credential
  return {
    id: credential.id,
    rawId: bufferToBase64url(credential.rawId),
    type: credential.type,
    clientExtensionResults: credential.getClientExtensionResults(),
    authenticatorAttachment: credential.authenticatorAttachment ?? undefined,
    response: {
      clientDataJSON: bufferToBase64url(response.clientDataJSON),
      authenticatorData: bufferToBase64url(response.authenticatorData),
      signature: bufferToBase64url(response.signature),
      userHandle: response.userHandle ? bufferToBase64url(response.userHandle) : null,
    },
  }
}
