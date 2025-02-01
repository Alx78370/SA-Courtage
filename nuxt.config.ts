// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "node:process";

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Sylvie Allard - Courtier immobilier',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { hid: 'description', name: 'description', content: 'Sylvie Allard, courtier immobilier en région parisienne, vous accompagne pour vos crédits immobiliers (résidence principale ou secondaire, investissement locatif, rachat de crédit, rachat de soulte) et votre assurance emprunteur. Simplifiez vos démarches et obtenez les meilleures offres adaptées à vos besoins.' },
        { hid: 'author', name: 'author', content: 'Alexis Vachet' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/Logo_capture_proche.webp' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/Logo_capture_proche.webp' },
      ]
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@nuxt/icon", "nuxt-calendly", "@formkit/nuxt", "nuxt-mail", "@nuxt/eslint", '@vueuse/nuxt'],

  primevue: {
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

  compatibilityDate: '2025-02-01',
});