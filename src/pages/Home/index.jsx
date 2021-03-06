/* eslint-disable camelcase */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import InputMaterialUi from 'input-material-ui';
import logo from 'src/assets/logo.svg';
import fotoFake from 'src/assets/restaurante-fake.png';
import { useSelector } from 'react-redux';
// import Slider from 'react-slick';
import { ImageCard, RestaurantCard, Modal, Map, Loader, Skeleton } from 'src/components';
import {
  Wrapper,
  ContainerSeach,
  Container,
  ContainerResultado,
  ContainerMapa,
  Logo,
  Carousel,
  CarrouselTitle,
  ModalTitle,
  ModalContent,
} from './style';

const Home = () => {
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
  console.log(restaurants);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const [inptValue, setInputValue] = useState('');
  const [modalOponed, setModalOponed] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      setQuery(inptValue);
    }
  };

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOponed(true);
  }
  return (
    <Wrapper>
      <ContainerSeach>
        <Logo src={logo} alt="Logo do site" />
        <TextField
          fullWidth
          label="Pesquisar"
          trailingIcon={<MaterialIcon role="button" icon="search" />}>
          <Input
            type="text"
            value={inptValue}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
        </TextField>
      </ContainerSeach>
      <Container>
        <ContainerResultado>
          <CarrouselTitle> Na sua area</CarrouselTitle>
          <Carousel {...settings}>
            {restaurants.length > 0 ? (
              restaurants.map((restaurant) => (
                <ImageCard
                  key={restaurant.place_id}
                  photo={restaurant.photos ? restaurant.photos[0].getUrl() : fotoFake}
                  title={restaurant.name}
                />
              ))
            ) : (
              <Loader />
            )}
          </Carousel>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              restaurant={restaurant}
              onClick={() => handleOpenModal(restaurant.place_id)}
            />
          ))}
        </ContainerResultado>
        <ContainerMapa>
          <Map query={query} placeId={placeId} />
        </ContainerMapa>
      </Container>
      <Modal open={modalOponed} onClose={() => setModalOponed(!modalOponed)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent> {restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent> {restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora :-)'
                : 'Fechado neste momento :-('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
