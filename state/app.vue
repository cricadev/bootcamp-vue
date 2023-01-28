<template>
  <main
    class="w-screen h-screen grid place-items-center"
    :style="{ background: `rgb(${color.red},${color.green}, ${color.blue})` }"
  >
    <div class="flex items-center flex-col gap-8">
      <div class="">
        <input type="number" placeholder="red" v-model="color.red" />
        <input type="number" placeholder="green" v-model="color.green" />
        <input type="number" placeholder="blue" v-model="color.blue" />
      </div>
      <button
        class="text-white mx-4 bg-white/40 py-2 px-8 rounded-md"
        @click="selectRandomColor"
      >
        Select random color
      </button>
      <span class="text-white"> {{ numbers }} / {{ doubleNumber }} </span>
      <button
        class="text-white mx-4 bg-white/40 py-2 px-8 rounded-md"
        @click="addNumber(2)"
      >
        Add Number
      </button>
      <span> {{ filterNum(20) }} </span>
    </div>
  </main>
</template>
<script setup>
const { numbers, addNumber, doubleNumber, filterNum } = useNumbersStore();
const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});
const selectRandomColor = () => {
  color.red = Math.floor(Math.random() * 255);
  color.green = Math.floor(Math.random() * 255);
  color.blue = Math.floor(Math.random() * 255);
};
</script>
