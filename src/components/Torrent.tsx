import React from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import { Color } from '../utils';
import Size from './Size';

function Torrent({
  size,
  title,
  magnetLink,
}: TorrentType) {
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(magnetLink)}
    >
      <View
        style={styles.container}
      >
        <Text
          numberOfLines={2}
          style={styles.text}
        >
          {title}
        </Text>
        <Size
          size={size}
        />
      </View>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: Color.Black,
  },
  text: {
    flex: 1,
    paddingRight: 15,
    color: Color.White,
    fontFamily: 'inter-regular',
  },
});

export interface TorrentType {
  title: string,
  size: number,
  magnetLink: string,
};

export default Torrent;
