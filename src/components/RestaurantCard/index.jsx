import React from 'react';
import ReactStars from 'react-rating-stars-component';
import restaurant from 'src/assets/restaurante-fake.png';
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Titulo</Title>
        <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
        <Address>Endereço</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurant} />
    </Restaurant>
  );
};

export default RestaurantCard;
