import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

function Ratio({ ratio, size }: { ratio: number, size: string }) {
  return (
    <View>
      <Text
        style={styles.text}
      >
        {size}
      </Text>
      <View
        style={styles.barContainer}
      >
        <View
          style={[styles.barGreen, {
            flex: ratio / 100,
          }]}
        />
      </View>
    </View>
  );
};

export default Ratio;

