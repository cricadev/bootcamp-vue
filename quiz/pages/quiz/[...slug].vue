<template>
  <div>
    <QuizHeader :question-status="questionStatus"></QuizHeader>
    <Question :question="quiz.questions[currentQuestionIndex]"></Question>
  </div>
</template>

<script setup>
import quizes from "../../quizes.json";
const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id == quizId);
const currentQuestionIndex = ref(0);
const questionStatus = `${currentQuestionIndex.value}/${quiz?.questions.length}`;
</script>

<style scoped>
.completion {
  width: 33%;
  height: 100%;
  background-color: green;
}
</style>
