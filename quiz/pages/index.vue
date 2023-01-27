<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      
      <card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></card>
    </div>
  </div>
</template>

<script setup lang="ts">
import q from "../quizes.json";
const quizes = ref(q);
const search = ref("");
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped></style>
