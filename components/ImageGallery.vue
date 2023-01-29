<template>
  <div class="image-gallery-container">
    <img
      v-for="post in props.posts"
      :key="post.id"
      :src="`https://asmkbntdwmmmtwtdcdjy.supabase.co/storage/v1/object/public/images/${post.url}`"
    />
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
  width: 500px;
  height: 500px;
  object-fit: cover;
}
</style>
