<template>
  <div>
    <header class="mt-5">
      <h2 class="text-2xl">Question 1/3</h2>
      <div class="bar w-72 h-12 border-green-500 border-[2px]">
        <div class="completion"></div>
      </div>
    </header>
    <div class="">
      <Question :question="quiz?.questions[currentQuestionIndex]"></Question>
    </div>
  </div>
</template>

<script setup lang="ts">
import quizes from "../../../quizes.json";
const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id == quizId);
const currentQuestionIndex = ref(0);
</script>

<style scoped>
.completion {
  width: 33%;
  height: 100%;
  background-color: green;
}
</style>
