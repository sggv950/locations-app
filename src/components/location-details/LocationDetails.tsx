import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { LocationAdditionalInfo } from '../location-additional-info/LocationAdditionalInfo';
import { MapComponent } from '../map-component/MapComponent';
import './location-details.scss';
const { REACT_APP_MAPS_API } = process.env;

export const LocationDetails = () => {
  const selectedLocation = useAppSelector(state => state.selectedLocation);

  return (
    <div className='location-details-container'>
      {selectedLocation && (
        <LocationAdditionalInfo selectedLocation={selectedLocation} />
      )}
      {selectedLocation && <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={selectedLocation.lat} lng={selectedLocation.lng} />
      }

      {!selectedLocation && (
        <div className='location-details-placeholder'>
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            size='4x'
            color='#20303c'
            opacity='0.3'
          />
          <p>
            looks like no location is active
            <br />
            add or pick one...
          </p>
        </div>
      )}
    </div>
  );
};
