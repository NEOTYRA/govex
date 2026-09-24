<template>
  <div class="mx-auto w-full max-w-150">
    <h2 class="my-4 text-xl font-light">{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
