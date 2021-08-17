import React from 'react';
import './location-list.scss';
import { LocationItem } from '../location-item/LocationItem';
import { useAppSelector } from '../../store/hooks';

// export type LocationListProps = {
//   locations: LocationItemType[]
// }

export const LocationList = () => {
  const locations = useAppSelector(state => state.locationsList);
  const selectedLocation = useAppSelector(state => state.selectedLocation);
  const selectedLocationId = selectedLocation ? selectedLocation.id : '';

  return (
    <div className='location-list-container'>
      {locations.map(location => (
        <LocationItem
          location={location}
          selectedLocationId={selectedLocationId}
          key={location.id}
        />
      ))}
    </div>
  );
};
