import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const containerStyle = {
  maxWidth: '74%',
  maxHeight: '84%',
};

export const Mapcontainer = (props) => {
  const { google, query } = props;
  const [map, setMap] = useState(null);

  const searchByQuery = (query) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: map.center,
      radius: '500',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      }
    });
  };
  const searchNearby = (map, center) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
      }
    });
  };

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onMapReady={onMapReady}
      onRecenter={onMapReady}
      containerStyle={containerStyle}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'bt-BR',
})(Mapcontainer);
