<template>
  <div class="flex items-center gap-4">
    <div
      class="flex size-16 shrink-0 items-center justify-center rounded-box border border-solid border-govex-border p-2"
    >
      <img
        class="size-11"
        :class="{ 'avatar-fallback': !hasAvatar(modelValue) }"
        :src="avatarSrc(modelValue)"
        alt=""
      />
    </div>

    <div class="w-full">
      <button
        :id="id"
        type="button"
        :popovertarget="`${id}-menu`"
        :style="`anchor-name: --${id}-anchor`"
        class="select flex w-full items-center gap-2"
      >
        <img
          class="size-5"
          :class="{ 'avatar-fallback': !hasAvatar(modelValue) }"
          :src="avatarSrc(modelValue)"
          alt=""
        />
        <span>{{ selectedLabel }}</span>
      </button>

      <ul
        :id="`${id}-menu`"
        ref="menu"
        popover
        class="dropdown menu max-h-72 flex-nowrap overflow-y-auto rounded-box bg-base-100 shadow-sm"
        :style="`position-anchor: --${id}-anchor; width: anchor-size(width)`"
      >
        <li v-for="choice in choices" :key="choice.value">
          <a :class="{ active: modelValue === choice.value }" @click="choose(choice.value)">
            <img
              class="size-6"
              :class="{ 'avatar-fallback': !hasAvatar(choice.value) }"
              :src="avatarSrc(choice.value)"
              alt=""
            />
            {{ choice.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { avatarSrc, hasAvatar } from '@/lib/avatars.js'

export default {
  name: 'AvatarPicker',
  props: {
    id: { type: String, required: true },
    modelValue: { type: String, default: '' },
    choices: { type: Array, required: true },
  },
  emits: ['update:modelValue'],
  computed: {
    selectedLabel() {
      return this.choices.find((choice) => choice.value === this.modelValue)?.label ?? ''
    },
  },
  methods: {
    avatarSrc,
    hasAvatar,
    choose(value) {
      this.$emit('update:modelValue', value)
      this.$refs.menu?.hidePopover()
    },
  },
}
</script>

<style>
[data-theme='dark'] .avatar-fallback {
  filter: invert(1);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .avatar-fallback {
    filter: invert(1);
  }
}
</style>
