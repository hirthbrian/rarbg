import React from 'react';
import {
  View,
  Pressable,
} from 'react-native';
import Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';

import { bytesToSize } from '../../utils';
import {
  Size,
  Title,
  SubTitle,
  Container,
} from './styles';

function TorrentItem({
  size,
  title,
  category,
  seeders,
  leechers,
  magnetLink,
}: TorrentItemType) {
  return (
    <Pressable
      onPress={() => {
        Clipboard.setString(magnetLink);
        Toast.show('Copy to clipboard', {
          opacity: 1,
          position: -100,
        });
      }}
    >
      {({ pressed }) => (
        <Container pressed={pressed}>
          <Title numberOfLines={1}>
            {title}
          </Title>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <SubTitle>
              {category}
            </SubTitle>
            <SubTitle>
              {`${seeders} seed`}
            </SubTitle>
            <Size>
              {bytesToSize(size)}
            </Size>
          </View>
        </Container>
      )}
    </Pressable>
  );
}

export interface TorrentItemType {
  title: string,
  size: number,
  magnetLink: string,
  category: string,
  seeders: number,
  leechers: number,
  pubdate: string,
}

export default TorrentItem;
