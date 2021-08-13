const SEARCH_LOCATIONS_URL = 'http://localhost:3003/places';

export const searchLocation = async () => {
  const res = await fetch(SEARCH_LOCATIONS_URL);
  const data = await res.json();
  return data;
}