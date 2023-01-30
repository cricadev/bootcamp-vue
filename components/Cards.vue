<template>
  <div class="timeline-container">
    <Card v-for="post in posts" :key="post.id" :post="post"></Card>
    <Observer v-if="posts.length" @intersect="fetchNextSet"></Observer>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { post } from "@supabase/storage-js/dist/module/lib/fetch";
const client = useSupabaseClient();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const posts = ref([]);
const postOwner = ref([]);
const lastCardIndex = ref([2]);
const reachEnd = ref(false);
const ownersIds = ref([]);
const fetchData = async () => {
  const { data: followings } = await client
    .from("followers_following")
    .select("following_id")
    .eq("follower_id", user.value.id);

  console.log(followings);

  ownersIds.value = followings.map((following) => following.following_id);

  const { data } = await client
    .from("posts")
    .select()
    .in("owner_id", ownersIds.value)
    .range(0, lastCardIndex.value - 1)
    .order("created_at", { ascending: false });
  posts.value = data;
};

const fetchNextSet = async () => {
  if (!reachEnd.value) {
    const { data } = await client
      .from("posts")
      .select()
      .in("owner_id", ownersIds.value)
      .range(lastCardIndex.value, lastCardIndex.value + 2)
      .order("created_at", { ascending: false });

    posts.value = [...posts.value, ...data];
    lastCardIndex.value += 3;
    if (!data.length) {
      reachEnd.value = true;
    }
  }
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped></style>
