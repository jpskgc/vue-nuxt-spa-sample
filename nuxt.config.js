export default {
  target: 'static',
  ssr: false,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  typescript: {
    typeCheck: {
      eslint: {
        files: './src/**/*.{ts,js,vue}'
      }
    }
  }
}  