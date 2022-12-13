<template>
  <v-form @submit.prevent="onSubmit">
    <v-text-field v-model="formData.name" label="Name" />
    <v-text-field v-model="formData.email" label="Email" />
    <v-text-field v-model="formData.message" label="Message" />
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>

  <v-card v-if="formData.name" :key="formData.name">
    <v-card-title>{{ formData.name }}</v-card-title>
    <v-card-subtitle>{{ formData.email }}</v-card-subtitle>
    <v-card-text>{{ formData.message }}</v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const onSubmit = () => {
  // do something with the form data
};
</script>
