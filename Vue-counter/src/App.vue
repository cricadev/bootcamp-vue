<script setup>
import { ref } from "vue";
const count = ref(0);

const handleCount = (action) => {
  if (action == 0) {
    count.value--;
  } else if (action == 1) {
    count.value++;
  }
};
</script>
<template>
  <div class="mx-auto text-center">
    <v-alert color="yellow-darken-4" title="The current count is...">
      <v-btn @click="handleCount(0)" :disabled="count < 1"> - </v-btn>
      <span class="mx-4"> {{ count }} </span>
      <v-btn @click="handleCount(1)"> + </v-btn>
    </v-alert>
  </div>
</template>
