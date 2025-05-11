import { ApiService } from './api';

export class ProductService {
  static async fetchProduct(slug: string) {
    try {
      const res: any = await ApiService.get(`/categories/filter/${slug}`);
      return {
        data: res,
      };
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
}
