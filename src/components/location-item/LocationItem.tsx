import React, { SyntheticEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { deactivateLocation, removeLocation, serverRemoveLocation, setActiveLocation } from '../../store/actions';
import './location-item.scss';
import { Location } from '../../store/reducer';

export type LocationItemProps = {
  location: Location;
  selectedLocationId?: string;
};

export const LocationItem = ({ location, selectedLocationId }: LocationItemProps) => {
  const dispatch = useAppDispatch();

  const { id, name, address } = location;
  const isSelected = id === selectedLocationId;

  const removeCurrentLocation = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    if (isSelected) {
      dispatch(deactivateLocation());
    }
    dispatch(removeLocation(id));
    dispatch(serverRemoveLocation(id));
  };
  
  const selectLocation = () => {
    dispatch(setActiveLocation(id));
  }

  return (
    <div className={`location-item-container ${ isSelected ? 'selected-location' : '' }`} onClick={selectLocation} >
      <button className='remove-location-btn' onClick={removeCurrentLocation}>&times;</button>
      <div className='location-item-name'>{name}</div>
      <div className='location-item-address'>{address}</div>
    </div>
  );
};
