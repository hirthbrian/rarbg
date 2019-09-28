import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableHighlight,
} from 'react-native';

import styles from './styles';
import { bytesToSize } from '../../utils';
import Category from '../Category';
import Ratio from '../Ratio';

export default ({
  title,
  category,
  link,
  ratio,
  size,
  evenIndex,
}) => {
  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(link)}
    >
      <View
        style={[styles.container, {
          backgroundColor: evenIndex ? '#222222' : '#303030',
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
            ratio={ratio}
            size={bytesToSize(size)}
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
};
