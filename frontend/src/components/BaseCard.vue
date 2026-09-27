<template>
  <div
    class="border border-solid border-govex-border bg-base-100"
    :class="title ? 'p-8' : 'p-6'"
  >
    <h2 v-if="title" class="mb-6 text-xl font-light">{{ title }}</h2>
    <div class="text-govex-slate">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: { type: String, default: null },
  },
}
</script>
