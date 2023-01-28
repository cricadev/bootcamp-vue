<template>
  <div class="rounded-sm mt-1 text-center p-1 text-white">
    {{ invitee.name }}
    {{ invitee.gender }}
  </div>
</template>

<script setup lang="ts">
enum GENDER {
  MALE,
  FEMALE,
}
defineProps<{
  invitee: {
    id: number;
    name: string;
    gender: GENDER;
  };
}>();
</script>

<style scoped></style>
