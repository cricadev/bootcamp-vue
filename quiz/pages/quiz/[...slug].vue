<template>
  <div class="mx-16">
    <QuizHeader
      :question-status="questionStatus"
      :barPercentage="barPercentage"
    ></QuizHeader>
    <Question
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @select-option="onOptionSelected"
    ></Question>
    <result
      :quizQuestionLength="quiz.questions.length"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      v-else
    ></result>

    {{ numberOfCorrectAnswers }}
  </div>
</template>

<script setup>
/* import */
import q from "../../quizes.json";
/* variables */
const route = useRoute();
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const quizes = ref(q);
const quizId = parseInt(route.params.slug[0]);
const quiz = q.find((quiz) => quiz.id === quizId);
const showResults = ref(false);
/* methods & comptued */
const questionStatus = computed(() => {
  return `${
    currentQuestionIndex.value >= 3
      ? currentQuestionIndex.value
      : currentQuestionIndex.value + 1
  }  / ${quizes.value.length}`;
});
const barPercentage = computed(() => {
  return `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
};
</script>

<style scoped></style>
