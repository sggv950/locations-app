import {
  getLocationsFromDb,
  Prediction,
  searchNewLocation,
} from '../api/locations-service';
import { Location } from './reducer';

export const SET_LOCATIONS = 'SET_LOCATIONS';
export const ADD_LOCATION = 'ADD_LOCATION';
export const SERVER_ADD_LOCATION = 'server/add';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const SERVER_REMOVE_LOCATION = 'server/remove';
export const SET_ACTIVE_LOCATION = 'SET_ACTIVE_LOCATION';
export const DEACTIVATE_LOCATION = 'DEACTIVATE_LOCATION';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

export type NewLocationData = string;
export type LocationId = string;

export type LocationsAction =
  | { type: 'SET_LOCATIONS'; payload: Location[] }
  | { type: 'ADD_LOCATION'; payload: Location }
  | { type: 'server/add'; payload: Location }
  | { type: 'REMOVE_LOCATION'; payload: LocationId }
  | { type: 'server/remove'; payload: LocationId }
  | { type: 'SET_ACTIVE_LOCATION'; payload: LocationId }
  | { type: 'DEACTIVATE_LOCATION' }
  | { type: 'UPDATE_SEARCH_RESULTS'; payload: Location[] | [] }
  | any

export const getLocations = () => (dispatch: any) => {
  getLocationsFromDb().then((locations: Location[]) => {
    const firstLocationId = locations[0]['id'] || '';
    dispatch(setLocations(locations));
    dispatch(setActiveLocation(firstLocationId));
  });
};
export const setLocations = (locations: Location[]): LocationsAction => ({
  type: SET_LOCATIONS,
  payload: locations,
});

export const addLocation = (location: Location): LocationsAction | undefined => ({
  type: ADD_LOCATION,
  payload: location,
});

export const serverAddLocation = (location: Location): LocationsAction => ({
  type: SERVER_ADD_LOCATION,
  payload: location,
});

export const removeLocation = (locationId: LocationId): LocationsAction => ({
  type: REMOVE_LOCATION,
  payload: locationId,
});

export const serverRemoveLocation = (
  locationId: LocationId
): LocationsAction => ({
  type: SERVER_REMOVE_LOCATION,
  payload: locationId,
});

export const searchLocation = (searchTerm: string) => (dispatch: any) => {
  searchNewLocation(searchTerm).then((locations: Prediction[]) => {
    dispatch(updateSearchResults(locations));
  });
};
export const updateSearchResults = (locations: Location[]) => ({
  type: UPDATE_SEARCH_RESULTS,
  payload: locations,
});

export const setActiveLocation = (locationId: LocationId): LocationsAction => ({
  type: SET_ACTIVE_LOCATION,
  payload: locationId,
});

export const deactivateLocation = (): LocationsAction => ({
  type: DEACTIVATE_LOCATION,
});
