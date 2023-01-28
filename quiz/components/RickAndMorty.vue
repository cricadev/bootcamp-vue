<template>
  <div>
    <h1>Rick and Morty cards</h1>
    <div class="flex gap-4">
      <NButton type="primary" @click="page--">Prev</NButton>
      <NButton type="primary" @click="page++">Next</NButton>
    </div>

    <div class="container">
      <div class="grid grid-cols-3 gap-4">
        <n-card
          :title="character.name"
          v-for="character in characters"
          :key="character.id"
        >
          <template #cover>
            <img :src="character.image" />
            <p>{{ character.species }}</p>
            <p>{{ character.status }}</p>
          </template>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { NButton } from "naive-ui";
import { NCard } from "naive-ui";
const characters = ref(null);
const page = ref(0);

onMounted(async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  characters.value = data.results;
});
watch(page, async () => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page.value}`
  );
  characters.value = data.results;
});
</script>

<style scoped lang="scss">
.n-card {
  max-width: 300px;
}
</style>
