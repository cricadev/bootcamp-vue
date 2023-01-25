<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-6xl font-bold">NoteGod</h1>
      <Icon
        name="material-symbols:add"
        class="p-2 bg-black text-white rounded-full w-10 h-10"
        @click="showModal = !showModal"
      ></Icon>
    </div>
    <div class="container flex flex-wrap gap-6">
      <div
        class="note"
        v-for="note in notes"
        :key="note.id"
        :style="{ backgroundColor: note.bgColor }"
      >
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <span> {{ note.date.toLocaleDateString("en-US") }} </span>
      </div>
    </div>
    <div class="overlay" v-if="showModal">
      <div class="modal w-1/2 h-1/2 bg-white">
        <h1 class="text-4xl font-bold">Create Note</h1>
        <div class="flex flex-col gap-4">
          <input type="text" placeholder="Title" v-model="noteTitle" />
          <textarea placeholder="Content" v-model="noteContent"></textarea>
          <span> {{ errorMessage }} </span>
          <button class="bg-black text-white rounded-md" @click="addNote">
            Add note <Icon name="material-symbols:add"></Icon>
          </button>

          <button
            class="bg-red-600 rounded-md text-white"
            @click="showModal = false"
          >
            Close
            <Icon name="material-symbols:close"></Icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const showModal = ref(false);
const notes = ref([]);
const noteContent = ref("");
const noteTitle = ref("");
const errorMessage = ref("");
const addNote = () => {
  if (noteTitle.value.trim.length < 5) {
    errorMessage.value = "";
    return (errorMessage.value = "Title must be at least 5 characters long");
  }
  if (noteContent.value.trim.length < 10) {
    errorMessage.value = "";

    return (errorMessage.value = "Content must be at least 10 characters long");
  } else {
    notes.value.push({
      id: Math.floor(Math.random() * 10000000),
      title: noteTitle.value,
      content: noteContent.value,
      date: new Date(),
      bgColor: getRandomColor(),
    });
    showModal.value = false;
    noteContent.value = "";
    noteTitle.value = "";
    errorMessage.value = "";
  }
};
function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
</script>
<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slide-in 0.5s ease-in-out;
  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
