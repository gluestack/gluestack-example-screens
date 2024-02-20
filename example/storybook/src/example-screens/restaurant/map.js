import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { LocateFixed } from 'lucide-react-native';
import { Icon } from '@gluestack-ui-new/themed';

const containerStyle = {
  width: '100%',
  height: '100vh',
  position: 'absolute',
};

const indiaLocation = {
  lat: 20.5937, // Latitude of India
  lng: 78.9629, // Longitude of India
};

const mapOptions = {
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#121212',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#272625',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#414040',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#535252',
        },
      ],
    },
  ],
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBJE6tT6E_3Gq92EbSsRWhXZv7l0qynSMM',
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

  // React.useEffect(() => {
  //   if (isLoaded) {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const userLatLng = {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           };
  //           setUserLocation(userLatLng);
  //           map && map.setCenter(userLatLng);
  //         },
  //         (error) => {
  //           console.error('Error getting user location:', error);
  //         }
  //       );
  //     } else {
  //       console.error('Geolocation is not supported by this browser.');
  //     }
  //   }
  // }, [isLoaded, map]);

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
      <Icon as={LocateFixed} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(Map);
