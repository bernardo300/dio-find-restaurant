import styled from 'styled-components';
import React from 'react';

export const Card = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin: 10px;
`;

const ImageCard = ({ photo }) => {
  return <Card photo={photo} />;
};
export default ImageCard;
