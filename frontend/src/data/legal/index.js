import neotyra from './neotyra.js'

const undraws = import.meta.glob('../../assets/images/undraws/*.svg', {
  eager: true,
  import: 'default',
})

export const illustrations = Object.fromEntries(
  Object.entries(undraws).map(([path, src]) => [path.split('/').pop().replace('.svg', ''), src]),
)

export const contracts = neotyra

// Connected apps keep the consents to their own contracts; govex links there
// and shows the status they signed.
export const CONNECTED_APPS = [
  {
    id: 'wintersehn',
    name: 'Wintersehn',
    url: import.meta.env.DEV ? 'http://localhost:5173' : 'https://wintersehn.ch',
    pages: ['privacy', 'terms', 'disclaimer', 'cookies'],
  },
  {
    id: 'swissfy',
    name: 'swissfy',
    url: import.meta.env.DEV ? 'http://localhost:5175' : 'https://swissfy.ch',
    pages: ['privacy', 'terms', 'disclaimer'],
  },
]
