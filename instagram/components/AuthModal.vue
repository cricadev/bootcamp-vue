<template>
  <div>
    <a-button type="primary" @click="showModal">
      {{ title }}
    </a-button>
    <a-modal
      class="modal"
      v-model:visible="visible"
      :title="title"
      @ok="handleOk"
    >
      <a-input v-if="!isLogin" v-model:value="value" placeholder="Username" />
      <a-input v-model:value="value" placeholder="Email" />
      <a-input v-model:value="value" placeholder="Password" />
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps(["isLogin"]);
const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
const title = props.isLogin ? "Log in" : "Sign up";
</script>
<style scoped>
.modal input {
  margin-top: 10px;
}
</style>
