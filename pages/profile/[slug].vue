<script setup></script>
<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="Cricadev"
        :user-info="{
          posts: 4,
          followers: 10,
          following: 342,
        }"
      ></UserBar>
      <ImageGallery
        :posts="[
          {
            id: 1,
            image: 'https://picsum.photos/200/300',
          },
        ]"
      ></ImageGallery>
    </div>
  </Container>
</template>
<style scoped>
.profile-container {
  background: aquamarine;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
