// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/icon','@nuxt/image'],
    icon: {
    mode: 'css',
    cssLayer: 'base'
  },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})