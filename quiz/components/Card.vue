<template>
  <div>
    <NuxtLink class="card" :to="`/quiz/${quiz.id}`">
      <img :src="quiz.img" alt="" />
      <div class="card-text">
        <h2>{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { quiz } = defineProps(["quiz"]);
const router = useRouter();
</script>

<style scoped>
/* CARD */

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}
</style>
