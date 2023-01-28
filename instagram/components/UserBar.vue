<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2"> {{ props.username }} </a-typography-title>
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5">
        {{ props.userInfo.posts }} Posts
      </a-typography-title>
      <a-typography-title :level="5"
        >{{ props.userInfo.followers }} Followers
      </a-typography-title>
      <a-typography-title :level="5"
        >{{ props.userInfo.following }} Following</a-typography-title
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["username", "userInfo"]);
</script>
<style scoped>
.userbar-container {
  display: flex;
  padding-bottom: 75px;
  gap: 20px;
}
.bottom-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.bottom-content h5 {
  margin: 0;
  padding: 0;
}
</style>
