<script setup>
const cards = [
  {
    title: "Pre-fab homes",
    subtitle:
      "Numquam nemo magni tenetur nesciunt perferendis nobis dolor, quasi praesentium ipsa minus amet hic voluptate quod fugiat magnam sit, nostrum eaque quos doloribus eos aut pariatur quis necessitatibus facere! Nisi obcaecati velit error. ",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 12,
  },
];
</script>
<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            cover
          >
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
            <v-card-subtitle
              class="text-white"
              v-text="card.subtitle"
            ></v-card-subtitle>
          </v-img>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-heart"
            ></v-btn>

            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-bookmark"
            ></v-btn>

            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-share-variant"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
