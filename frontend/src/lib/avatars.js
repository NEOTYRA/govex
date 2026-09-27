import userIcon from '@/assets/icons/user.svg'

const modules = import.meta.glob('@/assets/avatars/*.svg', { eager: true, import: 'default' })

const avatars = Object.fromEntries(
  Object.entries(modules).map(([path, src]) => [path.split('/').pop().replace('.svg', ''), src]),
)

export function hasAvatar(key) {
  return key in avatars
}

export function avatarSrc(key) {
  return avatars[key] ?? userIcon
}
