// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      bodyAttrs: {
        class: "bg-zinc-100",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
