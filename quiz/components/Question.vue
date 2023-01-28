<template>
  <div class="">
    <div class="mt-5 question-container">
      <h1 class="mb-4 text-2xl question">
        {{ question?.text }}
      </h1>
    </div>
    <div
      class="options-container"
      v-for="option in question.options"
      :key="option.id"
    >
      <div
        class="flex mb-4 cursor-pointer option"
        @click="emitSelectedOption(option.isCorrect)"
      >
        <p
          class="flex items-center justify-center p-4 bg-green-500 option-label"
        >
          {{ option?.label }}
        </p>
        <div class="w-full p-4 text-2xl option-value bg-black/10">
          <p>{{ option?.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);
const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
console.log(question);
</script>
<style scoped></style>
