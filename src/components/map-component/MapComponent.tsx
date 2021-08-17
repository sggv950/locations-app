import './map-component.scss';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export const MapComponent = withScriptjs(
  withGoogleMap((props: any) => {

    return (
      <GoogleMap defaultZoom={13} center={{ lat: (+props.lat), lng: (+props.lng) }}>
        <Marker position={{ lat: (+props.lat), lng: (+props.lng) }} />
      </GoogleMap>
    );
  })
);
