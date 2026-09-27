<template>
  <div class="mx-auto w-full max-w-150">
    <h2 class="my-4 text-xl font-light">{{ title }}</h2>
    <div
      class="list rounded-box border-1 border-solid border-govex-border bg-base-100 p-8 shadow-none"
    >
      <div class="text-govex-slate">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegalPage',
  props: {
    title: { type: String, required: true },
  },
}
</script>
