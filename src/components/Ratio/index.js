import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default ({
  ratio,
  size,
}) => {
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
