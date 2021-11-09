import React from 'react';
import ReactStars from 'react-rating-stars-component';
import fotoFake from 'src/assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : fotoFake} />
    </Restaurant>
  );
};

export default RestaurantCard;
