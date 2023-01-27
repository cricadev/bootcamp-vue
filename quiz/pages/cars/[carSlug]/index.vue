<template>
  <div v-if="car">
    <h2>
      {{ car.name }}
    </h2>
    <p>
      {{ car.year }}
    </p>
    <p>
      {{ car.price }}
    </p>
    <NuxtLink :to="`${$route.fullPath}/contact`">contact</NuxtLink>
    <LazyNuxtPage></LazyNuxtPage>
  </div>
  <div class="" v-else>
    <h1>car not found</h1>
  </div>
</template>

<script setup lang="ts">
const cars = useCars();
const route = useRoute();

const car = cars.find((c) => c.id === parseInt(route.params.carSlug));
</script>

<style scoped></style>
