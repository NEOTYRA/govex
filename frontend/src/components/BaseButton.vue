<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <slot />
  </RouterLink>
  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const VARIANT_CLASSES = {
  neutral: '',
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  error: 'btn-error',
}

const SIZE_CLASSES = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: '',
}

const SHAPE_CLASSES = {
  circle: 'btn-circle',
  square: 'btn-square',
}

const props = defineProps({
  variant: { type: String, default: 'neutral' },
  outline: { type: Boolean, default: false },
  size: { type: String, default: 'md' },
  shape: { type: String, default: null },
  block: { type: Boolean, default: false },
  to: { type: [String, Object], default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})

const classes = computed(() => [
  'btn',
  'shadow-none',
  VARIANT_CLASSES[props.variant],
  props.outline ? 'btn-outline' : '',
  SIZE_CLASSES[props.size],
  props.shape ? SHAPE_CLASSES[props.shape] : '',
  props.block ? 'w-full' : '',
])
</script>
