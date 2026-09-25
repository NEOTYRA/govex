<template>
  <div class="relative flex min-h-[100dvh] flex-col bg-base-200 pl-2">
    <div class="absolute top-0 left-0 z-20 h-full w-2 bg-primary" />
    <header class="sticky top-0 z-20 flex h-12 w-full items-center bg-primary">
      <RouterLink
        to="/"
        class="hidden h-full w-80 shrink-0 items-center bg-base-100 pl-8 text-base-content lg:flex"
      >
        <h1 class="text-[1.2rem]">GOVEX</h1>
      </RouterLink>
      <RouterLink
        to="/"
        class="flex size-12 shrink-0 items-center justify-center bg-base-100 text-[1.2rem] text-base-content lg:hidden"
      >
        G
      </RouterLink>
      <div v-if="authStore.isAuthenticated" class="ml-auto flex items-center gap-3 px-6">
        <span class="text-sm text-white">{{ authStore.user.username }}</span>
        <BaseButton
          variant="ghost"
          shape="square"
          size="sm"
          to="/account"
          aria-current-value="false"
        >
          <img :src="settingsIcon" alt="Mein Profil" class="size-5 invert" />
        </BaseButton>
        <BaseButton
          v-if="showNavigation"
          variant="ghost"
          shape="square"
          size="sm"
          class="lg:hidden"
          :aria-label="navOpen ? 'Navigation schliessen' : 'Navigation öffnen'"
          :aria-expanded="navOpen"
          @click="navOpen = !navOpen"
        >
          <img :src="navOpen ? crossIcon : menuIcon" alt="" class="size-5 invert" />
        </BaseButton>
      </div>
    </header>

    <div class="flex flex-1">
      <AccountNavigation v-if="showNavigation" :open="navOpen" @close="navOpen = false" />

      <!-- pt-[117px]: wintersehn's breadcrumb bar (53px) + mt-16 above its cards -->
      <main class="min-w-0 flex-1 px-6 pb-16" :class="showNavigation ? 'pt-[53px]' : 'pt-[117px]'">
        <RouterView v-if="showNavigation" />
        <div v-else class="mx-auto flex w-full max-w-100 flex-col gap-6">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import AccountNavigation from '@/components/AccountNavigation.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useAuthStore } from '@/stores/auth.js'
import settingsIcon from '@/assets/icons/settings.svg'
import menuIcon from '@/assets/icons/menu-burger.svg'
import crossIcon from '@/assets/icons/cross.svg'

export default {
  name: 'App',
  components: { RouterView, RouterLink, AccountNavigation, BaseButton },
  data() {
    return {
      navOpen: false,
      settingsIcon,
      menuIcon,
      crossIcon,
    }
  },
  computed: {
    authStore() {
      return useAuthStore()
    },
    showNavigation() {
      return Boolean(this.$route.meta.accountNavigation) && this.authStore.isAuthenticated
    },
  },
  watch: {
    '$route.fullPath'() {
      this.navOpen = false
    },
  },
  mounted() {
    this.authStore.fetchMe()
  },
}
</script>
