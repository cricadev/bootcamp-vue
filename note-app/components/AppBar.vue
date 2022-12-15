<script setup>
const firstName = ref("");
</script>
<template>
  <v-app-bar color="grey-lighten-2" title="NoteGod">
    <v-btn icon="mdi-plus">
      <ModalCreateNote :modelValue="firstName"></ModalCreateNote>
    </v-btn>
  </v-app-bar>
</template>
