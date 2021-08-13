export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const SEARCH_LOCATION = 'SEARCH_LOCATION';

export const addLocation = location => ({
  type: ADD_LOCATION,
  payload: location,
});
export const removeLocation = locationId => ({
  type: REMOVE_LOCATION,
  payload: locationId,
});
export const searchLocation = searchTerm => ({
  type: SEARCH_LOCATION,
  payload: searchTerm,
});
