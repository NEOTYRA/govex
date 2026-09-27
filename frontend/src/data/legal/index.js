import neotyra from './neotyra.js'

const undraws = import.meta.glob('../../assets/images/undraws/*.svg', {
  eager: true,
  import: 'default',
})

export const illustrations = Object.fromEntries(
  Object.entries(undraws).map(([path, src]) => [path.split('/').pop().replace('.svg', ''), src]),
)

export const contracts = neotyra

export const WINTERSEHN_URL = import.meta.env.DEV
  ? 'http://localhost:5173'
  : 'https://wintersehn.ch'
