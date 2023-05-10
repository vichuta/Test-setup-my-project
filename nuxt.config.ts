// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // target: 'static',
  // buildModules: ['@nuxt/image'],
  // modules: ['@nuxt/image'],
  modules: ['@nuxt/image-edge'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
