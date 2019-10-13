import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import { bytesToSize } from '../../utils';

type SizeProps = {
  size: number,
};

const Size = ({ size }: SizeProps) => (
  <View>
    <Text
      style={styles.text}
    >
      {bytesToSize(size)}
    </Text>
  </View>
);

export default Size;
