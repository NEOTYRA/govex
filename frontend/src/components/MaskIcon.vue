<template>
  <span
    class="mask-icon inline-block shrink-0 bg-current"
    :style="{ maskImage }"
    aria-hidden="true"
  />
</template>

<script>
export default {
  name: 'MaskIcon',
  props: {
    src: { type: String, required: true },
  },
  computed: {
    maskImage() {
      return `url("${this.src}")`
    },
  },
}
</script>

<style scoped>
.mask-icon {
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}
</style>
