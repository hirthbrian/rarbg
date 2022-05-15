import React from "react";
import { View, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import * as Clipboard from "expo-clipboard";

import { bytesToSize } from "../../../../utils";
import { showToast } from "../../../../redux/features/toast/toastSlice";
import { Size, Title, SubTitle, Container, SubContainer } from "./styles";
import { Props } from "./types";

const Item = ({ size, title, category, magnetLink }: Props) => {
  const dispatch = useDispatch();

  const onPress = () => {
    Clipboard.setStringAsync(magnetLink);
    dispatch(showToast("Copy to clipboard"));
  };

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Container pressed={pressed}>
          <Title numberOfLines={1}>{title}</Title>
          <SubContainer>
            <SubTitle>{category}</SubTitle>
            <Size>{bytesToSize(size)}</Size>
          </SubContainer>
        </Container>
      )}
    </Pressable>
  );
};

export default Item;
