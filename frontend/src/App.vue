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
      <div v-if="auth.isAuthenticated" class="ml-auto flex items-center gap-3 px-6">
        <span class="text-sm text-white">{{ auth.user.username }}</span>
        <RouterLink
          to="/account"
          aria-current-value="false"
          class="btn btn-square btn-ghost btn-sm shadow-none"
        >
          <img :src="settingsIcon" alt="Mein Profil" class="size-5 invert" />
        </RouterLink>
      </div>
    </header>

    <!-- pt-[117px]: wintersehn's breadcrumb bar (53px) + mt-16 above its cards -->
    <main class="flex-1 px-6 pb-16 pt-[117px]">
      <div class="mx-auto flex w-full max-w-100 flex-col gap-6">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import settingsIcon from '@/assets/icons/settings.svg'

const auth = useAuthStore()

onMounted(() => {
  auth.fetchMe()
})
</script>
