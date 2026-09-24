<template>
  <section class="mb-10">
    <h3 class="my-4 text-xl">{{ title }}</h3>
    <BaseCard>
      <template v-if="active">
        <FlowExecutor :slug="flow" :submit-label="submitLabel" @done="onDone" />
        <BaseButton block class="mt-2" @click="active = false">Abbrechen</BaseButton>
      </template>
      <template v-else>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0 text-govex-muted">
            <slot />
            <p v-if="error" class="text-error text-sm mt-2">{{ error }}</p>
            <p v-if="saved && savedMessage" class="text-success text-sm mt-2">
              {{ savedMessage }}
            </p>
          </div>
          <BaseButton
            :variant="buttonVariant"
            :outline="buttonOutline"
            class="shrink-0"
            @click="open"
          >
            {{ action }}
          </BaseButton>
        </div>
        <slot name="details" />
      </template>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import FlowExecutor from '@/components/FlowExecutor.vue'
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  flow: { type: String, required: true },
  action: { type: String, required: true },
  savedMessage: { type: String, default: 'Gespeichert.' },
  submitLabel: { type: String, default: 'Speichern' },
  buttonVariant: { type: String, default: 'neutral' },
  buttonOutline: { type: Boolean, default: false },
  error: { type: String, default: '' },
})

const emit = defineEmits(['open', 'done'])

const active = ref(false)
const saved = ref(false)

function open() {
  saved.value = false
  active.value = true
  emit('open')
}

async function onDone(to) {
  active.value = false
  saved.value = true
  emit('done', to)
}
</script>
