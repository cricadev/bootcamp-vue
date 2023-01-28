<template>
  <div class="image-gallery-container">
    <img v-for="post in props.posts" :key="post.id" :src="post.image" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["posts"]);
</script>

<style scoped>
.image-gallery-container {
  background: aquamarine;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
img {
  margin: 5px;
  width: 200px;
  height: 200px;
}
</style>
