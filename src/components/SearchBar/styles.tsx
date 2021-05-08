import styled from 'styled-components/native';

import { COLORS } from '../../utils';

export const Container = styled.View`
  padding: 10px;
  border-bottom-color: ${COLORS.lightBlack};
  border-bottom-width: 1px;
`;

export const SearchBarContainer = styled.View`
  padding: 12px 15px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.lightBlack};
`;

export const SearchBarText = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${COLORS.white};
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'inter-regular';
`;
