import React from 'react';
import { Location } from '../../store/reducer';
import './location-additional-info.scss';

export type SelectedLocationProps = {
  selectedLocation: Location;
}

export const LocationAdditionalInfo = ({selectedLocation}: SelectedLocationProps) => {
  const { name, address, website } = selectedLocation;

  return (
    <div className='location-info-container'>
      <strong>Location details:</strong>
      <div className='location-info-text'>
        <p>{name}</p>
        {!!website && <strong><a href={website} target="_blank">website</a></strong>}
        <p><strong>address:</strong> {address}</p>
      </div>
    </div>
  );
};
