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
  justify-content: space-around;
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
  width: 360px;
  height: 85vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 5px;
`;

export const ContainerMapa = styled.aside`
  width: 100%;
  height: 85vh;
`;
export const Logo = styled.img`
  align-self: center;
  margin-right: 30px;
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
    margin-right: 16px;
  }
  margin: 5px;
`;
