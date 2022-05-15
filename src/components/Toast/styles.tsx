import Animated from "react-native-reanimated";
import styled from "styled-components";
import { COLORS } from "../../utils";

export const Container = styled(Animated.View)`
  bottom: 50px;
  position: absolute;
  align-self: center;
`;

export const ShadowContainer = styled.View`
  elevation: 5;
  shadow-color: black;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const SubContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  background-color: ${COLORS.lightBlack};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${COLORS.white};
  font-family: "inter-regular";
`;
