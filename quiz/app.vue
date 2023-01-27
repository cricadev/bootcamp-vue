<script setup></script>
<template>
  <div class="container">
    <NuxtLayout>
      <Nav />
    </NuxtLayout>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped lang="scss">
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
</style>
