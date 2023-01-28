<template>
  <main class="text-white bg-black/80">
    <h1>HERO</h1>
    <Suspense>
      <template #default>
        <KeepAlive>
          <Component :is="show ? 'RickAndMorty' : 'TheSimpson'" />
        </KeepAlive>
      </template>
      <template #callback>
        <div class="cards-spinner h-[700px] bg-black/80">
          <n-space>
            <n-spin size="large" />
          </n-space>
        </div>
      </template>
    </Suspense>
  </main>
</template>
<script setup>
import { NSpin, NSpace } from "naive-ui";
const show = ref(true);
</script>
<style scoped></style>
