const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async () => {
  if (import.meta.client) {
    const data = await fetch(`${BASE_URL}/translations`, {
      headers: {
        'Accept-Language': useCookie('locale').value,
      },
    });
    return await data.json();
  } else {
    return {};
  }
}