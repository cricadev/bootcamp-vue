<script setup>
const firstName = ref("");
const lastName = ref("");
</script>
<template>
  <div>
    <v-card class="" max-width="500">
      <note-home v-model="firstName"></note-home>
      name: {{ firstName }}
    </v-card>
  </div>
</template>
