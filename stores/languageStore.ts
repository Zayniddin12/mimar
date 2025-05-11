import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    lang: 'ru',
    t: null as any,
    loading: false,
    loaded: false,
    siteinfo: null as any
  }),
  actions: {
    async changeLanguage(lang: string) {
      this.lang = lang;
    }
  },
});

