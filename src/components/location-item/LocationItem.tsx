import React from 'react';
import { useAppDispatch } from '../../hooks';
import { removeLocation } from '../../locations-store/actions';
import './location-item.scss';

export type LocationItem = {
  name: string;
  id: string;
  isSelected: boolean;
};

export const LocationItem = ({ name, id, isSelected }: LocationItem) => {
  const dispatch = useAppDispatch();

  const removeCurrentLocation = () => {
    return dispatch(removeLocation(id));
  };

  return (
    <div className={`location-item-container ${ isSelected ? 'selected-location' : '' }`} key={id} >
      <button className='remove-location-btn' onClick={removeCurrentLocation}>&times;</button>
      <div className='location-item-name'>{name}</div>
      <div className='location-item-name'>{id}</div>
    </div>
  );
};
