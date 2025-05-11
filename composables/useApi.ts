import type { NitroFetchRequest } from 'nitropack';
import type { FetchOptions } from 'ofetch';

import { useCustomToast } from '~/composables/useCustomToast';
import { errorHandler } from '~/utils';

export const useApi = (apiUrl?: string) => {
  const baseURL = apiUrl || (import.meta.env.VITE_API_BASE_URL as string);
  const locale = useCookie('locale');
  const loading = ref(false);
  const { $fingerprint } = useNuxtApp();
  const { showToast } = useCustomToast();
  const visitorId = useCookie('visitor-id');

  const isExpired = ref(false);

  const headers = {};

  onMounted(async () => {
    const fp = await $fingerprint;
    const result = await fp.get();
    if (!visitorId.value) {
      visitorId.value = result.visitorId;
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  });


  function $service(options?: FetchOptions) {
    return $fetch.create({
      ...options,
      baseURL,
      headers: {
        ...options?.headers,
        'Accept-Language': locale.value || 'en',
        'Device-Id': visitorId.value,
        ...headers,
      },
    });
  }

  function $get<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      loading.value = true;
      $service(options)(endpoint)
        .then((response: T | any) => {
          resolve(response);
        })
        .catch((error) => {
          if (
            error.response?.status !== 401 &&
            error.response?.status !== 403
          ) {
            if (errorHandler(error.response)) {
              showToast(errorHandler(error.response) as string, 'error');
            }
          }
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $post<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'POST' })(endpoint)
        .then((response: T | any) => {
          resolve(response);
        })
        .catch((error) => {
          if (
            error.response?.status !== 401 &&
            error.response?.status !== 403
          ) {
            if (errorHandler(error.response)) {
              showToast(errorHandler(error.response) as string, 'error');
            }
          }
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $put<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PUT' })(endpoint)
        .then((response: T | any) => {
          resolve(response);
        })
        .catch((error) => {
          if (
            error.response?.status !== 401 &&
            error.response?.status !== 403
          ) {
            if (errorHandler(error.response)) {
              showToast(errorHandler(error.response) as string, 'error');
            }
          }
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $patch<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'PATCH' })(endpoint)
        .then((response: T | any) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response.status !== 401 && error.response.status !== 403) {
            if (errorHandler(error.response)) {
              showToast(errorHandler(error.response) as string, 'error');
            }
          }
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  function $delete<T = never>(
    endpoint: NitroFetchRequest,
    options?: FetchOptions,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      $service({ ...options, method: 'DELETE' })(endpoint)
        .then((response: T | any) => {
          resolve(response);
        })
        .catch((error) => {
          if (error.response.status !== 401 && error.response.status !== 403) {
            if (errorHandler(error.response)) {
              showToast(errorHandler(error.response) as string, 'error');
            }
          }
          reject(error.response);
        })
        .finally(() => {
          loading.value = false;
        });
    });
  }

  return {
    loading,
    baseURL,
    $get,
    $post,
    $put,
    $patch,
    $delete,
  };
};
