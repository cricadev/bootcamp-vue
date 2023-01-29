<template>
  <div>
    {{ user }}
    <a-button type="primary" @click="showModal">
      {{ title }}
    </a-button>
    <a-modal
      class="modal"
      v-model:visible="visible"
      :title="title"
      @ok="handleOk"
    >
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          :disabled="loading"
          >Submit</a-button
        >
      </template>

      <div class="input-container" v-if="!loading">
        <a-input
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <a-input v-model:value="userCredentials.email" placeholder="Email" />
        <a-input
          v-model:value="userCredentials.password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="spinner" v-else>
        <a-spin size="large" />
      </div>
      <a-typography-text v-if="errorMessage" type="danger">
        {{ errorMessage }}
      </a-typography-text>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
const props = defineProps(["isLogin"]);
const visible = ref<boolean>(false);
const userStore = useUserStore();
const { errorMessage, loading, user } = storeToRefs(userStore);

const userCredentials = reactive({
  username: "",
  email: "",
  password: "",
});
const showModal = () => {
  visible.value = true;
};
const clearUserCredentialsInput = () => {
  userCredentials.email = "";
  userCredentials.password = "";
  userCredentials.username = "";
  userStore.clearErrorMessage();
};
const handleOk = async (e: MouseEvent) => {
  if (props.isLogin) {
    await userStore.handleLogin({
      email: userCredentials.email,
      password: userCredentials.password,
    });
  } else {
    await userStore.handleSignup(userCredentials);
  }
  await userStore.handleSignup(userCredentials);

  if (user.value) {
    visible.value = false;
    clearUserCredentialsInput();
  }
};
const handleCancel = () => {
  clearUserCredentialsInput();
  visible.value = false;
};
const title = props.isLogin ? "Log in" : "Sign up";
</script>
<style scoped>
.modal input {
  margin-top: 10px;
}
.input-container {
  height: 120px;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>
