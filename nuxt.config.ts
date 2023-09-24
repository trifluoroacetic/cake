// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    provider: {
      type: 'authjs'
    }
  },
  devtools: {
    enabled: true,
  },
  components: [
  ],
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@sidebase/nuxt-auth'
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: false, 
    }
  }
})
