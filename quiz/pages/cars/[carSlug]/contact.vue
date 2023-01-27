<template>
  <div v-if="car">
    <h1 class="text-2xl text-black">contact info</h1>
    <p>{{ car?.contact.name }}</p>
    <p>{{ car?.contact.email }}</p>
    <p>{{ car?.contact.phone }}</p>
  </div>
  <div class="" v-else>
    <h1>Contact info not found</h1>
  </div>
</template>

<script setup lang="ts">
import cars from "../../../data/cars.json";
const route = useRoute();
const car = cars.find((c) => c.id === parseInt(route.params.carSlug));
</script>

<style scoped></style>
