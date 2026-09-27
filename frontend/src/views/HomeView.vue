<template>
  <BaseCard title="govex">
    <p v-if="$route.query.locked" role="alert" class="alert alert-soft alert-warning text-sm mb-4">
      Dein Konto ist gesperrt und du wurdest überall abgemeldet. Zum Entsperren wende dich an einen
      Administrator.
    </p>
    <p v-if="$route.query.deleted" role="alert" class="alert alert-soft alert-info text-sm mb-4">
      Dein Konto wurde gelöscht, auch in allen angeschlossenen Apps.
    </p>
    <p class="text-sm">
      Dein zentrales Konto für alle angeschlossenen Apps. govex verwaltet nur deinen Benutzernamen,
      deine Email, dein Passwort und deine Passkeys — sonst nichts.
    </p>
    <BaseButton variant="primary" block to="/login" class="mt-6 gap-2">
      <MaskIcon :src="enterIcon" class="size-4" />
      Anmelden
    </BaseButton>
  </BaseCard>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import MaskIcon from '@/components/MaskIcon.vue'
import enterIcon from '@/assets/icons/enter.svg'

export default {
  name: 'HomeView',
  components: { BaseButton, BaseCard, MaskIcon },
  data() {
    return { enterIcon }
  },
}
</script>
