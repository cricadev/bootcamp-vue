<script setup>
const posts = ref([]);
const client = useSupabaseClient();
const route = useRoute();
const user = ref(null);
const loading = ref(false);
const username = route.params.slug;

const addNewPost = (post) => {
  posts.value.unshift(post);
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
  loading.value = false;
};
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
        :user-info="{
          posts: 4,
          followers: 10,
          following: 342,
        }"
        :addNewPost="addNewPost"
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
