// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    // pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'MIMAR',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `/favicon.png`,
        },
      ],
      script: [
        // {
        //   src: 'https://code.responsivevoice.org/responsivevoice.js?key=WHfxLRwD',
        // },
        // {
        //   src: 'https://www.googletagmanager.com/gtag/js?id=UA-172842766-1',
        //   defer: true,
        // },
        // START WWW.UZ TOP-RATING
        {
          type: 'text/javascript',
          innerHTML: `top_js = '1.0'
            top_r =
              'id=44502&r=' +
              escape(document.referrer) +
              '&pg=' +
              escape(window.location.href)
            document.cookie = 'smart_top=1; path=/'
            top_r += '&c=' + (document.cookie ? 'Y' : 'N')
          `,
        },
        {
          type: 'text/javascript',
          innerHTML: `top_js = '1.0'
            top_js = '1.1'
            top_r += '&j=' + (navigator.javaEnabled() ? 'Y' : 'N')
          `,
        },
        {
          type: 'text/javascript',
          innerHTML: `top_js = '1.0'
            top_js = '1.2'
            top_r +=
              '&wh=' +
              screen.width +
              'x' +
              screen.height +
              '&px=' +
              (navigator.appName.substring(0, 3) == 'Mic'
                ? screen.colorDepth
                : screen.pixelDepth)
          `,
        },
        {
          type: 'text/javascript',
          innerHTML: `        
            top_js = '1.3'
          `,
        },
        // END WWW.UZ TOP-RATING
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logo.jpg',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'MIMAR',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'OUR EXPERIENCE IS YOUR SUCCESS',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: '/logo.jpg',
        },
        {
          hid: 'twitter:image:alt',
          property: 'twitter:image:alt',
          content: 'Twitter Image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'MIMAR',
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'OUR EXPERIENCE IS YOUR SUCCESS',
        },
        {
          property: 'og:image',
          content: '/logo.jpg',
        },
        {
          name: 'description',
          content: 'OUR EXPERIENCE IS YOUR SUCCESS',
        },
      ],
    },
  },

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