// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/device',
    '@vee-validate/nuxt',
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
});
