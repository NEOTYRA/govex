<template>
  <aside
    class="w-full shrink-0 flex-col bg-base-100 lg:sticky lg:top-12 lg:flex lg:h-[calc(100dvh-48px)] lg:w-80"
    :class="open ? 'fixed inset-x-0 top-12 bottom-0 z-10 flex' : 'hidden'"
  >
    <ul class="menu w-full gap-2 p-4">
      <li v-for="item in items" :key="item.name">
        <RouterLink
          :to="{ name: item.name }"
          class="flex items-center gap-3 p-4 shadow-none"
          :class="{ 'bg-govex-highlight text-primary': $route.name === item.name }"
          @click="$emit('close')"
        >
          <span
            aria-hidden="true"
            class="size-5 shrink-0 bg-current"
            :style="{ mask: `url(&quot;${item.icon}&quot;) center / contain no-repeat` }"
          />
          <span>{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
    <div class="mt-auto w-full p-4">
      <div class="mb-4 text-xs font-light text-govex-muted">
        <div>Version {{ version }}</div>
        <div>Created by NEOTYRA</div>
      </div>
      <BaseButton variant="primary" block @click="onLogout">
        <img :src="exitIcon" alt="" class="mr-2 size-5 shrink-0 invert" />Abmelden
      </BaseButton>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import fingerprintIcon from '@/assets/icons/fingerprint.svg'
import shieldIcon from '@/assets/icons/shield.svg'
import exitIcon from '@/assets/icons/exit.svg'
import packageJson from '../../package.json'

defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

const auth = useAuthStore()
const router = useRouter()
const version = packageJson.version

const items = [
  { name: 'profile', label: 'Profil', icon: fingerprintIcon },
  { name: 'security', label: 'Sicherheit', icon: shieldIcon },
]

async function onLogout() {
  emit('close')
  await auth.logout()
  router.push({ name: 'home' })
}
</script>
