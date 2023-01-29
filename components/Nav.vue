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
          <div class="right-content" v-if="!user">
            <auth-modal :is-login="false"></auth-modal>
            <auth-modal :is-login="true"></auth-modal>
          </div>
          <div class="right-content" v-else>
            <a-button type="primary">Profile</a-button>
            <a-button type="primary" @click="handleLogout">Log out</a-button>
          </div>
          <div class="spinner" v-else>
            <a-spin size="large" />
          </div>
        </div>
      </Container>
    </a-layout-header>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
const serachUsername = ref("");
const isAuthenticated = ref(false);
const router = useRouter();
const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);
const onSearch = () => {
  if (serachUsername.value) {
    router.push(`/profile/${serachUsername.value}`);
    serachUsername.value = "";
  }
};
const handleLogout = async () => {
  await userStore.handleLogout();
};
</script>

<style scoped lang="scss">
.ant-layout-header {
  @media (max-width: 1000px) {
    height: 100%;
  }
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
.content {
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
