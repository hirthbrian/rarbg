import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Color } from '../utils';

function Size({ size }: SizeType) {
  const bytesToSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes <= 0) return 'n/a';
    const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024));
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
  };

  return (
    <View>
      <Text
        style={styles.text}
      >
        {bytesToSize(size)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    height: 3,
    width: 75,
    borderRadius: 3,
    flexDirection: 'row',
    backgroundColor: Color.Orange,
    overflow: 'hidden',
  },
  barGreen: {
    backgroundColor: Color.Green,
  },
  text: {
    fontSize: 16,
    color: Color.LightGrey,
    textAlign: 'right',
    paddingBottom: 2,
  },
});

interface SizeType {
  size: number,
};

export default Size;
