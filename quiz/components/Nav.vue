<template>
  <header
    class="container flex items-center justify-center gap-4 text-white bg-black"
  >
    <NuxtLink class="link" active-class="active" to="/">Home</NuxtLink>
    <NuxtLink class="link" active-class="active" to="/cars">cars</NuxtLink>
    <NuxtLink class="link" active-class="active" to="/anim"
      >animations</NuxtLink
    >
    <NuxtLink class="link" active-class="active" to="/api">API</NuxtLink>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.link {
  @apply text-white text-xl
   font-bold
   px-4
   py-2
   rounded
   hover:bg-white
   hover:text-black
   transition-all;
}
.active {
  @apply text-green-500;
}
</style>
