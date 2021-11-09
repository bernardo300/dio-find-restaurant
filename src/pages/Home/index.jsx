import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import InputMaterialUi from 'input-material-ui';
import logo from 'src/assets/logo.svg';
import restaurant from 'src/assets/restaurante-fake.png';
// import Slider from 'react-slick';
import { ImageCard, RestaurantCard, Modal, Map } from 'src/components';
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
  const [modalOponed, setModalOponed] = useState(false);
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      setQuery(inptValue);
    }
  };

  return (
    <Wrapper>
      <ContainerSeach>
        <Logo src={logo} alt="Logo do site" />
        <TextField
          outlined
          label="Pesquisar"
          trailingIcon={<MaterialIcon role="button" icon="search" />}>
          <Input
            type="text"
            value={inptValue}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
          />
        </TextField>

        {/* <InputMaterialUi
          type="text"
          label="Pesquisar Restaurante"
          value={inptValue}
          onChange={handleChange}
          InputProps={onKeyPress}
        /> */}
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
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </ContainerResultado>
        <ContainerMapa>
          <Map query={query} />
        </ContainerMapa>
      </Container>
      <Modal open={modalOponed} onClose={() => setModalOponed(!modalOponed)} />
    </Wrapper>
  );
};

export default Home;
