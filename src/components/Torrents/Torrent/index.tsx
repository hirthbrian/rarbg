import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';
import { Color } from '../../../utils';
import Category from '../../Category';
import Ratio from '../../Ratio';

type TorrentProps = {
  title: string,
  category: string,
  link: string,
  ratio: number,
  size: number,
  evenIndex: boolean,
};

const Torrent = ({ title, category, link, ratio, size, evenIndex }: TorrentProps) => (
  <TouchableHighlight
    onPress={() => Linking.openURL(link)}
  >
    <View
      style={[styles.container, {
        backgroundColor: evenIndex ? Color.VeryDarkGrey : Color.DarkGrey,
      }]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Category
          name={category}
          evenIndex={evenIndex}
        />
        <Ratio
          ratio={ratio / 100}
          size={size}
        />
      </View>
      <Text
        numberOfLines={2}
        style={styles.text}
      >
        {title}
      </Text>
    </View>
  </TouchableHighlight>
);

export default Torrent;
