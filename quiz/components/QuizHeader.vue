<template>
  <div>
    <header class="mt-5">
      <h2 class="text-2xl">Question 1/3</h2>
      <div class="bar w-72 h-12 border-green-500 border-[2px]">
        <div class="completion"></div>
      </div>
    </header>
  </div>
</template>
<script setup>
const { questionStatus } = defineProps(["questionStatus"]);
</script>
