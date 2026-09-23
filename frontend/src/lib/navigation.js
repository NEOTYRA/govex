export function flowQuery() {
  return window.location.search.replace(/^\?/, '')
}

export function finishFlow(to) {
  const target = new URL(to || '/', window.location.origin)
  window.location.href = target.origin === window.location.origin ? target.href : '/'
}
