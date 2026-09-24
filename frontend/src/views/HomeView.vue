<template>
  <BaseCard title="govex">
    <p v-if="$route.query.locked" role="alert" class="alert alert-soft alert-warning text-sm mb-4">
      Dein Konto ist gesperrt und du wurdest überall abgemeldet. Zum Entsperren wende dich an einen
      Administrator.
    </p>
    <p class="text-sm">
      Dein zentrales Konto für alle angeschlossenen Apps. govex verwaltet nur deinen Benutzernamen,
      deine Email, dein Passwort und deine Passkeys — sonst nichts.
    </p>
    <BaseButton variant="primary" block to="/login" class="mt-6">Anmelden</BaseButton>
  </BaseCard>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
</script>
