import './map-component.scss';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const defaultMapOptions = {
  fullscreenControl: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false
};


export const MapComponent = withScriptjs(
  withGoogleMap((props: any) => {
    return (
      <GoogleMap defaultOptions={defaultMapOptions} defaultZoom={13} center={{ lat: (+props.lat), lng: (+props.lng) }}>
        <Marker position={{ lat: (+props.lat), lng: (+props.lng) }} />
      </GoogleMap>
    );
  })
);
