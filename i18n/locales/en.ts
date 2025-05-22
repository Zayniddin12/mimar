const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async () => {
  if (import.meta.client) {
    const isFirstVisit = !localStorage.getItem('hasVisitedBefore');
    const locale = useCookie('locale').value;

    // Agar birinchi tashrif bo'lsa, Accept-Language yuborilmasin
    const headers = isFirstVisit
      ? {}
      : {
        'Accept-Language': locale || 'en',
      };

    // Belgilab qo'yamizki, foydalanuvchi saytga tashrif buyurdi
    localStorage.setItem('hasVisitedBefore', 'true');

    const response = await fetch(`${BASE_URL}/translations`, {
      headers,
    });

    return await response.json();
  } else {
    return {};
  }
};
