<template>
  <div class="gap-4 flex items-center bg-black text-white">
    <NuxtLink active-class="active" to="/">Home</NuxtLink>
    <NuxtLink active-class="active" to="/cars">cars</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.active {
  color: red;
}
</style>
