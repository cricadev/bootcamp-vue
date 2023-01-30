<script setup>
import { post } from "@supabase/storage-js/dist/module/lib/fetch";
import { storeToRefs } from "pinia";
const posts = ref([]);
const client = useSupabaseClient();
const route = useRoute();
const user = ref(null);
const loading = ref(false);
const userInfo = reactive({ posts: null, followers: null, following: null });
const username = route.params.slug;
const isFollowing = ref(false);

const addNewPost = (post) => {
  posts.value.unshift(post);
};
const userStore = useUserStore();
const { user: loggedInUser } = storeToRefs(userStore);
useHead({
  title: loggedInUser.value?.username,
  meta: [
    { name: "description", content: "This is where your description goes..." },
  ],
});
const updateIsFollowing = (follow) => {
  isFollowing.value = follow;
};

const fetchData = async () => {
  const { data: userData } = await client
    .from("users")
    .select()
    .eq("username", username)
    .single();
  if (!userData) {
    loading.value = false;
    return (user.value = null);
  }
  user.value = userData;
  const { data: postsData } = await client
    .from("posts")
    .select()
    .eq("owner_id", user.value.id);
  posts.value = postsData;

  const followerCount = await fetchFollowersCount();
  const followingCount = await fetchFollowingCount();

  userInfo.followers = followerCount;
  userInfo.following = followingCount;
  userInfo.posts = posts.value.length;

  loading.value = false;
};

const fetchFollowersCount = async () => {
  const { data, count } = await client
    .from("followers_following")
    .select("*", { count: "exact" })
    .eq("following_id", user.value.id);
  return count;
};
const fetchFollowingCount = async () => {
  const { data, count } = await client
    .from("followers_following")
    .select("*", { count: "exact" })
    .eq("follower_id", user.value.id);
  return count;
};
const fetchIsFollowing = async () => {
  if (loggedInUser.value && loggedInUser.value.id !== user.value.id) {
    const { data } = await client
      .from("followers_following")
      .select()
      .eq("follower_id", loggedInUser.id)
      .eq("following_id", user.value.id)
      .single();

    if (data) isFollowing.value = true;
  }
};

watch(loggedInUser, () => {
  fetchIsFollowing();
});

onMounted(() => {
  fetchData();
});
</script>
<template>
  <Container>
    <Nav />

    <div class="profile-container" v-if="!loading">
      <UserBar
        :key="$route.params.username"
        :user="user"
        :user-info="userInfo"
        :addNewPost="addNewPost"
        :isFollowing="isFollowing"
        :updateIsFollowing="updateIsFollowing"
      ></UserBar>
      <ImageGallery :posts="posts"></ImageGallery>
    </div>
    <div class="spinner" v-else>
      <a-spin size="large" />
    </div>
  </Container>
</template>
<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
.profile-container {
  background: aquamarine;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
