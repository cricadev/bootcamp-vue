<template>
  <div>
    <div class="flex">
      <NuxtLink
        class="text-violet-400 w-full shadow-lg m-4"
        :to="`/cars/${car.id}`"
        v-for="car in cars"
        :key="car.id"
      >
        {{ car.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import cars from "../../data/cars.json";

</script>
