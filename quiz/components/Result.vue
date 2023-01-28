<template>
  <div class="flex flex-col gap-12 px-0 py-24 text-center results">
    <p class="text-2xl">Your Results...</p>
    <h1 class="text-5xl font-bold">
      {{ numberOfCorrectAnswers }} / {{ quizQuestionLength }}
    </h1>
    <NuxtLink to="/" class="text-xl font-bold underline">Go Back</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
]);
</script>

<style scoped></style>
