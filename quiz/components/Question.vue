<template>
  <div class="">
    <div class="question-container mt-5">
      <h1 class="question text-2xl mb-4">
        {{ question?.text }}
        {{ question }}
      </h1>
    </div>
    <div
      class="options-container"
      v-for="option in question.options"
      :key="option.id"
    >
      {{ option }}
      <div class="option flex mb-4 cursor-pointer">
        <p
          class="option-label bg-green-500 p-4 flex items-center justify-center"
        >
          {{ option?.text }}
        </p>
        <div class="option-value bg-white w-full text-2xl p-4">
          <p>NaCL</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { question } = defineProps(["question"]);
</script>
<style scoped></style>
