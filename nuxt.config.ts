// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n', 'nuxt-svgo'],

  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],

  svgo: {
    componentPrefix: 'i',
  },
  i18n: {
    locales: [
      { code: 'ru', language: 'ru-RU', file: 'ru.ts' },
      { code: 'uz', language: 'uz-UZ', file: 'uz.ts' },
      { code: 'en', language: 'en', file: 'en.ts' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'locale',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'en',
    },
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    customLinkComponent: 'NuxtLinkLocale',
  },

});