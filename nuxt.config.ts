export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Cinzel: true,
      'Cinzel Decorative': true
    }
  },

  css: [
    '~/assets/main.css'
  ]
})
