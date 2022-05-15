import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Container, ShadowContainer, SubContainer, Title } from "./styles";
import { RootState } from "../../redux/store";
import { hideToast } from "../../redux/features/toast/toastSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const opacity = useSharedValue(0);
  const text = useSelector((state: RootState) => state.toast.text);
  const isVisible = useSelector((state: RootState) => state.toast.isVisible);

  useEffect(() => {
    if (isVisible) {
      opacity.value = 1;
      setTimeout(() => (opacity.value = 0), 2000);
      setTimeout(() => dispatch(hideToast()), 2300);
    }
  }, [isVisible]);

  const aes = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value),
  }));

  if (!isVisible) return null;

  return (
    <Container style={aes}>
      <ShadowContainer>
        <SubContainer>
          <Title>{text}</Title>
        </SubContainer>
      </ShadowContainer>
    </Container>
  );
};

export default Toast;
