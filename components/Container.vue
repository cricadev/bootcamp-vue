<template>
  <div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
}
</style>
