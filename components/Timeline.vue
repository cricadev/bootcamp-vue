<script setup>
const data = [
  {
    id: 1,
    username: "cricadev",
    avatar:
      "https://avatars.githubusercontent.com/u/62143751?s=400&u=203d03a71acb1e7829159cc52c689589051ad40f&v=4",
    caption: "Never stop learning",
  },
  {
    id: 2,
    username: "Wes Bos",
    avatar: "https://avatars.githubusercontent.com/u/176013?v=4",
    caption: "I love JavaScript",
  },
  {
    id: 3,
    username: "Scott Tolinski",
    avatar: "https://avatars.githubusercontent.com/u/669383?v=4",
    caption: "I love React",
  },
];
</script>
<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post"></Card>
    </div>
  </Container>
</template>
<style scoped>
.timeline-container {
  background: aquamarine;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
