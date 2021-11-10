import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants, setRestaurant } from 'src/redux/modules/restaurants';

const containerStyle = {
  maxWidth: '74%',
  maxHeight: '84%',
};

export const Mapcontainer = (props) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const { google, query, placeId } = props;
  const [map, setMap] = useState(null);

  function getRestaurantById(placeId) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));

    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place));
      }
    });
  }

  useEffect(() => {
    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [placeId]);

  const searchByQuery = (query) => {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

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
    dispatch(setRestaurant([]));
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
      containerStyle={containerStyle}
      {...props}>
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
