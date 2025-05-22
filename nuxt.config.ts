import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig(async () => {
  // 🔥 API dan dynamic route larni olish
  // const res = await fetch('https://admin.mimarfzc.com/api/products');
  // const posts = await res.json();

  // const projectRoutes = posts?.map((post: any) => `/projects/${post.slug}`);

  return {
    ssr: false,

    app: {
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
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'format-detection', content: 'telephone=no' },
          { name: 'description', content: 'OUR EXPERIENCE IS YOUR SUCCESS' },
          { hid: 'og:title', property: 'og:title', content: 'MIMAR' },
          { hid: 'og:description', property: 'og:description', content: 'OUR EXPERIENCE IS YOUR SUCCESS' },
          { hid: 'og:image', property: 'og:image', content: '/favicon.png' },
          { hid: 'twitter:title', property: 'twitter:title', content: 'MIMAR' },
          { hid: 'twitter:description', property: 'twitter:description', content: 'OUR EXPERIENCE IS YOUR SUCCESS' },
          { hid: 'twitter:image', property: 'twitter:image', content: '/favicon.png' },
          { hid: 'twitter:image:alt', property: 'twitter:image:alt', content: 'Twitter Image' },
        ],
      },
    },

    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },

    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/eslint',
      '@pinia/nuxt',
      '@nuxtjs/i18n',
      'nuxt-svgo',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
    ],

    // ✅ PRERENDER (generate) uchun dynamic route larni qo‘shish
    nitro: {
      prerender: {
        crawlLinks: true,
      },
    },

    // ✅ SITEMAP uchun dynamic route lar
    sitemap: {
      hostname: 'https://mimarfzc.com',
      gzip: true,
      exclude: [],
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },

    },

    css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],

    svgo: {
      componentPrefix: 'i',
    },

    i18n: {
      langDir: 'locales/',
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
        onlyOnRoot: true,
        fallbackLocale: 'en',
      },
      defaultLocale: 'en',
      strategy: 'prefix_and_default',
      customLinkComponent: 'NuxtLinkLocale',
    },
  };
});
