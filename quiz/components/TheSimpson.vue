<script setup>
import axios from "axios";

const quote = ref(null);

onBeforeMount(async () => {
  const response = await axios.get(
    "https://thesimpsonsquoteapi.glitch.me/quotes"
  );

  quote.value = response.data[0];
});
</script>
<template>
  <div>
    <h1>{{ quote.quote }}</h1>
    <h2>{{ quote.character }}</h2>
  </div>
</template>
<style scoped></style>
