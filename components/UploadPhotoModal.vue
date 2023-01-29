<template>
  <div>
    <a-button type="primary" @click="showModal">Upload Photo</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <div class="" v-if="!loading">
        <input
          type="file"
          accept=".jpeg,.png,.jpg"
          @change="handleUploadChange"
        />
        <a-input
          v-model:value="caption"
          placeholder="Caption..."
          :maxLength="50"
        ></a-input>
        <a-typography-text v-if="errorMessage" type="danger">
          {{ errorMessage }}
        </a-typography-text>
      </div>
      <div class="spinner" v-else>
        <a-spin size="large" />
      </div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
const visible = ref(false);
const caption = ref("");
const loading = ref(false);
const file = ref(null);
const errorMessage = ref("");
const client = useSupabaseClient();
const auth = useSupabaseAuthClient();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const showModal = () => {
  visible.value = true;
};
const props = defineProps(["addNewPost"]);
const handleOk = async (e: MouseEvent) => {
  console.log(e);
  loading.value = true;
  const fileName = Math.floor(Math.random() * 10000000000);
  let filePath;
  if (file.value) {
    const { data, error } = await client.storage
      .from("images")
      .upload("public/" + fileName, file.value);
    if (error) {
      loading.value = false;
      return (errorMessage.value = "Unable to upload");
    }
    filePath = data.path;
    await client.from("posts").insert({
      url: data.path,
      caption: caption.value,
      owner_id: user.value.id,
    });
  }
  props.addNewPost({
    url: filePath,
    caption: caption.value,
  });
  loading.value = false;
  visible.value = false;
  caption.value = "";
};
const handleUploadChange = (e) => {
  if (!e.target.files[0]) return;
  file.value = e.target.files[0];
};
</script>
<style scoped>
input {
  margin-top: 10px;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
</style>
