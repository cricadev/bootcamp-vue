<script setup></script>
<template>
  <div class="container">
    <NuxtLayout>
      <Nav />
      <NuxtPage
        :transition="{
          name: 'bounce',
          mode: 'out-in',
        }"
      ></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.5s ease;
}
.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.bounce-enter-to,
.bounce-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
</style>
