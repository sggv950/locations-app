// import { combineReducers } from 'redux';
import { Prediction } from '../api/locations-service';
import { filterWithId } from '../utils/util';
import {
  ADD_LOCATION,
  LocationsAction,
  REMOVE_LOCATION,
  SET_ACTIVE_LOCATION,
  DEACTIVATE_LOCATION,
  SET_LOCATIONS,
  UPDATE_SEARCH_RESULTS,
} from './actions';

export type Location = {
  name?: string;
  id: string;
  lat?: string;
  lng?: string;
  address?: string;
  website?: string;
};

export interface LocationsState {
  locationsList: Location[];
  selectedLocation: Location | null;
  searchResults: Prediction[];
}

export const initialState: LocationsState = {
  locationsList: [],
  selectedLocation: null,
  searchResults: [],
};

export const reducer = (
  state = initialState,
  action: LocationsAction
): LocationsState => {
  if (action.type === SET_LOCATIONS) {
    return { ...state, locationsList: [...action.payload] };
  }

  if (action.type === ADD_LOCATION) {
    const newLocation = {
      ...action.payload,
    };
    return { ...state, locationsList: [newLocation, ...state.locationsList] };
  }

  if (action.type === REMOVE_LOCATION) {
    const locationToRemove = filterWithId(action.payload);
    const updatedLocations = state.locationsList.filter(location =>
      locationToRemove(location.id)
    );
    const selectedLocation =
      updatedLocations.find(
        location => location.id === state.selectedLocation?.id
      ) || null;
    return { ...state, selectedLocation, locationsList: updatedLocations };
  }

  if (action.type === UPDATE_SEARCH_RESULTS) {
    const searchResults = action.payload;
    return { ...state, searchResults };
  }

  if (action.type === SET_ACTIVE_LOCATION) {
    const clonedLocations = [...state.locationsList];
    const selectedLocation =
      clonedLocations.find(location => location.id === action.payload) || null;
    return { ...state, selectedLocation };
  }
  if (action.type === DEACTIVATE_LOCATION) {
    const selectedLocation = null;
    return { ...state, selectedLocation };
  }

  return state;
};
