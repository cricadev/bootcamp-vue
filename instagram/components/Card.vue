<script setup>
const props = defineProps(["post"]);
</script>
<template>
  <a-card hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="post.avatar" />
    </template>
    <a-card-meta :title="post.username">
      <template #description> {{ post.caption }} </template>
    </a-card-meta>
  </a-card>
</template>
<style scoped>
.card {
  margin-bottom: 10px;
}
</style>
