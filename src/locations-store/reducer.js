import { v4 as uuidv4 } from 'uuid';
import { idToFilter } from '../utils/util';
import { ADD_LOCATION, REMOVE_LOCATION, SEARCH_LOCATION } from './actions';

export const initialState = {
  locationsList: [
    { name: 'Tel Aviv', id: uuidv4(), isSelected: true },
    { name: 'Jerusalem', id: uuidv4(), isSelected: false },
    { name: 'Haifa', id: uuidv4(), isSelected: false },
    { name: 'New York', id: uuidv4(), isSelected: false },
    { name: 'London', id: uuidv4(), isSelected: false },
  ],
};

export const locationsReducer = (state = initialState, action) => {
  if (action.type === ADD_LOCATION) {
    const newLocation = {
      name: action.payload,
      isSelected: false,
      id: uuidv4(),
    };
    return { locationsList: [...state.locationsList, newLocation] };
  }

  if (action.type === REMOVE_LOCATION) {
    const idToRemove = idToFilter(action.payload);
    const updatedLocations = state.locationsList.filter(location => idToRemove(location.id))
    return { locationsList: updatedLocations };
  }

  if (action.type === SEARCH_LOCATION) {
    return state;
  }

  return state;
};
