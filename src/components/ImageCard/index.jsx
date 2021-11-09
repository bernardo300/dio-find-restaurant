import React from 'react';
import { Card, Title } from './style';

const ImageCard = ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
};
export default ImageCard;
