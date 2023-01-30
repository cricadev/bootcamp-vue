<template>
  <div class="image-gallery-container">
    <div v-for="post in props.posts" :key="post.id">
      <img :src="`${VITE_SAPO_PHOTO_URL}${post.url}`" />

      <p>{{ post.caption }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["posts"]);
const { VITE_SAPO_PHOTO_URL } = import.meta.env;
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
  width: 500px;
  height: 500px;
  object-fit: cover;
}
</style>
