import { defineStore } from "pinia";
export const useNumbersStore = defineStore("numbers", {
  state: () => {
    return {
      numbers: [14, 15, 16, 17, 18, 19, 20],
    };
  },
  actions: {
    addNumber(number: number) {
      this.numbers.push(number);
    },
  },
  getters: {
    doubleNumber: (state) => {
      return state.numbers.map((number) => number * 2);
    },
    filterNum: (state) => (num: number) => {
      state.numbers.filter((number) => number > num);
    },
  },
});
