import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

const icon = require('../../assets/glass.png');

const renderIcon = (loading) => (
  <View
    style={styles.iconContainer}
  >
    {loading ? (
      <ActivityIndicator
        color="#CCCCCC"
      />
    ) : (
        <Image
          source={icon}
          style={styles.icon}
        />
      )
    }
  </View>
)

export default ({
  search,
  loading,
}) => {
  const [text, onChangeText] = useState('');

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.searchBarContainer}
      >
        {renderIcon(loading)}
        <TextInput
          autoFocus
          onChangeText={text => onChangeText(text)}
          value={text}
          style={styles.searchBarText}
          placeholderTextColor="#999999"
          placeholder="Search by title"
          keyboardAppearance="dark"
          onSubmitEditing={() => search(text)}
        />
      </View>
    </View>
  );
};
