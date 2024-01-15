// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3000",
    },
  },
  modules: [
    "@nuxtjs/device",
    "@vee-validate/nuxt",
    "@nuxt/test-utils/module",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lemon: true,
        },
      },
    ],
  ],
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      charset: "utf-8",
      title: "Sakura Sushi",
      bodyAttrs: {
        class: "bg-zinc-50 relative min-h-screen",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
});
