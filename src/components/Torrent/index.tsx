import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';
import { Color } from '../../utils';
import Size from '../Size';
import { ITorrent } from '../../actions/types';

const Torrent = ({ title, size, magnetLink }: ITorrent) => (
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
);

export default Torrent;
