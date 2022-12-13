<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://i.ibb.co/mJZkvNB/avatar-crica.jpg"
        title="Cristian Casallas"
        subtitle="cricadev@gmail.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <nuxt-link to="/">
        <v-list-item
          prepend-icon="mdi-folder"
          title="My Notes"
          value="mynotes"
        ></v-list-item>
      </nuxt-link>
      <nuxt-link to="/shared">
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
      </nuxt-link>

      <nuxt-link to="/favorites">
        <v-list-item
          prepend-icon="mdi-heart"
          title="Favorites"
          value="favorites"
        ></v-list-item
      ></nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>
