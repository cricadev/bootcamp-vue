<template>
  <main class="p-16">
    <!--<Transition name="color">
      <h1 v-if="showText">Hello World!</h1>
      <h1 v-else>Goodby world!</h1>
    </Transition>
    <Transition name="text">
      <button @click="showText = !showText" class="p-4 m-10 shadow-lg">
        <span v-if="!showText"> Show Text </span>
        <span v-else> Hide Text </span>
      </button></Transition
    >-->
    <div class="container max-w-xs mx-auto">
      <input
        type="text"
        class="w-full p-3 border-black rounded-md shadow-lg"
        placeholder="Add person to invite..."
        v-model="nameInput"
        @keypress.enter="addInvitee"
      />
      <ul class="inline p-0 m-0 list-none">
        <TransitionGroup name="invitees">
          <li
            class="w-full px-2 py-1 mt-4 text-center list-none rounded-md shadow-md"
            v-for="name in names"
            :key="name"
            @click="removeInvitee(name)"
          >
            {{ name }}
          </li>
        </TransitionGroup>
      </ul>
    </div>
  </main>
</template>
<script setup>
const names = ref(["Selena Damo", "Kevin Johnstone", "John Doe"]);
const nameInput = ref("");

const addInvitee = () => {
  names.value.unshift(nameInput.value);
  nameInput.value = "";
};
const removeInvitee = (name) => {
  names.value = names.value.filter((n) => n !== name);
};
</script>
<style scoped lang="scss">
/*  transition group*/
.invitees-enter-from {
  transform: translateX(-100%);
}
.invitees-enter-to {
  transform: translateX(0%);
}
.invitees-leave-from {
  transform: scale(1);
}
.invitees-leave-to {
  transform: scale(0);
}
.invitees-enter-active {
  transition: all 0.5s ease;
}
.invitees-leave-active {
  transition: all 0.5s ease;
}
.invitees-move {
  transition: all 0.5s ease;
}
</style>
