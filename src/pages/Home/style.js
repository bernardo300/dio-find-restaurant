import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  overflow-y: auto;
`;

export const ContainerSeach = styled.header`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width:100%:
`;

export const ContainerResultado = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 25%;
  height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
`;

export const ContainerMapa = styled.aside`
  padding-left: 5px;
  margin: 0;
`;
export const Logo = styled.img`
  align-self: center;
  margin-right: 60px;
  padding-left: 40px;
`;

export const CarrouselTitle = styled.h1`
   {
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 32px;
  }
  margin: 5px;
`;
