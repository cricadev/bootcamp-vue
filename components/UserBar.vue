<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2" v-if="props.user">
        {{ props.user.username }}
      </a-typography-title>
      <div class="iserbar-container" v-else>
        <a-typography-title :level="2"> User not found </a-typography-title>
      </div>
      <div class="" v-if="user">
        <UploadPhotoModal
          v-if="user && username === user.username"
          :addNewPost="addNewPost"
        ></UploadPhotoModal>
        <div class="" v-else>
          <a-button v-if="!props.isFollowing" @click="followUser"
            >Follow</a-button
          >
          <a-button v-else @click="unfollowUser"> Following</a-button>
        </div>
      </div>
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
const props = defineProps([
  "user",
  "userInfo",
  "addNewPost",
  "isFollowing",
  "updateIsFollowing",
]);
const route = useRoute();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const username = route.params.slug;
const client = useSupabaseClient();
const followUser = async () => {
  props.updateIsFollowing(true);
  await client.from("followers_following").insert({
    follower_id: user.value.id,
    following_id: props.user.id,
  });
};
const unfollowUser = async () => {
  props.updateIsFollowing(false);

  await client
    .from("followers_following")
    .delete()
    .eq("follower_id", user.value.id)
    .eq("following_id", props.user.id);
};
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
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 10px;
}
.bottom-content h5 {
  margin: 0;
  padding: 10px;
  background-color: #f0f2f5;
}
.top-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>
