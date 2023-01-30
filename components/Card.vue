<script setup>
const props = defineProps(["post"]);
const { VITE_SAPO_PHOTO_URL } = import.meta.env;
</script>
<template>
  <a-card hoverable style="width: 240px" class="card">
    {{ envs }}
    <template #cover>
      <img alt="example" :src="`${VITE_SAPO_PHOTO_URL}${post.url}`" />
    </template>
    <a-card-meta :title="post.username">
      <template #description> {{ post.caption }} {{ post.username }} </template>
    </a-card-meta>
  </a-card>
</template>
<style scoped>
.card {
  margin-bottom: 10px;
}
</style>
