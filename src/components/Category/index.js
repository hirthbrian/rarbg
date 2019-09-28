import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

export default ({
  name,
  evenIndex
}) => {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={[styles.text, {
          backgroundColor: evenIndex ? '#2D2D2D' : '#3B3B3B',
        }]}
      >
        {name}
      </Text>
    </View>
  )
};
