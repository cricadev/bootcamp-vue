<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2" v-if="props.user">
        {{ props.user.username }}
      </a-typography-title>
      <div class="iserbar-container" v-else>
        <a-typography-title :level="2"> User not found </a-typography-title>
      </div>
      <UploadPhotoModal
        v-if="user && username === user.username"
        :addNewPost="addNewPost"
      ></UploadPhotoModal>
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
import { storeToRefs } from "pinia";
const props = defineProps(["user", "userInfo", "addNewPost"]);
const route = useRoute();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const username = route.params.slug;
</script>
<style scoped>
.userbar-container {
  display: flex;
  padding-bottom: 75px;
  gap: 20px;
  flex-direction: column;
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
.top-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>
