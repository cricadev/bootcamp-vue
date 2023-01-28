<template>
  <div>
    <a-layout-header class="header">
      <Container>
        <div class="nav-container">
          <div class="left-content">
            <nuxt-link to="/">Instagram</nuxt-link>
            <a-input-search
              v-model:value="serachUsername"
              placeholder="Search username"
              style="width: 200px"
              @search="onSearch"
            />
          </div>
          <div class="right-content" v-if="!isAuthenticated">
            <auth-modal :is-login="false"></auth-modal>
            <auth-modal :is-login="true"></auth-modal>
          </div>
          <div class="right-content" v-else>
            <a-button type="primary">Profile</a-button>
            <a-button type="primary">Log out</a-button>
          </div>
        </div>
      </Container>
    </a-layout-header>
  </div>
</template>

<script setup lang="ts">
const serachUsername = ref("");
const isAuthenticated = ref(false);
const router = useRouter();
const onSearch = () => {
  if (serachUsername.value) {
    router.push(`/profile/${serachUsername.value}`);
    serachUsername.value = "";
  }
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.left-content {
  display: flex;
  gap: 10px;
  align-items: center;
}
.right-content {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
