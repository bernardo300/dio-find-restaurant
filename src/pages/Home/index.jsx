import React, { useState } from 'react';
// import TextField, { Input } from '@material/react-text-field';
// import MaterialIcon from '@material/react-material-icon';
import InputMaterialUi from 'input-material-ui';
import logo from 'src/assets/logo.svg';
import restaurant from 'src/assets/restaurante-fake.png';
// import Slider from 'react-slick';
import { ImageCard, RestaurantCard } from 'src/components';
import {
  Wrapper,
  ContainerSeach,
  Container,
  ContainerResultado,
  ContainerMapa,
  Logo,
  Carousel,
  CarrouselTitle,
} from './style';

const Home = () => {
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
  const handleChange = (e) => {
    setInputValue(e);
  };
  return (
    <Wrapper>
      <ContainerSeach>
        <Logo src={logo} alt="Logo do site" />
        <InputMaterialUi
          type="text"
          label="Pesquisar Restaurante"
          value={inptValue}
          onChange={handleChange}
        />
      </ContainerSeach>
      <Container>
        <ContainerResultado>
          <CarrouselTitle> Na sua area</CarrouselTitle>
          <Carousel {...settings}>
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
            <ImageCard photo={restaurant} title="Hello" />
          </Carousel>
          <RestaurantCard />
        </ContainerResultado>
        <ContainerMapa />
      </Container>
    </Wrapper>
  );
};

export default Home;
