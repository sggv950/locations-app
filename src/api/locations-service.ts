const BASE_URL = process.env.NODE_ENV === "production" ? "/api" : "//localhost:5000/api";
const SEARCH_LOCATIONS_URL = `${BASE_URL}/autocomplete`;
const GET_NEW_LOCATION_URL = `${BASE_URL}/place`;
const GET_LOCATION_FROM_DB_URL = `${BASE_URL}/locations`;

export type Prediction = {
  id: string;
  description: string;
}

export const getLocationsFromDb = async () => {
  try {
    const res = await fetch(`${GET_LOCATION_FROM_DB_URL}`);
    const data = await res.json();
    const locations = data.locations;
    return locations;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const searchNewLocation = async (value: string) => {
  const res = await fetch(`${SEARCH_LOCATIONS_URL}/${value}`);
  const data = await res.json();
  const predictions = data.map(buildPredictionsObj);
  return predictions;
}

export const getNewLocationFromSearch = async (id: string) => {
  const res = await fetch(`${GET_NEW_LOCATION_URL}/${id}`);
  const data = await res.json();
  const location = buildLocationObj(data);
  return location;
}

function buildLocationObj(data: any) {
  return {
    id: data.place_id,
    name: data.name,
    address: data.formatted_address,
    lat: `${data.geometry.location.lat}`,
    lng: `${data.geometry.location.lng}`,
    website: data.website
  }
}

function buildPredictionsObj(data: any) {
  return {
    id: data.place_id,
    description: data.description
  }
}