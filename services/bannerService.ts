import { ApiService } from './api';

export class BannerService {
  static async fetchBanners() {
    try {
      const res: any = await ApiService.get('/banners');
      return {
        data: res.data || [],
      };
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
}
