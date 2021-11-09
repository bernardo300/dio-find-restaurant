import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants } from 'src/redux/modules/restaurants';

const containerStyle = {
  maxWidth: '74%',
  maxHeight: '84%',
};

export const Mapcontainer = (props) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
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
        dispatch(setRestaurants(results));
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
        dispatch(setRestaurants(results));
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
      containerStyle={containerStyle}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'bt-BR',
})(Mapcontainer);
