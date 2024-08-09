// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ["@nuxt/ui", "@nuxt/fonts"],
  css: ["normalize.css/normalize.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:400,700",
        },
      ],
    },
  },
});
