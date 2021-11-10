import React, { useEffect, useState } from 'react';
import Skeleton from 'src/components/Skeleton';
import { Card, Title } from './style';

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
