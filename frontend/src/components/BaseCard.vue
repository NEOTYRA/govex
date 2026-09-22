<template>
  <div class="rounded-box border border-solid border-govex-border bg-base-100 p-8">
    <h2 class="mb-6 text-xl font-light">{{ title }}</h2>
    <div class="text-govex-slate">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
