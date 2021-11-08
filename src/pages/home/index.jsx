import React, { useState } from 'react';
// import TextField, { Input } from '@material/react-text-field';
// import MaterialIcon from '@material/react-material-icon';
import InputMaterialUi from 'input-material-ui';
import logo from 'src/assets/logo.svg';
import restaurant  from 'src/assets/restaurante-fake.png'
import { Wrapper, ContainerSeach, Container, ContainerResultado, ContainerMapa, Logo, Carousel,CarrouselTitle } from './style';
import Slider from 'react-slick'
import {Card} from 'src/components'

const Home = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }
  const [inptValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e);
  };
  return (
    <Wrapper>
      <ContainerSeach>
          <Logo src={logo} alt="Logo do site" />
          <InputMaterialUi type="text" label="Pesquisar Restaurante" value={inptValue} onChange={handleChange}/>
          {console.log(inptValue)}
      </ContainerSeach>
      <Container>
        <ContainerResultado>
          <CarrouselTitle> Na sua area</CarrouselTitle>
          <Carousel {...settings}>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>
              <Card photo={restaurant}/>


          </Carousel>
        </ContainerResultado>
        <ContainerMapa/>
      </Container>

    </Wrapper>
  );
};

export default Home;
