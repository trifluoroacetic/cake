import { aliases, mdi } from "vuetify/iconsets/mdi";

import { config } from "dotenv";
config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // like env
    DB_NAME: process.env.DB_NAME ?? "CAKE",
    DB_URL: process.env.DB_URL ?? "mongodb://127.0.0.1:27017/",
    public: {
      DOMAIN: process.env.DOMAIN ?? "http://127.0.0.1:3000/",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      noscript: [{ innerHTML: "This website requires JavaScript." }],
      titleTemplate: "CakeSchool - %s",
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },  
  auth: {
    provider: {
      type: 'authjs'
    }
  },
  // todo Disable this for production
  devtools: {
    enabled: process.env.ENVIRONMENT === "production" ? false : true,
  },
  modules: ["nuxt-vuetify"],
  ssr: true, // ssr is enabled by default
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true, static: true },
    // Product page generated on-demand, revalidates in background
    // '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    // '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    // '/admin/**': { ssr: false },
    // Add cors headers on API routes
    "/api/**": { cors: true },
    // Redirects legacy urls
    // '/old-page': { redirect: '/new-page' }
  },
  components: [
  ],
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@sidebase/nuxt-auth'
  ],
  vuetify: {
    icons: {
      defaultSet: "mdi",
      aliases: aliases,
      sets: {
        mdi: mdi,
      },
    },
    theme: {
      defaultTheme: "cakeTheme",
      themes: {
        cakeTheme: {
          dark: true,
          colors: {
            background: "#222222", // Background-Color (dunkler)
            surface: "#525252", // Form-Background-Color (heller)
            primary: "#207178", // Darker-Dolphin-Color
            secondary: "#50a4ab", // Lighter-Dolphin-Color
            error: "#ef2d13", // Rot
            info: "#2196f3", // Grün
            success: "#19c719", // Helles Blau
            warning: "#fb8200", // Orange
          },
        },
      },
    },
  },
});
