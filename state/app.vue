<template>
  <main
    class="h-screen flex items-center justify-center flex-col gap-8 bg-slate-300"
  >
    <h1 class="text-6xl font-bold text-center">People Invited to My Party</h1>
    <div class="input-container flex flex-col">
      <input
        type="text"
        placeholder="Name..."
        v-model="name"
        @keypress.enter="addInvitee"
      />
      <select name="gender" id="" v-model="gender" @keypress.enter="addInvitee">
        <option :value="GENDER.MALE">male</option>
        <option :value="GENDER.FEMALE">female</option>
      </select>
    </div>
    <div class="cards-container">
      <Cards
        v-for="invitee in invitees"
        :invitee="invitee"
        :key="invitee.id"
      ></Cards>
    </div>
    <div class="count">
      <p>Female {{ count.female }}</p>
      <p>male {{ count.male }}</p>
    </div>
  </main>
  <!-- <main
    class="w-screen h-screen grid place-items-center"
    :style="{ background: `rgb(${color.red},${color.green}, ${color.blue})` }"
  >
    <div class="flex items-center flex-col gap-8">
      <div class="">
        <input type="number" placeholder="red" v-model="color.red" />
        <input type="number" placeholder="green" v-model="color.green" />
        <input type="number" placeholder="blue" v-model="color.blue" />
      </div>
      <button
        class="text-white mx-4 bg-white/40 py-2 px-8 rounded-md"
        @click="selectRandomColor"
      >
        Select random color
      </button>
      <span class="text-white"> {{ numbers }} / {{ doubleNumber }} </span>
      <button
        class="text-white mx-4 bg-white/40 py-2 px-8 rounded-md"
        @click="addNumber(2)"
      >
        Add Number
      </button>
      <span> {{ filterNum(20) }} </span>
      <div class="">
        <h1>Guess my Favorite Number</h1>
        <input type="number" v-model="number" />
        <h2 v-if="number === 27" class="text-white text-2xl">You guess it!</h2>
      </div>
    </div>
  </main>-->
</template>
<script setup lang="ts">
import { GENDER, type Invitee } from "./types";
const name = ref("");
const gender = ref(GENDER.MALE);
const invitees = ref<Invitee[]>([]);
const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 100000),
      name: name.value,
      gender: gender.value,
    });
    name.value = "";
    gender.value = GENDER.MALE;
  }
};
const count = computed<{
  female: number;
  male: number;
}>(() =>
  invitees.value.reduce(
    (countObj, invitee) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...countObj,
          male: countObj.male + 1,
        };
      }
      return {
        ...countObj,
        female: countObj.female + 1,
      };
    },
    {
      male: 0,
      female: 0,
    }
  )
);

/*
const { numbers, addNumber, doubleNumber, filterNum } = useNumbersStore();
const number = ref(0);
const color = reactive({
  red: 0,
  green: 0,
  blue: 0,
});
const selectRandomColor = () => {
  color.red = Math.floor(Math.random() * 255);
  color.green = Math.floor(Math.random() * 255);
  color.blue = Math.floor(Math.random() * 255);
};
let name = "Laith";
let age = 25;
let sex = false;
let occupation: string;

age = 26;
sex = true;
enum GENDER {
  FEMALE,
  MALE,
  NONBINARY,
}

interface Employee {
  name: string;
  age: number;
  sex: GENDER;
  occupation?: string;
}
const employee: Employee = {
  name: "Laith",
  age: 25,
  sex: GENDER.FEMALE,
};
employee.occupation = "Web Developer";*/
</script>
<style scoped>
input,
select {
  @apply w-full p-1 mb-1;
}
</style>
