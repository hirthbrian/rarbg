import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';
import moment from "moment";

import { Color, bytesToSize } from '../utils';

const Container = styled.View`
  padding: 15px;
  background-color: ${Color.Black};
`

const Title = styled.Text`
  flex: 1;
  padding-right: 15px;
  color: ${Color.White};
  font-family: 'inter-regular';
`

const Size = styled.Text`
  color: ${Color.Green};
  font-family: 'inter-regular';
`

function Torrent({
  size,
  title,
  category,
  seeders,
  leechers,
  pubdate,
  magnetLink,
}: TorrentType) {
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(magnetLink)}
    >
      <Container>

        <Title
          numberOfLines={2}
        >
          {title}
        </Title>

        <Size>
          {bytesToSize(size)}
        </Size>

        <Title>
          {category}
        </Title>

        <Title>
          {`${seeders}/${leechers}`}
        </Title>

        <Title>
          {moment(pubdate).toString()}
        </Title>

      </Container>
    </TouchableHighlight>
  );
}

export interface TorrentType {
  title: string,
  size: number,
  magnetLink: string,
  category: string,
  seeders: number,
  leechers: number,
  pubdate: string,
}

export default Torrent;
