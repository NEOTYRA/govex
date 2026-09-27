<template>
  <aside
    class="w-full shrink-0 flex-col bg-base-100 lg:sticky lg:top-12 lg:flex lg:h-[calc(100dvh-48px)] lg:w-80"
    :class="open ? 'fixed inset-x-0 top-12 bottom-0 z-10 flex' : 'hidden'"
  >
    <ul class="menu w-full gap-2 p-4">
      <li v-for="item in items" :key="item.name">
        <div v-if="!authStore.ready" class="flex items-center gap-3 p-4">
          <div class="skeleton size-5 shrink-0" />
          <div class="skeleton h-4 w-24" />
        </div>
        <RouterLink
          v-else
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
    <div v-if="!authStore.ready" class="mt-auto flex w-full flex-col gap-1 p-4">
      <div class="skeleton h-3 w-20" />
      <div class="skeleton mb-4 h-3 w-32" />
      <div class="skeleton h-10 w-full" />
    </div>
    <div v-else class="mt-auto w-full p-4">
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

<script>
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import fingerprintIcon from '@/assets/icons/fingerprint.svg'
import shieldIcon from '@/assets/icons/shield.svg'
import exitIcon from '@/assets/icons/exit.svg'
import packageJson from '../../package.json'

export default {
  name: 'AccountNavigation',
  components: { RouterLink, BaseButton },
  props: {
    open: { type: Boolean, default: false },
  },
  emits: ['close'],
  data() {
    return {
      exitIcon,
      version: packageJson.version,
      items: [
        { name: 'profile', label: 'Profil', icon: fingerprintIcon },
        { name: 'security', label: 'Sicherheit', icon: shieldIcon },
      ],
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
  },
  methods: {
    async onLogout() {
      this.$emit('close')
      await this.authStore.logout()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
