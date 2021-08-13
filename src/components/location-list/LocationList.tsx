import React from 'react';
import './location-list.scss';
import { LocationItem } from '../location-item/LocationItem';

export type LocationListProps = {
  locations: LocationItem[]
}

export const LocationList = ({locations}: LocationListProps) => {
  
  return <div className="location-list-container">
    {locations.map(LocationItem)}
  </div>;
};
