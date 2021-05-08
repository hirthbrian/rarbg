import styled from 'styled-components/native';

import { COLORS } from '../../utils';

export const Container = styled.View`
  padding: 15px;
  background-color: ${props => (
    props.pressed ? COLORS.lightBlack : COLORS.black
  )};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${COLORS.white};
  font-family: 'inter-regular';
`;

export const SubTitle = styled.Text`
  color: ${COLORS.white};
  font-family: 'inter-regular';
`;

export const Size = styled.Text`
  color: ${COLORS.green};
  font-family: 'inter-regular';
`;
