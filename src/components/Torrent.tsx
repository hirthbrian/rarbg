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
        style={[styles.container, {
          backgroundColor: Color.VeryDarkGrey,
        }]}
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
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    flex: 1,
    fontSize: 18,
    paddingRight: 15,
    color: Color.LightGrey,
  },
});

export interface TorrentType {
  title: string,
  size: number,
  magnetLink: string,
};

export default Torrent;
