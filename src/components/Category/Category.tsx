import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import { Color } from '../../utils';

type CategoryProps = {
  name: string,
  evenIndex?: boolean,
};

const Category = ({ name, evenIndex }: CategoryProps) => (
  <View
    style={styles.container}
  >
    <Text
      style={[styles.text, {
        backgroundColor: evenIndex ? Color.DarkGrey : Color.VeryDarkGrey,
      }]}
    >
      {name}
    </Text>
  </View>
);

export default Category;
