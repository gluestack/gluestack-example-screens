import React, { useState, useCallback, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { ButtonIcon, Button } from '@gluestack-ui-new/themed';
import { LocateFixed } from 'lucide-react-native';
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

  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(indiaLocation);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (isLoaded && userLocation) {
      if (map) {
        map.setCenter(userLocation);
      }
    }
  }, [isLoaded, map, userLocation]);

  const showUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLatLng);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleMarkerClick = () => {
    if (userLocation) {
      setInfoWindow(userLocation);
    }
  };

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={indiaLocation}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        {map && userLocation && (
          <Marker position={userLocation} onClick={handleMarkerClick} />
        )}
        {infoWindow && (
          <InfoWindow
            position={infoWindow}
            onCloseClick={() => setInfoWindow(null)}
          >
            <div>Your current location</div>
          </InfoWindow>
        )}
      </GoogleMap>

      <Button
        position="absolute"
        bottom="$1/4"
        right="$2"
        alignItems="center"
        onPress={showUserLocation}
      >
        <ButtonIcon as={LocateFixed} />
      </Button>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(Map);
