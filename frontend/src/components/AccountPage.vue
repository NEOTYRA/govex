<template>
  <div class="mx-auto w-full max-w-150">
    <div v-if="loading" class="skeleton my-5 h-5 w-40" />
    <h2 v-else class="my-4 text-xl font-light">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  props: {
    title: { type: String, required: true },
    loading: { type: Boolean, default: false },
  },
}
</script>
