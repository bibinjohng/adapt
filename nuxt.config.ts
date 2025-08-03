// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],
  ssr: false,
  app: {
    baseURL: '/', // change if you're deploying in a subfolder
  },
  nitro: {
    preset: 'static',
    output: {
      dir: 'dist'
    }
  }
});