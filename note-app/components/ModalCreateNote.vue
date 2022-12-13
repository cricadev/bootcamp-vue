<script setup>
const dialog = ref(false);
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-plus"></v-btn>
      </template>
      <v-card>
        <v-toolbar flat color="blue-grey" dark>
          <v-toolbar-title>Submit a post</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-text-field
            variant="filled"
            label="Title"
            model-value="My new post"
          ></v-text-field>

          <v-textarea
            variant="filled"
            label="Text"
            model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
          ></v-textarea>

          <v-divider class="my-2"></v-divider>

          <v-item-group multiple selected-class="bg-purple">
            <div class="text-caption mb-2">Tags</div>
            <v-item v-for="n in 8" :key="n" v-slot="{ selectedClass, toggle }">
              <v-chip :class="selectedClass" @click="toggle">
                Tag {{ n }}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="success" variant="text" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
