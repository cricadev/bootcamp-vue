<template>
  <div>
    <header class="mt-5">
      <h2 class="text-2xl">Question {{ questionStatus }}</h2>
      <div class="bar w-72 h-12 border-green-500 border-[2px]">
        <div class="completion" :style="{ width: barPercentage }"></div>
      </div>
    </header>
  </div>
</template>
<script setup>
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>
<style>
.completion {
  height: 100%;
  background-color: green;
}
</style>
