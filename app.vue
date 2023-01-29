<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup>
const userStore = useUserStore();
onMounted(() => {
  userStore.getUser();
});
</script>
