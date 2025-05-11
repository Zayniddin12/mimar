import { ApiService } from './api';
import { useLanguageStore } from '@/stores/languageStore';

export class TranslationService {
  static useTranslation() {
    const store = useLanguageStore();
    const fetchTranslations = async () => {
      try {
        store.t = await ApiService.get('/translations');
        // store.siteinfo = await ApiService.get('/siteinfo');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    return { fetchTranslations };
  }
}
