// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  router: {
    routes: [
      {
        name: "car",
        path: "/cars/:id",
        component: "~/pages/cars/[carSlug]/index.vue",
      },
    ],
  },
});
