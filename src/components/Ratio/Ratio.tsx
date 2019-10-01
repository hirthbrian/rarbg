import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import { bytesToSize } from '../../utils';

type RatioProps = {
  ratio: number,
  size: number,
};

const Ratio = ({ size, ratio }: RatioProps) => (
  <View>
    <Text
      style={styles.text}
    >
      {bytesToSize(size)}
    </Text>
    <View
      style={styles.barContainer}
    >
      <View
        style={[styles.barGreen, { flex: ratio }]}
      />
    </View>
  </View>
);

export default Ratio;
