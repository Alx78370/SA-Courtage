// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "node:process";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "nuxt-calendly",
    "@formkit/nuxt",
    "nuxt-mail",
    "@nuxt/eslint",
  ],
  primevue: {
    /* Configuration */
  },
  formkit: {
    autoImport: true,
  },
  runtimeConfig: {
    mail: {
      message: {
        to: process.env.VITE_MAIL_TO,
      },
      smtp: {
        host: process.env.VITE_SMTP_HOST,
        port: process.env.VITE_SMTP_PORT,
        auth: {
          user: process.env.VITE_MAIL_USER,
          pass: process.env.VITE_MAIL_PASS,
        },
      },
    },
  },
});
