<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <transition-group
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :data-index="index"
          :quiz="quiz"
        ></card>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import q from "../quizes.json";
import gsap from "gsap";
const quizes = ref(q);
const search = ref("");
const beforeEnter = (el) => {
  gsap.set(el, { y: 100, opacity: 0 });
};
const enter = (el) => {
  gsap.to(el, {
    y: 0,
    duration: 0.2,
    opacity: 1,
    delay: el.dataset.index * 0.3,
  });
};
const afterEnter = (el) => {
  gsap.set(el, { clearProps: "all" });
};
watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
/* card */
</style>
