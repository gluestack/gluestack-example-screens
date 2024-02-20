import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
  position: 'absolute'
};

const indiaLocation = {
  lat: 20.5937, // Latitude of India
  lng: 78.9629 // Longitude of India
};

const mapOptions = {
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#121212'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#272625'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#414040'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#535252'
        }
      ]
    }
  ],
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBJE6tT6E_3Gq92EbSsRWhXZv7l0qynSMM' // Replace 'YOUR_API_KEY' with your actual API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(indiaLocation);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={indiaLocation}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      {map && <Marker position={indiaLocation} visible={true} />}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(Map);
