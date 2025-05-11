import { ApiService } from './api';

export class CategoryService {

  static async fetchCategory() {
    try {
      const res: any = await ApiService.get('/categories');
      return {
        data: res.data || [],
      };
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }

  static async fetchSubCategory(slug: string) {
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
