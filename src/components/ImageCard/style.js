import styled from 'styled-components';

export const Card = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin: 16px;
  padding: 10px;
  text-align: center;
`;
export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
`;
