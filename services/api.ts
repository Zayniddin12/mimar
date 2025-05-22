import { $fetch } from 'ofetch';
import { useLanguageStore } from '@/stores/languageStore';

import { useNuxtApp } from '#app';

export class ApiService {
  static getBaseUrl() {
    const { $apiBase } = useNuxtApp();
    return 'https://qwer.mediaprint.uz/api';
  }

  static async get<T>(url: string, params = {}): Promise<T> {
    const store = useLanguageStore();
    return await $fetch(`${this.getBaseUrl()}${url}`, {
      method: 'GET',
      params,
      headers: {
        'Accept-Language': store.lang,
      },
    });
  }

  static async post<T>(url: string, body: object): Promise<T> {
    return await $fetch(`${this.getBaseUrl()}${url}`, {
      method: 'POST',
      body,
    });
  }

  static async put<T>(url: string, body: object): Promise<T> {
    return await $fetch(`${this.getBaseUrl()}${url}`, {
      method: 'PUT',
      body,
    });
  }

  static async delete<T>(url: string): Promise<T> {
    return await $fetch(`${this.getBaseUrl()}${url}`, {
      method: 'DELETE',
    });
  }
}
