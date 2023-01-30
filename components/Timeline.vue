<script setup>
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);
</script>
<template>
  <Container>
    <div class="" v-if="!loadingUser">
      <Cards v-if="user" />
      <LogInMessage v-else />
    </div>
    <div class="timeline-spinner" v-else>
      <a-spin size="large" />
    </div>
  </Container>
</template>
<style>
.timeline-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.timeline-container {
  background: aquamarine;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
