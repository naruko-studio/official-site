// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/test-utils", "@nuxt/eslint"],
  compatibilityDate: "2024-11-04",
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/official-site/" : "/",
    buildAssetsDir: "/static/",
    cdnURL: "https://naruko.studio/",
  },
  css: ["~/assets/css/main.min.css"],
})
